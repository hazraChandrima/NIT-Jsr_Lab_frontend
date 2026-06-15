import mongoose, { Schema, models, model } from "mongoose"

const NoticeSchema = new Schema(
  {
    Title: {
      type: String,
      required: true
    },

    Description: {
      type: String,
      required: true
    },

    Pdf: {
      type: String, // file URL or path
      required: true
    },

    // i18n support
    locale: {
      type: String
    },
    localizations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Notice"
      }
    ],

    // draft & publish
    publishedAt: {
      type: Date
    }
  },
  {
    timestamps: true
  }
)

export const Notice =
  models.Notice || model("Notice", NoticeSchema)