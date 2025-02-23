import { Router } from "express";
import {
  createWorkspace,
  deleteWorkspace,
  getWorkspaceById,
  getWorkspacesByCid,
  updateWorkspaceName,
} from "../controller/workspace.controller";

const router = Router();

router
  .route("/:id")
  .get(getWorkspaceById)
  .put(updateWorkspaceName)
  .delete(deleteWorkspace);
router.route("/").get(getWorkspacesByCid).post(createWorkspace);

export default router;
