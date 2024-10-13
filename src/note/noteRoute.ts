import express from "express"
import { createNote } from "./noteController";

const router = express.Router();

router.route("/createNote").post(createNote)

export default router



