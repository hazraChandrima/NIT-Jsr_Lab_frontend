import { connectDB } from "@/lib/db";
import { Gallery } from "@/models/gallery";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = params;

    const gallery = await Gallery.findById(id).lean();

    if (!gallery) {
      return Response.json(
        { error: "Gallery not found" },
        { status: 404 }
      );
    }

    // Format response with nested images structure for frontend
    const formattedImages = gallery.images.map((img) => ({
      title: img.title || "",
      description: img.description || "",
      media: {
        data: {
          attributes: {
            url: img.url
          }
        }
      }
    }));

    return Response.json({
      data: {
        id: gallery._id.toString(),
        attributes: {
          name: gallery.name || "",
          description: gallery.description || "",
          cover_image: gallery.cover_image ? {
            data: {
              attributes: {
                url: gallery.cover_image
              }
            }
          } : null,
          year: gallery.year,
          images: formattedImages,
          createdAt: gallery.createdAt,
          updatedAt: gallery.updatedAt,
          publishedAt: gallery.publishedAt,
        },
      },
    });
  } catch (error) {
    console.error("Error fetching gallery:", error);
    return Response.json(
      { error: "Failed to fetch gallery", details: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const body = await request.json();

    const gallery = await Gallery.findByIdAndUpdate(
      id,
      {
        name: body.name,
        description: body.description,
        cover_image: body.cover_image,
        year: body.year,
        images: body.images,
      },
      { new: true }
    ).lean();

    if (!gallery) {
      return Response.json(
        { error: "Gallery not found" },
        { status: 404 }
      );
    }

    return Response.json({
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
    });
  } catch (error) {
    console.error("Error updating gallery:", error);
    return Response.json(
      { error: "Failed to update gallery", details: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = params;

    const gallery = await Gallery.findByIdAndDelete(id);

    if (!gallery) {
      return Response.json(
        { error: "Gallery not found" },
        { status: 404 }
      );
    }

    return Response.json(
      { message: "Gallery deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting gallery:", error);
    return Response.json(
      { error: "Failed to delete gallery", details: error.message },
      { status: 500 }
    );
  }
}
