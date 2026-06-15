import { connectDB } from "@/lib/db";
import { Member } from "@/models/member";

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = params;

    const member = await Member.findById(id).lean();

    if (!member) {
      return Response.json({ error: "Member not found" }, { status: 404 });
    }

    const data = {
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
                attributes: { url: member.profilePhoto },
              }
            : null,
        },
        resume: member.resume
          ? {
              data: {
                attributes: { url: member.resume.replace('/image/upload/', '/raw/upload/') },
              },
            }
          : null,
        createdAt: member.createdAt,
        updatedAt: member.updatedAt,
        publishedAt: member.publishedAt,
      },
    };

    return Response.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Error fetching member by id:", error);
    return Response.json(
      { error: "Failed to fetch member", details: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = params;

    if (!id) {
      return Response.json({ error: "Member ID is required" }, { status: 400 });
    }

    const body = await request.json();

    const updateData = {};
    if (body.name !== undefined) updateData.name = body.name;
    if (body.email !== undefined) updateData.email = body.email;
    if (body.phone !== undefined) updateData.phone = body.phone;
    if (body.position !== undefined) updateData.position = body.position;
    if (body.department !== undefined) updateData.department = body.department;
    if (body.role !== undefined) updateData.role = body.role;
    if (body.about !== undefined) updateData.about = body.about;
    if (body.bio !== undefined) updateData.bio = body.bio;
    if (body.qualifications !== undefined) updateData.qualifications = body.qualifications;
    if (body.specialization !== undefined) updateData.specialization = body.specialization;
    if (body.profilePhoto !== undefined) updateData.profilePhoto = body.profilePhoto;
    if (body.resume !== undefined) {
      updateData.resume = (body.resume && typeof body.resume === 'string')
        ? body.resume.replace('/image/upload/', '/raw/upload/')
        : (body.resume || "");
    }
    if (body.researchList !== undefined) updateData.researchList = body.researchList;
    if (body.projectList !== undefined) updateData.projectList = body.projectList;
    if (body.publishedAt !== undefined) updateData.publishedAt = body.publishedAt;

    const member = await Member.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!member) {
      return Response.json({ error: "Member not found" }, { status: 404 });
    }

    return Response.json({
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
          researchList: member.researchList || [],
          projectList: member.projectList || [],
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
    }, { status: 200 });
  } catch (error) {
    console.error("Error updating member:", error);
    return Response.json(
      { error: "Failed to update member", details: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = params;

    if (!id) {
      return Response.json({ error: "Member ID is required" }, { status: 400 });
    }

    const member = await Member.findByIdAndDelete(id);

    if (!member) {
      return Response.json({ error: "Member not found" }, { status: 404 });
    }

    return Response.json({ message: "Member deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting member:", error);
    return Response.json(
      { error: "Failed to delete member", details: error.message },
      { status: 500 }
    );
  }
}
