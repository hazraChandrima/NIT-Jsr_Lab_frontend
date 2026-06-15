import { connectDB } from "@/lib/db";
import { Patent } from "@/models/patent";
import { Member } from "@/models/member";
import { Student } from "@/models/student";

export async function GET(request, { params }) {
  try {
    await connectDB();

    const { id } = params;

    // Validate MongoDB ObjectId format
    if (!id || id.length !== 24) {
      return Response.json(
        { error: "Invalid patent ID" },
        { status: 400 }
      );
    }

    // Get single patent and populate relations
    const patent = await Patent.findById(id)
      .populate("head", "name email")
      .populate("collaborators", "name email")
      .lean();

    if (!patent) {
      return Response.json(
        { error: "Patent not found" },
        { status: 404 }
      );
    }

    // Transform to Strapi-like response format
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
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching patent:", error);
    return Response.json(
      { error: "Failed to fetch patent", details: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();

    const { id } = params;

    if (!id || id.length !== 24) {
      return Response.json(
        { error: "Invalid patent ID" },
        { status: 400 }
      );
    }

    const body = await request.json();

    const updateData = {};
    if (body.title !== undefined) updateData.title = body.title;
    if (body.description !== undefined) updateData.description = body.description;
    if (body.docs !== undefined) {
      updateData.docs = (body.docs || []).map(url =>
        url ? url.replace('/image/upload/', '/raw/upload/') : url
      );
    }
    if (body.head !== undefined) updateData.head = body.head || null;
    if (body.collaborators !== undefined) updateData.collaborators = body.collaborators || [];
    if (body.cover_image !== undefined) updateData.cover_image = body.cover_image;
    if (body.date_of_publication !== undefined) updateData.date_of_publication = body.date_of_publication;
    if (body.department !== undefined) updateData.department = body.department || null;
    if (body.publishedAt !== undefined) updateData.publishedAt = body.publishedAt;

    const patent = await Patent.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    )
      .populate("head", "name email")
      .populate("collaborators", "name email");

    if (!patent) {
      return Response.json(
        { error: "Patent not found" },
        { status: 404 }
      );
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
      { data: response },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating patent:", error);
    return Response.json(
      { error: "Failed to update patent", details: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();

    const { id } = params;

    if (!id || id.length !== 24) {
      return Response.json(
        { error: "Invalid patent ID" },
        { status: 400 }
      );
    }

    const patent = await Patent.findByIdAndDelete(id);

    if (!patent) {
      return Response.json(
        { error: "Patent not found" },
        { status: 404 }
      );
    }

    return Response.json(
      { message: "Patent deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting patent:", error);
    return Response.json(
      { error: "Failed to delete patent", details: error.message },
      { status: 500 }
    );
  }
}

// Helper function to transform docs array to Strapi-like format
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
