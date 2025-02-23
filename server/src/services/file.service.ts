import { Schema } from "mongoose";
import { ApiError } from "../lib/ApiError";
import FileModel from "../models/file.model";
import WorkspaceModel from "../models/workspace.model";

const createFile = async function (filepath: string, workspaceid: string) {
  try {
    const file = await FileModel.insertOne({ filepath, content: "" });
    await WorkspaceModel.findByIdAndUpdate(new Schema.ObjectId(workspaceid), {
      $push: { files: file._id },
    });
    return file;
  } catch (error: any) {
    throw new ApiError(500, `Some error occured: ${error.message}`);
  }
};

export { createFile };
