import { Schema } from "mongoose";

const HouseSchema = new Schema(
  {
    bedrooms: { type: Number, min: 0, max: 30, required: true },
    bathrooms: { type: Number, min: 0, max: 25, required: true },
    levels: { type: Number, min: 0, max: 25, required: true },
    price: { type: Number, min: 0, max: 10000000, required: true },
    imgUrl: { type: String, minLength: 0, maxLength: 500, required: true },
    description: { type: String, minLength: 0, maxLength: 500, required: true },
    year: { type: Number, min: 1000, max: 2024 }
  },

  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)