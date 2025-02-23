import { Schema } from "mongoose";
import { ApiError } from "../lib/ApiError";
import { ApiResponse } from "../lib/ApiResponse";
import { asyncHandler } from "../lib/asyncHandler";
import { areValuesValid } from "../lib/utils";
import WorkspaceModel from "../models/workspace.model";

const createWorkspace = asyncHandler(async (req, res) => {
  const workspace = await WorkspaceModel.insertOne({
    cid: req.user.id,
    files: [],
  });

  if (!workspace) throw new ApiError(400, "Failed to create new workspace");

  res
    .status(201)
    .json(
      new ApiResponse(201, { workspace }, "Workspace created successfully.")
    );
});

const getWorkspaceById = asyncHandler(async (req, res) => {
  if (!areValuesValid(req.params.id))
    throw new ApiError(400, "Please provide workspace ID in params.");

  const workspace = await WorkspaceModel.findById(
    new Schema.ObjectId(req.params.id)
  );

  if (!workspace) throw new ApiError(404, "Workspace not found.");
  res.status(200).json(new ApiResponse(200, { workspace }));
});

/* 
list all the created workspaces by any user
*/
const getWorkspacesByCid = asyncHandler(async (req, res) => {
  const workspaces = await WorkspaceModel.find({ cid: req.user.id });
  res.status(200).json(new ApiResponse(200, { workspaces }));
});

/* 
Update workspace title
*/
const updateWorkspaceName = asyncHandler(async (req, res) => {
  if (!areValuesValid(req.params.id, req.query.title))
    throw new ApiError(400, "params.id and query.title are required fields.");

  const workspace = await WorkspaceModel.updateOne(
    { _id: new Schema.ObjectId(req.params.id), cid: req.user.id },
    { $set: { title: req.query.title } },
    { new: true }
  );
  res
    .status(200)
    .json(new ApiResponse(200, workspace, "workspace title updated"));
});

/* 
delete whole workspace
*/
const deleteWorkspace = asyncHandler(async (req, res) => {
  if (!areValuesValid(req.params.id))
    throw new ApiError(400, "workspace id is a required field.");

  await WorkspaceModel.deleteOne({
    _id: new Schema.ObjectId(req.params.id),
    cid: req.user.id,
  });
  res.json(200).json(new ApiResponse(200, null));
});

export {
  createWorkspace,
  getWorkspaceById,
  getWorkspacesByCid,
  updateWorkspaceName,
};
