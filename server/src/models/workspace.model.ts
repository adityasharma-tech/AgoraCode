import mongoose, { Schema } from "mongoose";

const WorkspaceSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    cid: { type: String, required: true },
    files: [{ type: Schema.Types.ObjectId, ref: "Files" }],
  },
  { timestamps: true }
);

export default mongoose.models.Workspaces ||
  mongoose.model("Workspaces", WorkspaceSchema);
