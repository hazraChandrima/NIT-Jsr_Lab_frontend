import { connectDB } from "@/lib/db";
import { Achievement } from "@/models/journal";

//  Removed unused Member import

//  Reusable helper for author mapping
const mapAuthor = (author) => {
  if (!author) return null;
  const isPopulated = typeof author === "object";
  return isPopulated
    ? {
        data: {
          id: author._id?.toString(),
          attributes: {
            name: author.name || "",
            email: author.email || "",
          },
        },
      }
    : { data: null, name: author }; // plain string
};

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = params;

    if (!id || id.length !== 24) {
      return Response.json({ error: "Invalid journal ID" }, { status: 400 });
    }

    const achievement = await Achievement.findById(id)
      .populate("author", "name email")
      .lean();

    if (!achievement) {
      return Response.json({ error: "Journal not found" }, { status: 404 });
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
        author: mapAuthor(achievement.author), //  handles both types
      },
    };

    return Response.json({ data: response }, { status: 200 });
  } catch (error) {
    console.error("Error fetching journal:", error);
    return Response.json(
      { error: "Failed to fetch journal", details: error.message },
      { status: 500 },
    );
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = params;

    if (!id || id.length !== 24) {
      return Response.json({ error: "Invalid journal ID" }, { status: 400 });
    }

    const body = await request.json();

    const updateData = {};
    if (body.Title !== undefined) updateData.Title = body.Title;
    if (body.Description !== undefined)
      updateData.Description = body.Description;
    if (body.AchivmentParagraph !== undefined)
      updateData.AchivmentParagraph = body.AchivmentParagraph;
    if (body.Thumbnail !== undefined) updateData.Thumbnail = body.Thumbnail;
    if (body.Link !== undefined) updateData.Link = body.Link;
    if (body.Date !== undefined) updateData.Date = body.Date;
    if (body.Pdf !== undefined) {
      updateData.Pdf =
        typeof body.Pdf === "string"
          ? body.Pdf.replace("/image/upload/", "/raw/upload/")
          : body.Pdf;
    }
    if (body.author !== undefined) updateData.author = body.author || null;
    if (body.publishedAt !== undefined)
      updateData.publishedAt = body.publishedAt;

    // ✅ Only populate if author is a valid ObjectId
    const isObjectId =
      updateData.author && /^[a-f\d]{24}$/i.test(updateData.author);

    const achievement = await Achievement.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true },
    ).populate(isObjectId ? "author" : ""); // conditional populate

    if (!achievement) {
      return Response.json({ error: "Journal not found" }, { status: 404 });
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
        author: mapAuthor(achievement.author), //  handles both types
      },
    };

    return Response.json({ data: response }, { status: 200 });
  } catch (error) {
    console.error("Error updating journal:", error);
    return Response.json(
      { error: "Failed to update journal", details: error.message },
      { status: 500 },
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = params;

    if (!id || id.length !== 24) {
      return Response.json({ error: "Invalid journal ID" }, { status: 400 });
    }

    const achievement = await Achievement.findByIdAndDelete(id);

    if (!achievement) {
      return Response.json({ error: "Journal not found" }, { status: 404 });
    }

    return Response.json(
      { message: "Journal deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting journal:", error);
    return Response.json(
      { error: "Failed to delete journal", details: error.message },
      { status: 500 },
    );
  }
}
