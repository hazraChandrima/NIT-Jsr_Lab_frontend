import { connectDB } from "@/lib/db";
import { Patent } from "@/models/patent";
import { Member } from "@/models/member";
import { Student } from "@/models/student";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.date_of_publication) {
      return Response.json(
        {
          error: "Missing required fields: title, date_of_publication",
        },
        { status: 400 }
      );
    }

    // Create new patent
    const patent = await Patent.create({
      title: body.title,
      description: body.description || "",
      docs: (body.docs || []).map(url => url ? url.replace('/image/upload/', '/raw/upload/') : url),
      head: body.head || null,
      collaborators: body.collaborators || [],
      cover_image: body.cover_image || "",
      date_of_publication: body.date_of_publication,
      department: body.department || null,
      publishedAt: body.publishedAt || new Date(),
    });

    // Populate relations if they exist
    if (body.head) {
      await patent.populate("head", "name email");
    }
    if (body.collaborators && body.collaborators.length > 0) {
      await patent.populate("collaborators", "name email");
    }

    const response = {
      id: patent._id.toString(),
      attributes: {
        title: patent.title,
        description: patent.description,
        docs: transformDocs(patent.docs),
        cover_image: patent.cover_image,
        date_of_publication: patent.date_of_publication,
        createdAt: patent.createdAt,
        updatedAt: patent.updatedAt,
        publishedAt: patent.publishedAt,
        head: {
          data: patent.head
            ? {
                id: patent.head._id?.toString() || patent.head,
                attributes: {
                  name: patent.head.name || "",
                  email: patent.head.email || "",
                },
              }
            : null,
        },
        collaborators: {
          data: (patent.collaborators || []).map((collab) => ({
            id: collab._id?.toString() || collab,
            attributes: {
              name: collab.name || "",
              email: collab.email || "",
            },
          })),
        },
      },
    };

    return Response.json(
      {
        data: response,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating patent:", error);
    return Response.json(
      { error: "Failed to create patent", details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connectDB();

    // Get all published patents, sorted by date descending
    const patents = await Patent.find({
      publishedAt: { $exists: true, $ne: null },
    })
      .populate("head", "name email")
      .populate("collaborators", "name email")
      .sort({ date_of_publication: -1 })
      .lean();

    // Transform to Strapi-like response format
    const data = patents.map((patent) => ({
      id: patent._id.toString(),
      attributes: {
        title: patent.title,
        description: patent.description,
        docs: transformDocs(patent.docs),
        cover_image: patent.cover_image,
        date_of_publication: patent.date_of_publication,
        createdAt: patent.createdAt,
        updatedAt: patent.updatedAt,
        publishedAt: patent.publishedAt,
        head: {
          data: patent.head
            ? {
                id: patent.head._id?.toString() || patent.head,
                attributes: {
                  name: patent.head.name || "",
                  email: patent.head.email || "",
                },
              }
            : null,
        },
        collaborators: {
          data: (patent.collaborators || []).map((collab) => ({
            id: collab._id?.toString() || collab,
            attributes: {
              name: collab.name || "",
              email: collab.email || "",
            },
          })),
        },
      },
    }));

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
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching patents:", error);
    return Response.json(
      { error: "Failed to fetch patents", details: error.message },
      { status: 500 }
    );
  }
}


function transformDocs(docs) {
  if (!docs || !Array.isArray(docs)) return { data: [] };

  return {
    data: docs.map((doc, index) => ({
      id: index + 1,
      attributes: {
        name: typeof doc === "string" ? doc.split("/").pop() : doc.name || "",
        url: typeof doc === "string" ? doc.replace('/image/upload/', '/raw/upload/') : (doc.url ? doc.url.replace('/image/upload/', '/raw/upload/') : ""),
      },
    })),
  };
}

