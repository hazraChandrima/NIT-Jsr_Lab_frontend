import mongoose, { Schema, models, model } from "mongoose"

const DepartmentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },

    description: {
      type: String
    },

    cover_image: {
      type: String // image URL or file path
    },

    // oneToOne → single ObjectId
    HOD: {
      type: Schema.Types.ObjectId,
      ref: "Member",
      unique: true
    },

    // oneToMany → array of ObjectIds
    faculties: [
      {
        type: Schema.Types.ObjectId,
        ref: "Member"
      }
    ],

    department_id: {
      type: String,
      required: true,
      unique: true
    },

    // UID (slug)
    slug: {
      type: String,
      unique: true
    },

    // oneToOne (mappedBy means Patent has "department" field)
    patent: {
      type: Schema.Types.ObjectId,
      ref: "Patent"
    },

    // i18n support
    locale: {
      type: String
    },
    localizations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Department"
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

export const Department =
  models.Department || model("Department", DepartmentSchema)