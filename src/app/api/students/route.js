import { connectDB } from "@/lib/db";
import { Student } from "@/models/student";

export async function GET(request) {
  try {
    await connectDB();
    const url = new URL(request.url);
    const roll = url.searchParams.get("filters[roll][$eq]");

    const query = {
      publishedAt: { $exists: true, $ne: null },
    };

    if (roll) {
      query.roll = roll;
    }

    const students = await Student.find(query).lean();

    const data = students.map((student) => ({
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
            ? {
                attributes: {
                  url: student.profilePhoto,
                },
              }
            : null,
        },
        resume: student.resume
          ? {
              data: {
                attributes: {
                  url: student.resume.replace('/image/upload/', '/raw/upload/'),
                },
              },
            }
          : null,
        createdAt: student.createdAt,
        updatedAt: student.updatedAt,
        publishedAt: student.publishedAt,
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
    console.error("Error fetching students:", error);
    return Response.json(
      { error: "Failed to fetch students", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    if (!body.name || !body.roll || !body.degree) {
      return Response.json(
        { error: "Missing required fields: name, roll, degree" },
        { status: 400 }
      );
    }

    const student = await Student.create({
      name: body.name,
      roll: body.roll,
      profilePhoto: body.profilePhoto || "",
      degree: body.degree,
      about: body.about || "",
      researchList: body.researchList || [],
      projectList: body.projectList || [],
      resume: (body.resume && typeof body.resume === 'string') ? body.resume.replace('/image/upload/', '/raw/upload/') : (body.resume || ""),
      publishedAt: body.publishedAt || new Date(),
    });

    return Response.json(
      {
        data: {
          id: student._id.toString(),
          attributes: {
            name: student.name,
            roll: student.roll,
            degree: student.degree,
            about: student.about,
            researchList: student.researchList,
            projectList: student.projectList,
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
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating student:", error);
    return Response.json(
      { error: "Failed to create student", details: error.message },
      { status: 500 }
    );
  }
}
