import { Document, Schema, model } from "mongoose";
import Category from "./CategoryMongoDB";

export interface InterfaceSongModel extends Document {
  url: string;
  title: string;
  songimg: string;
  category: Schema.Types.ObjectId;
  videofile: string;
}

const SongSchema = new Schema<InterfaceSongModel>(
  {
    url: {
      type: String,
      required: [true, "URL is required"],
      minlength: [3, "URL must be at least 3 characters"],
      maxlength: [255, "URL must be less than 255 characters"],
      trim: true,
      unique: true,
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [255, "Title must be less than 255 characters"],
      trim: true,
      unique: false,
    },
    songimg: {
      type: String,
      minlength: [3, "Song image URL must be at least 3 characters"],
      maxlength: [255, "Song image URL must be less than 255 characters"],
      trim: true,
      unique: true,
    },
    category: {
      type: Schema.Types.ObjectId,
    },
    videofile: {
      type: String,
      minlength: [3, "Video file URL must be at least 3 characters"],
      maxlength: [255, "Video file URL must be less than 255 characters"],
      trim: true,
      unique: true,
    },
  },
  { versionKey: false, toJSON: { virtuals: true } }
);

SongSchema.virtual("categoryName", {
  ref: Category,
  localField: "category",
  foreignField: "_id",
  justOne: true,
});

const SongModel = model<InterfaceSongModel>("SongModel", SongSchema, "Song");

export default SongModel;
