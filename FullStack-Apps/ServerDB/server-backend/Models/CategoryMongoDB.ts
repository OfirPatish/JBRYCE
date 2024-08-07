import { Document, Schema, model } from "mongoose";

export interface InterfaceCategoryModel extends Document {
  name: string;
}

const CategorySchema = new Schema<InterfaceCategoryModel>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "Name must be at least 3 characters"],
      maxlength: [255, "Name must be less than 255 characters"],
      trim: true,
      unique: true,
    },
  },
  { versionKey: false }
);

const CategoryModel = model<InterfaceCategoryModel>("CategoryModel", CategorySchema, "Category");

export default CategoryModel;
