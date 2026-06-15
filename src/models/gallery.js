import mongoose, { Schema, models, model } from "mongoose"

// Optional: define structured component instead of Mixed
const GalleryImageSchema = new Schema(
  {
    url: String,       // image URL
    caption: String,   // optional
    alt: String        // optional
  },
  { _id: false }
)

const GallerySchema = new Schema(
  {
    // repeatable component → array
    images: {
      type: [GalleryImageSchema],
      required: true
    },

    name: {
      type: String
    },

    description: {
      type: String
    },

    cover_image: {
      type: String // image URL or file path
    },

    year: {
      type: Number,
      min: 1960,
      max: 2030
    },

    // i18n support
    locale: {
      type: String
    },
    localizations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Gallery"
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

export const Gallery =
  models.Gallery || model("Gallery", GallerySchema)