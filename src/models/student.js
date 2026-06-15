import mongoose, { Schema, models, model } from "mongoose"

// Optional reusable schemas (same as Member)
const ResearchItemSchema = new Schema(
  {
    research: String
  },
  { _id: false }
)

const ProjectItemSchema = new Schema(
  {
    project: String
  },
  { _id: false }
)

const StudentSchema = new Schema(
  {
    name: {
      type: String
    },

    roll: {
      type: String
    },

    profilePhoto: {
      type: String // image URL/path
    },

    degree: {
      type: String,
      enum: [
        "Ph. D",
        "Part Time Ph. D",
        "Masters Program",
        "Undergraduate Program"
      ]
    },

    about: {
      type: String
    },

    // repeatable components
    researchList: [ResearchItemSchema],

    projectList: [ProjectItemSchema],

    resume: {
      type: String // file URL/path
    },

    // manyToMany (mappedBy collaborators in Patent)
    patents: [
      {
        type: Schema.Types.ObjectId,
        ref: "Patent"
      }
    ],

    // i18n support
    locale: {
      type: String
    },
    localizations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student"
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

export const Student =
  models.Student || model("Student", StudentSchema)