import mongoose, { Schema, models, model } from "mongoose"



// Generic small paragraph schema 
const SmallParagraphSchema = new Schema(
  {
    title: String,
    description: String
  },
  { _id: false }
)

// Research summary schema
const ResearchSummarySchema = new Schema(
  {
    title: String,
    content: String
  },
  { _id: false }
)

// Research content schema
const ResearchContentSchema = new Schema(
  {
    heading: String,
    body: String,
    media: String // optional image/file
  },
  { _id: false }
)

const ResearchSectionSchema = new Schema(
  {
    Description: {
      type: String,
      required: true
    },

    Thumbnail: {
      type: String, // image URL/path
      required: true
    },

    ResearchTitle: {
      type: String,
      required: true
    },

    ResearchSubTitle: {
      type: String
    },

    // Components → arrays of subdocuments
    Themes: [SmallParagraphSchema],

    Members: [SmallParagraphSchema],

    PapersPublished: [SmallParagraphSchema],

    AimAndSummary: [ResearchSummarySchema],

    ReasearchContent: [ResearchContentSchema],

    // i18n support
    locale: {
      type: String
    },
    localizations: [
      {
        type: Schema.Types.ObjectId,
        ref: "ResearchSection"
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

export const ResearchSection =
  models.ResearchSection ||
  model("ResearchSection", ResearchSectionSchema)