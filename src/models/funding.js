import mongoose, { Schema, models, model } from "mongoose"

const FundingSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },

    
    amount: {
      type: Number,
      required: true
      // alternatively: type: String (if very large values expected)
    },

    description: {
      type: String
    },

    // multiple media → array of URLs/paths
    media: [
      {
        type: String
      }
    ],

    agency: {
      type: String
    },

    date_of_funding: {
      type: Date
    },

    // i18n support
    locale: {
      type: String
    },
    localizations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Funding"
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

export const Funding =
  models.Funding || model("Funding", FundingSchema)