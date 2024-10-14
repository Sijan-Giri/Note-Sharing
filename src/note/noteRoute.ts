import express from "express"
import { createNote, listNote, listNoteById } from "./noteController";
import {multer , storage} from "./../middleware/multerMiddleware"

const router = express.Router();

const upload = multer({storage : storage})
router.route("/createNote").post(upload.single("file"),createNote);
router.route("/getNotes").get(listNote);
router.route("/getNote/:id").get(listNoteById)

export default router



