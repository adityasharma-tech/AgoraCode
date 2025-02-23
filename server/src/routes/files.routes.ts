import { Router } from "express";
import { createNewFile, getFile } from "../controller/file.controller";

const router = Router();

router.route("/:wid").post(createNewFile) // wid: workspace id as param
router.route("/:id").get(getFile)

export default router;