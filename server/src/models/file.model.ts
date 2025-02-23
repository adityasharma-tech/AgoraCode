import mongoose, { Schema } from "mongoose";

const FileModel = new Schema(
  {
    filename: { type: String, required: true, trim: true },
    content: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.models.Files || mongoose.model("Files", FileModel);
