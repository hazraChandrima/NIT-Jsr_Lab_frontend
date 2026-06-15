import { connectDB } from "@/lib/db";
import { ResearchSection } from "@/models/research-section";

export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return Response.json(
        { error: "Research section ID is required" },
        { status: 400 }
      );
    }

    await connectDB();

    const item = await ResearchSection.findById(id).lean();

    if (!item) {
      return Response.json(
        { error: "Research section not found" },
        { status: 404 }
      );
    }

    // Format response to match Strapi-like structure expected by frontend
    const data = {
      id: item._id.toString(),
      attributes: {
        ResearchTitle: item.ResearchTitle || "",
        ResearchSubTitle: item.ResearchSubTitle || "",
        Description: item.Description || "",
        Thumbnail: item.Thumbnail || "",
        Themes: item.Themes || [],
        Members: item.Members || [],
        PapersPublished: item.PapersPublished || [],
        AimAndSummary: item.AimAndSummary || [],
        ReasearchContent: (item.ReasearchContent || []).map(c => ({
          ...c,
          media: c.media || "",
        })),
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        publishedAt: item.publishedAt,
      }
    };

    return Response.json({ data });
  } catch (error) {
    console.error("Error fetching research section:", error);
    // If the ID is an invalid MongoDB ObjectId, it throws a CastError
    if (error.name === 'CastError') {
      return Response.json(
        { error: "Invalid research section ID format" },
        { status: 400 }
      );
    }
    return Response.json(
      { error: "Failed to fetch research section", details: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return Response.json(
        { error: "Research section ID is required" },
        { status: 400 }
      );
    }

    await connectDB();

    const body = await request.json();

    const updateData = {};
    if (body.ResearchTitle !== undefined) updateData.ResearchTitle = body.ResearchTitle;
    if (body.ResearchSubTitle !== undefined) updateData.ResearchSubTitle = body.ResearchSubTitle;
    if (body.Description !== undefined) updateData.Description = body.Description;
    if (body.Thumbnail !== undefined) updateData.Thumbnail = body.Thumbnail;
    if (body.Themes !== undefined) updateData.Themes = body.Themes;
    if (body.Members !== undefined) updateData.Members = body.Members;
    if (body.PapersPublished !== undefined) updateData.PapersPublished = body.PapersPublished;
    if (body.AimAndSummary !== undefined) updateData.AimAndSummary = body.AimAndSummary;
    if (body.ReasearchContent !== undefined) updateData.ReasearchContent = body.ReasearchContent;
    if (body.publishedAt !== undefined) updateData.publishedAt = body.publishedAt;

    const item = await ResearchSection.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!item) {
      return Response.json(
        { error: "Research section not found" },
        { status: 404 }
      );
    }

    return Response.json({
      data: {
        id: item._id.toString(),
        attributes: {
          ResearchTitle: item.ResearchTitle,
          ResearchSubTitle: item.ResearchSubTitle,
          Description: item.Description,
          Thumbnail: item.Thumbnail,
          Themes: item.Themes,
          Members: item.Members,
          PapersPublished: item.PapersPublished,
          AimAndSummary: item.AimAndSummary,
          ReasearchContent: item.ReasearchContent,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
          publishedAt: item.publishedAt,
        },
      },
    }, { status: 200 });
  } catch (error) {
    console.error("Error updating research section:", error);
    return Response.json(
      { error: "Failed to update research section", details: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return Response.json(
        { error: "Research section ID is required" },
        { status: 400 }
      );
    }

    await connectDB();

    const item = await ResearchSection.findByIdAndDelete(id);

    if (!item) {
      return Response.json(
        { error: "Research section not found" },
        { status: 404 }
      );
    }

    return Response.json({ message: "Research section deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting research section:", error);
    return Response.json(
      { error: "Failed to delete research section", details: error.message },
      { status: 500 }
    );
  }
}
