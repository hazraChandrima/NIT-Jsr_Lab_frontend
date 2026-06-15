import mongoose, { Schema, models, model } from "mongoose";

const MemberSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
    },

    phone: {
      type: String,
    },

    position: {
      type: String, // e.g., Professor, Associate Professor, etc.
    },

    department: {
      type: String,
    },

    profilePhoto: {
      type: String, // image URL/path
    },

    role: {
      type: String,
      enum: ["Pass-Out Student","Collaborative Researchers"],
    },

    about: {
      type: String,
    },

    bio: {
      type: String,
    },

    qualifications: {
      type: String,
    },

    researchList: [
      {
        research: String,
      },
    ],

    projectList: [
      {
        project: String,
      },
    ],

    resume: {
      type: String, // file URL/path
    },

    // Relations
    achievements: [
      {
        type: Schema.Types.ObjectId,
        ref: "Achievement",
      },
    ],

    patents: [
      {
        type: Schema.Types.ObjectId,
        ref: "Patent",
      },
    ],

    // i18n support
    locale: {
      type: String,
    },
    localizations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Member",
      },
    ],

    // draft & publish
    publishedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export const Member = models.Member || model("Member", MemberSchema);
