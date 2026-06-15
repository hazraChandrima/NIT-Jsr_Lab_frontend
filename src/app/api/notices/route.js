import { connectDB } from "@/lib/db";
import { Notice } from "@/models/notice";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();

    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("pagination[page]")) || 1;
    const pageSize = parseInt(url.searchParams.get("pagination[pageSize]")) || 10;
    const populate = url.searchParams.get("populate");

    const skip = (page - 1) * pageSize;

    const totalNotices = await Notice.countDocuments();
    const totalPages = Math.ceil(totalNotices / pageSize);

    const notices = await Notice.find()
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(pageSize)
      .lean();

    const data = notices.map((notice) => ({
      id: notice._id.toString(),
      attributes: {
        Title: notice.Title,
        Description: notice.Description,
        Pdf: populate === "Pdf" ? {
          data: {
            attributes: {
              url: notice.Pdf ? notice.Pdf.replace('/image/upload/', '/raw/upload/') : notice.Pdf
            }
          }
        } : (notice.Pdf ? notice.Pdf.replace('/image/upload/', '/raw/upload/') : notice.Pdf),
        createdAt: notice.createdAt,
        updatedAt: notice.updatedAt,
        publishedAt: notice.publishedAt,
      },
    }));

    return NextResponse.json({
      data,
      meta: {
        pagination: {
          page,
          pageSize,
          pageCount: totalPages,
          total: totalNotices,
        },
      },
    });
  } catch (error) {
    console.error("Error fetching notices:", error);
    return NextResponse.json(
      { error: "Failed to fetch notices", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    let { Title, Description, Pdf, publishedAt } = body;

    if (!Title || !Description || !Pdf) {
      return NextResponse.json(
        { error: "Missing required fields: Title, Description, Pdf" },
        { status: 400 }
      );
    }

    if (Pdf && typeof Pdf === 'string') {
      Pdf = Pdf.replace('/image/upload/', '/raw/upload/');
    }

    const notice = new Notice({
      Title,
      Description,
      Pdf,
      publishedAt: publishedAt || new Date()
    });

    await notice.save();

    return NextResponse.json(
      {
        data: {
          id: notice._id.toString(),
          attributes: {
            Title: notice.Title,
            Description: notice.Description,
            Pdf: {
              data: {
                attributes: {
                  url: notice.Pdf
                }
              }
            },
            createdAt: notice.createdAt,
            updatedAt: notice.updatedAt,
            publishedAt: notice.publishedAt,
          },
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating notice:", error);
    return NextResponse.json(
      { error: "Failed to create notice", details: error.message },
      { status: 500 }
    );
  }
}
