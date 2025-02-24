import { Schema } from "mongoose";
import { ApiError } from "../lib/ApiError";
import { ApiResponse } from "../lib/ApiResponse";
import { asyncHandler } from "../lib/asyncHandler";
import { createFile } from "../services/file.service";
import FileModel from "../models/file.model";

const createNewFile = asyncHandler(async (req, res) => {
  if (
    !req.query.filepath ||
    req.query.filepath.toString().trim() === "" ||
    req.params.wid.trim() === ""
  )
    throw new ApiError(400, "filepath & workspaceid is a required field.");

  const file = await createFile(
    req.query.filepath.toString(),
    req.params.wid.toString()
  );

  res
    .status(200)
    .json(new ApiResponse(200, { file }, "File created successfully."));
});

const getFile = asyncHandler(async (req, res) => {
  if (req.params.id.trim() == "")
    throw new ApiError(400, "file id is required field.");

  const file = await FileModel.findById(new Schema.ObjectId(req.params.id));
  if (!file) throw new ApiError(404, "File not found");

  res.status(200).json(new ApiResponse(200, { file }));
});

const updateFileContent = asyncHandler(async (req, res) => {
  if (req.params.id.trim() == "" || req.body.content.trim() == "")
    throw new ApiError(400, "provide the file id.");

  const file = await FileModel.findOneAndUpdate(
    new Schema.ObjectId(req.params.id),
    { content: req.body.content },
    { new: true }
  );
  if (!file) throw new ApiError(404, "File not found");
  res.status(200).json(new ApiResponse(200, { file }));
});

const updateFilePath = asyncHandler(async (req, res) => {
  if (
    req.params.id.trim() == "" ||
    !req.body.filepath ||
    req.body.filepath.trim() == ""
  )
    throw new ApiError(400, "provide the file id and filepath");

  const file = await FileModel.findOneAndUpdate(
    new Schema.ObjectId(req.params.id),
    { filepath: req.body.filepath },
    { new: true }
  );
  if (!file) throw new ApiError(404, "File not found");
  res.status(200).json(new ApiResponse(200, { file }));
});

export { createNewFile, getFile, updateFileContent, updateFilePath };
