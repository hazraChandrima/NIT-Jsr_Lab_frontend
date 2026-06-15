import { connectDB } from "@/lib/db";
import { Student } from "@/models/student";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = params;

    if (!id) {
      return Response.json({ error: "Student ID is required" }, { status: 400 });
    }

    const student = await Student.findById(id).lean();

    if (!student) {
      return Response.json({ error: "Student not found" }, { status: 404 });
    }

    return Response.json({
      data: {
        id: student._id.toString(),
        attributes: {
          name: student.name,
          roll: student.roll,
          degree: student.degree,
          about: student.about,
          researchList: student.researchList || [],
          projectList: student.projectList || [],
          profilePhoto: {
            data: student.profilePhoto
              ? { attributes: { url: student.profilePhoto } }
              : null,
          },
          resume: student.resume
            ? { data: { attributes: { url: student.resume.replace('/image/upload/', '/raw/upload/') } } }
            : null,
          createdAt: student.createdAt,
          updatedAt: student.updatedAt,
          publishedAt: student.publishedAt,
        },
      },
    }, { status: 200 });
  } catch (error) {
    console.error("Error fetching student:", error);
    return Response.json(
      { error: "Failed to fetch student", details: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = params;

    if (!id) {
      return Response.json({ error: "Student ID is required" }, { status: 400 });
    }

    const body = await request.json();

    const updateData = {};
    if (body.name !== undefined) updateData.name = body.name;
    if (body.roll !== undefined) updateData.roll = body.roll;
    if (body.degree !== undefined) updateData.degree = body.degree;
    if (body.about !== undefined) updateData.about = body.about;
    if (body.profilePhoto !== undefined) updateData.profilePhoto = body.profilePhoto;
    if (body.resume !== undefined) {
      updateData.resume = (body.resume && typeof body.resume === 'string')
        ? body.resume.replace('/image/upload/', '/raw/upload/')
        : (body.resume || "");
    }
    if (body.researchList !== undefined) updateData.researchList = body.researchList;
    if (body.projectList !== undefined) updateData.projectList = body.projectList;
    if (body.publishedAt !== undefined) updateData.publishedAt = body.publishedAt;

    const student = await Student.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!student) {
      return Response.json({ error: "Student not found" }, { status: 404 });
    }

    return Response.json({
      data: {
        id: student._id.toString(),
        attributes: {
          name: student.name,
          roll: student.roll,
          degree: student.degree,
          about: student.about,
          researchList: student.researchList || [],
          projectList: student.projectList || [],
          profilePhoto: {
            data: student.profilePhoto
              ? { attributes: { url: student.profilePhoto } }
              : null,
          },
          resume: student.resume
            ? { data: { attributes: { url: student.resume.replace('/image/upload/', '/raw/upload/') } } }
            : null,
          createdAt: student.createdAt,
          updatedAt: student.updatedAt,
          publishedAt: student.publishedAt,
        },
      },
    }, { status: 200 });
  } catch (error) {
    console.error("Error updating student:", error);
    return Response.json(
      { error: "Failed to update student", details: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = params;

    if (!id) {
      return Response.json({ error: "Student ID is required" }, { status: 400 });
    }

    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      return Response.json({ error: "Student not found" }, { status: 404 });
    }

    return Response.json({ message: "Student deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting student:", error);
    return Response.json(
      { error: "Failed to delete student", details: error.message },
      { status: 500 }
    );
  }
}
