import mongoose, { Schema, models, model } from "mongoose"

const PatentSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String
    },

    // multiple media → array of URLs/paths
    docs: [
      {
        type: String
      }
    ],

    // oneToOne → ObjectId
    head: {
      type: Schema.Types.ObjectId,
      ref: "Member"
    },

    // manyToMany → array of ObjectIds
    collaborators: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student"
      }
    ],

    cover_image: {
      type: String // image URL/path
    },

    date_of_publication: {
      type: Date,
      required: true
    },

    // oneToOne with Department (inverse side)
    department: {
      type: Schema.Types.ObjectId,
      ref: "Department"
    },

    // i18n support
    locale: {
      type: String
    },
    localizations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Patent"
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

// Sparse unique indexes — only enforce uniqueness for non-null values
PatentSchema.index({ head: 1 }, { unique: true, sparse: true })
PatentSchema.index({ department: 1 }, { unique: true, sparse: true })

export const Patent =
  models.Patent || model("Patent", PatentSchema)