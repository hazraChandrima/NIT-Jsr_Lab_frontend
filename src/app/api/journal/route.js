import { connectDB } from "@/lib/db";
import { Achievement } from "@/models/journal";
import { Member } from "@/models/member";

const isObjectId = (val) => val && /^[a-f\d]{24}$/i.test(val.toString());

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    if (!body.Title || !body.Description) {
      return Response.json(
        { error: "Missing required fields: Title, Description" },
        { status: 400 },
      );
    }

    const achievement = await Achievement.create({
      Title: body.Title,
      Description: body.Description,
      AchivmentParagraph: body.AchivmentParagraph || [],
      Thumbnail: body.Thumbnail || "",
      Link: body.Link || "",
      Date: body.Date || new Date(),
      Pdf:
        body.Pdf && typeof body.Pdf === "string"
          ? body.Pdf.replace("/image/upload/", "/raw/upload/")
          : body.Pdf || "",
      author: body.author || null,
      publishedAt: body.publishedAt || new Date(),
    });

    // ✅ Only populate if author is a valid ObjectId
    if (isObjectId(body.author)) {
      await achievement.populate("author", "name email");
    }

    const response = {
      id: achievement._id.toString(),
      attributes: {
        Title: achievement.Title,
        Description: achievement.Description,
        AchivmentParagraph: achievement.AchivmentParagraph || [],
        Thumbnail: achievement.Thumbnail,
        Link: achievement.Link,
        Date: achievement.Date,
        Pdf: achievement.Pdf
          ? achievement.Pdf.replace("/image/upload/", "/raw/upload/")
          : achievement.Pdf,
        createdAt: achievement.createdAt,
        updatedAt: achievement.updatedAt,
        publishedAt: achievement.publishedAt,
      },
    };

    if (achievement.author) {
      const populated = typeof achievement.author === "object";
      response.attributes.author = populated
        ? {
            data: {
              id: achievement.author._id?.toString(),
              attributes: {
                name: achievement.author.name || "",
                email: achievement.author.email || "",
              },
            },
          }
        : { data: null, name: achievement.author };
    }

    return Response.json({ data: response }, { status: 201 });
  } catch (error) {
    console.error("Error creating achievement:", error);
    return Response.json(
      { error: "Failed to create achievement", details: error.message },
      { status: 500 },
    );
  }
}

export async function GET(request) {
  try {
    await connectDB();

    // ✅ No .populate() here — handle manually to avoid CastError on plain strings
    const achievements = await Achievement.find({
      publishedAt: { $exists: true, $ne: null },
    })
      .sort({ Date: -1 })
      .lean();

    // ✅ Collect only valid ObjectId authors and fetch them in one query
    const objectIdAuthors = achievements
      .map((a) => a.author)
      .filter(isObjectId);

    const members =
      objectIdAuthors.length > 0
        ? await Member.find({ _id: { $in: objectIdAuthors } }).lean()
        : [];

    const memberMap = Object.fromEntries(
      members.map((m) => [m._id.toString(), m]),
    );

    const data = achievements.map((achievement) => {
      const obj = {
        id: achievement._id.toString(),
        attributes: {
          Title: achievement.Title,
          Description: achievement.Description,
          AchivmentParagraph: achievement.AchivmentParagraph || [],
          Thumbnail: achievement.Thumbnail,
          Link: achievement.Link,
          Date: achievement.Date,
          Pdf: achievement.Pdf
            ? achievement.Pdf.replace("/image/upload/", "/raw/upload/")
            : achievement.Pdf,
          createdAt: achievement.createdAt,
          updatedAt: achievement.updatedAt,
          publishedAt: achievement.publishedAt,
        },
      };

      if (achievement.author) {
        if (isObjectId(achievement.author)) {
          // ✅ ObjectId — resolve from memberMap
          const member = memberMap[achievement.author.toString()];
          obj.attributes.author = {
            data: member
              ? {
                  id: member._id.toString(),
                  attributes: { name: member.name, email: member.email },
                }
              : null,
          };
        } else {
          // ✅ Plain string — return directly
          obj.attributes.author = { data: null, name: achievement.author };
        }
      }

      return obj;
    });

    return Response.json(
      {
        data,
        meta: {
          pagination: {
            start: 0,
            limit: data.length,
            total: data.length,
          },
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching achievements:", error);
    return Response.json(
      { error: "Failed to fetch achievements", details: error.message },
      { status: 500 },
    );
  }
}
