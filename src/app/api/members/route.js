import { connectDB } from "@/lib/db";
import { Member } from "@/models/member";

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    await connectDB();
    const url = new URL(request.url);
    const role = url.searchParams.get("filters[role][$eq]");

    const query = {
      publishedAt: { $exists: true, $ne: null },
    };

    if (role) {
      query.role = role;
    }

    const members = await Member.find(query).lean();

    const data = members.map((member) => ({
      id: member._id.toString(),
      attributes: {
        name: member.name,
        email: member.email,
        phone: member.phone,
        position: member.position,
        department: member.department,
        role: member.role,
        about: member.about,
        bio: member.bio,
        qualifications: member.qualifications,
        specialization: member.specialization,
        researchList: member.researchList || [],
        projectList: member.projectList || [],
        profilePhoto: {
          data: member.profilePhoto
            ? {
                attributes: {
                  url: member.profilePhoto,
                },
              }
            : null,
        },
        resume: member.resume
          ? {
              data: {
                attributes: {
                  url: member.resume.replace('/image/upload/', '/raw/upload/'),
                },
              }
            }
          : null,
        createdAt: member.createdAt,
        updatedAt: member.updatedAt,
        publishedAt: member.publishedAt,
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
    console.error("Error fetching members:", error);
    return Response.json(
      { error: "Failed to fetch members", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    if (!body.name || !body.role) {
      return Response.json(
        { error: "Missing required fields: name, role" },
        { status: 400 }
      );
    }

    const member = await Member.create({
      name: body.name,
      email: body.email || "",
      phone: body.phone || "",
      position: body.position || "",
      department: body.department || "",
      role: body.role,
      about: body.about || "",
      bio: body.bio || "",
      qualifications: body.qualifications || "",
      specialization: body.specialization || "",
      profilePhoto: body.profilePhoto || "",
      resume: (body.resume && typeof body.resume === 'string') ? body.resume.replace('/image/upload/', '/raw/upload/') : (body.resume || ""),
      researchList: body.researchList || [],
      projectList: body.projectList || [],
      publishedAt: body.publishedAt || new Date(),
    });

    return Response.json(
      {
        data: {
          id: member._id.toString(),
          attributes: {
            name: member.name,
            email: member.email,
            phone: member.phone,
            position: member.position,
            department: member.department,
            role: member.role,
            about: member.about,
            bio: member.bio,
            qualifications: member.qualifications,
            specialization: member.specialization,
            researchList: member.researchList,
            projectList: member.projectList,
            profilePhoto: {
              data: member.profilePhoto
                ? { attributes: { url: member.profilePhoto } }
                : null,
            },
            resume: member.resume
              ? { data: { attributes: { url: member.resume.replace('/image/upload/', '/raw/upload/') } } }
              : null,
            createdAt: member.createdAt,
            updatedAt: member.updatedAt,
            publishedAt: member.publishedAt,
          },
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating member:", error);
    return Response.json(
      { error: "Failed to create member", details: error.message },
      { status: 500 }
    );
  }
}
