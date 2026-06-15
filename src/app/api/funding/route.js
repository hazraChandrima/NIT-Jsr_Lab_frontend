import { connectDB } from "@/lib/db";
import { Funding } from "@/models/funding";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.amount || !body.date_of_funding) {
      return Response.json(
        {
          error: "Missing required fields: title, amount, date_of_funding",
        },
        { status: 400 }
      );
    }

    // Create new funding
    const funding = await Funding.create({
      title: body.title,
      amount: body.amount,
      description: body.description || "",
      agency: body.agency || "",
      date_of_funding: body.date_of_funding,
      media: body.media || [],
      publishedAt: body.publishedAt || new Date(),
    });

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
            media: funding.media,
            createdAt: funding.createdAt,
            updatedAt: funding.updatedAt,
            publishedAt: funding.publishedAt,
          },
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating funding:", error);
    return Response.json(
      { error: "Failed to create funding", details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connectDB();

    // Get all published fundings, sorted by date descending
    const fundings = await Funding.find({
      publishedAt: { $exists: true, $ne: null },
    })
      .sort({ date_of_funding: -1 })
      .lean();

    
    const data = fundings.map((funding, index) => ({
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
    console.error("Error fetching fundings:", error);
    return Response.json(
      { error: "Failed to fetch fundings", details: error.message },
      { status: 500 }
    );
  }
}
