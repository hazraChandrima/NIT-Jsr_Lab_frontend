import mongoose, { Schema, models, model } from "mongoose";

const AchievementSchema = new Schema(
  {
    Title: {
      type: String,
      required:true,
    },

    Description: {
      type: String,
      required: true,
    },

    // Dynamic Zone → usually stored as an array of objects
    AchivmentParagraph: [
      {
        type: Schema.Types.Mixed, // flexible structure
        required: true,
      },
    ],

    Thumbnail: {
      type: String, // store URL or file path
    },

    Link: {
      type: String,
    },

    Date: {
      type: Date,
    },

    Pdf: {
      type: String, // store file URL/path
    },

    author: {
      type: Schema.Types.Mixed,
      ref: "Member",
      default:null, // corresponds to api::member.member
    },

    // Optional: for i18n support 
    locale: {
      type: String,
    },
    localizations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Achievement",
      },
    ],

    // Draft & Publish support
    publishedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

export const Achievement =
  models.Achievement || model("Achievement", AchievementSchema);
