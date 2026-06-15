import { connectDB } from "@/lib/db";
import { Notice } from "@/models/notice";

export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return Response.json(
        { error: "Notice ID is required" },
        { status: 400 }
      );
    }

    await connectDB();

    const item = await Notice.findById(id).lean();

    if (!item) {
      return Response.json(
        { error: "Notice not found" },
        { status: 404 }
      );
    }

    const data = {
      id: item._id.toString(),
      attributes: {
        Title: item.Title || "",
        Description: item.Description || "",
        Pdf: item.Pdf ? item.Pdf.replace('/image/upload/', '/raw/upload/') : "",
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        publishedAt: item.publishedAt,
      }
    };

    return Response.json({ data });
  } catch (error) {
    console.error("Error fetching notice:", error);
    if (error.name === 'CastError') {
      return Response.json(
        { error: "Invalid notice ID format" },
        { status: 400 }
      );
    }
    return Response.json(
      { error: "Failed to fetch notice", details: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return Response.json(
        { error: "Notice ID is required" },
        { status: 400 }
      );
    }

    await connectDB();

    const body = await request.json();

    const updateData = {};
    if (body.Title !== undefined) updateData.Title = body.Title;
    if (body.Description !== undefined) updateData.Description = body.Description;
    if (body.Pdf !== undefined) {
      updateData.Pdf = (body.Pdf && typeof body.Pdf === 'string')
        ? body.Pdf.replace('/image/upload/', '/raw/upload/')
        : (body.Pdf || "");
    }
    if (body.publishedAt !== undefined) updateData.publishedAt = body.publishedAt;

    const notice = await Notice.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!notice) {
      return Response.json(
        { error: "Notice not found" },
        { status: 404 }
      );
    }

    return Response.json({
      data: {
        id: notice._id.toString(),
        attributes: {
          Title: notice.Title,
          Description: notice.Description,
          Pdf: notice.Pdf ? notice.Pdf.replace('/image/upload/', '/raw/upload/') : "",
          createdAt: notice.createdAt,
          updatedAt: notice.updatedAt,
          publishedAt: notice.publishedAt,
        },
      },
    }, { status: 200 });
  } catch (error) {
    console.error("Error updating notice:", error);
    return Response.json(
      { error: "Failed to update notice", details: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return Response.json(
        { error: "Notice ID is required" },
        { status: 400 }
      );
    }

    await connectDB();

    const notice = await Notice.findByIdAndDelete(id);

    if (!notice) {
      return Response.json(
        { error: "Notice not found" },
        { status: 404 }
      );
    }

    return Response.json({ message: "Notice deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting notice:", error);
    return Response.json(
      { error: "Failed to delete notice", details: error.message },
      { status: 500 }
    );
  }
}
