import { connectDB } from "@/lib/db";
import { ResearchSection } from "@/models/research-section";

export async function GET(request) {
  try {
    await connectDB();

    // Handle populate query parameter for thumbnail
    const url = new URL(request.url);
    const populate = url.searchParams.get("populate");

    const researchSections = await ResearchSection.find()
      .sort({ createdAt: -1 })
      .lean();

    // Format response to matchstructure expected by frontend
    const data = researchSections.map((item) => ({
      id: item._id.toString(),
      attributes: {
        ResearchTitle: item.ResearchTitle || "",
        ResearchSubTitle: item.ResearchSubTitle || "",
        Description: item.Description || "",
        Thumbnail: item.Thumbnail ? {
          data: {
            attributes: {
              url: item.Thumbnail
            }
          }
        } : null,
        Themes: item.Themes || [],
        Members: item.Members || [],
        PapersPublished: item.PapersPublished || [],
        AimAndSummary: item.AimAndSummary || [],
        ReasearchContent: item.ReasearchContent || [],
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        publishedAt: item.publishedAt,
      }
    }));

    return Response.json({
      data,
      meta: {
        pagination: {
          start: 0,
          limit: data.length,
          total: data.length,
        },
      },
    });
  } catch (error) {
    console.error("Error fetching research sections:", error);
    return Response.json(
      { error: "Failed to fetch research sections", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    if (!body.ResearchTitle || !body.Description || !body.Thumbnail) {
      return Response.json(
        { error: "Missing required fields: ResearchTitle, Description, Thumbnail" },
        { status: 400 }
      );
    }

    const researchSection = await ResearchSection.create({
      ResearchTitle: body.ResearchTitle,
      ResearchSubTitle: body.ResearchSubTitle || "",
      Description: body.Description,
      Thumbnail: body.Thumbnail,
      Themes: body.Themes || [],
      Members: body.Members || [],
      PapersPublished: body.PapersPublished || [],
      AimAndSummary: body.AimAndSummary || [],
      ReasearchContent: body.ReasearchContent || [],
      publishedAt: body.publishedAt || new Date(),
    });

    return Response.json(
      {
        data: {
          id: researchSection._id.toString(),
          attributes: {
            ResearchTitle: researchSection.ResearchTitle,
            ResearchSubTitle: researchSection.ResearchSubTitle,
            Description: researchSection.Description,
            Thumbnail: {
              data: {
                attributes: {
                  url: researchSection.Thumbnail
                }
              }
            },
            Themes: researchSection.Themes,
            Members: researchSection.Members,
            PapersPublished: researchSection.PapersPublished,
            AimAndSummary: researchSection.AimAndSummary,
            ReasearchContent: researchSection.ReasearchContent,
            createdAt: researchSection.createdAt,
            updatedAt: researchSection.updatedAt,
            publishedAt: researchSection.publishedAt,
          },
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating research section:", error);
    return Response.json(
      { error: "Failed to create research section", details: error.message },
      { status: 500 }
    );
  }
}


