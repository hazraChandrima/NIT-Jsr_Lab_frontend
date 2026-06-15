import { connectDB } from "@/lib/db";
import { Gallery } from "@/models/gallery";

export async function GET(request) {
  try {
    await connectDB();

    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page")) || 1;
    const pageSize = parseInt(url.searchParams.get("pageSize")) || 12;
    const skip = (page - 1) * pageSize;

    const galleries = await Gallery.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(pageSize)
      .lean();

    const total = await Gallery.countDocuments();

   
    const data = galleries.map((item) => ({
      id: item._id.toString(),
      attributes: {
        name: item.name || "",
        description: item.description || "",
        cover_image: item.cover_image ? {
          data: {
            attributes: {
              url: item.cover_image
            }
          }
        } : null,
        year: item.year,
        images: item.images || [],
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        publishedAt: item.publishedAt,
      }
    }));

    return Response.json({
      data,
      meta: {
        pagination: {
          page,
          pageSize,
          total,
          pageCount: Math.ceil(total / pageSize),
        },
      },
    });
  } catch (error) {
    console.error("Error fetching galleries:", error);
    return Response.json(
      { error: "Failed to fetch galleries", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    if (!body.name || !body.description || !body.cover_image) {
      return Response.json(
        { error: "Missing required fields: name, description, cover_image" },
        { status: 400 }
      );
    }

    const gallery = await Gallery.create({
      name: body.name,
      description: body.description,
      cover_image: body.cover_image,
      year: body.year || new Date().getFullYear(),
      images: body.images || [],
      publishedAt: body.publishedAt || new Date(),
    });

    return Response.json(
      {
        data: {
          id: gallery._id.toString(),
          attributes: {
            name: gallery.name,
            description: gallery.description,
            cover_image: {
              data: {
                attributes: {
                  url: gallery.cover_image
                }
              }
            },
            year: gallery.year,
            images: gallery.images,
            createdAt: gallery.createdAt,
            updatedAt: gallery.updatedAt,
            publishedAt: gallery.publishedAt,
          },
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating gallery:", error);
    return Response.json(
      { error: "Failed to create gallery", details: error.message },
      { status: 500 }
    );
  }
}
