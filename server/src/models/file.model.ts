import mongoose, { Schema } from "mongoose";

const FileModel = new Schema(
  {
    filepath: { type: String, required: true, trim: true },
    content: { type: String, required: false, default: "" },
  },
  { timestamps: true }
);

export default mongoose.models.Files || mongoose.model("files", FileModel);
