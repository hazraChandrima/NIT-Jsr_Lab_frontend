import { connectDB } from "@/lib/db";
import { Funding } from "@/models/funding";

export async function GET(request, { params }) {
  try {
    await connectDB();

    const { id } = params;

    if (!id || id.length !== 24) {
      return Response.json(
        { error: "Invalid funding ID" },
        { status: 400 }
      );
    }

    const funding = await Funding.findById(id).lean();

    if (!funding) {
      return Response.json(
        { error: "Funding not found" },
        { status: 404 }
      );
    }

    return Response.json(
      {
        data: {
          id: funding._id.toString(),
          attributes: {
            title: funding.title,
            amount: funding.amount,
            description: funding.description,
            agency: funding.agency,
            date_of_funding: funding.date_of_funding,
            media: funding.media || [],
            createdAt: funding.createdAt,
            updatedAt: funding.updatedAt,
            publishedAt: funding.publishedAt,
          },
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching funding:", error);
    return Response.json(
      { error: "Failed to fetch funding", details: error.message },
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
        { error: "Invalid funding ID" },
        { status: 400 }
      );
    }

    const body = await request.json();

    const updateData = {};
    if (body.title !== undefined) updateData.title = body.title;
    if (body.amount !== undefined) updateData.amount = body.amount;
    if (body.description !== undefined) updateData.description = body.description;
    if (body.agency !== undefined) updateData.agency = body.agency;
    if (body.date_of_funding !== undefined) updateData.date_of_funding = body.date_of_funding;
    if (body.media !== undefined) updateData.media = body.media;
    if (body.publishedAt !== undefined) updateData.publishedAt = body.publishedAt;

    const funding = await Funding.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!funding) {
      return Response.json(
        { error: "Funding not found" },
        { status: 404 }
      );
    }

    return Response.json(
      {
        data: {
          id: funding._id.toString(),
          attributes: {
            title: funding.title,
            amount: funding.amount,
            description: funding.description,
            agency: funding.agency,
            date_of_funding: funding.date_of_funding,
            media: funding.media || [],
            createdAt: funding.createdAt,
            updatedAt: funding.updatedAt,
            publishedAt: funding.publishedAt,
          },
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating funding:", error);
    return Response.json(
      { error: "Failed to update funding", details: error.message },
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
        { error: "Invalid funding ID" },
        { status: 400 }
      );
    }

    const funding = await Funding.findByIdAndDelete(id);

    if (!funding) {
      return Response.json(
        { error: "Funding not found" },
        { status: 404 }
      );
    }

    return Response.json(
      { message: "Funding deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting funding:", error);
    return Response.json(
      { error: "Failed to delete funding", details: error.message },
      { status: 500 }
    );
  }
}
