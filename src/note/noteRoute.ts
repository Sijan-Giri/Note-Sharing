import express from "express"
import { createNote, deleteNote, listNote, listNoteById, updateNote } from "./noteController";
import {multer , storage} from "./../middleware/multerMiddleware"

const router = express.Router();

const upload = multer({storage : storage})
router.route("/createNote").post(upload.single("file"),createNote);
router.route("/getNotes").get(listNote);
router.route("/getNote/:id").get(listNoteById);
router.route("/deleteNote/:id").delete(deleteNote);
router.route("/updateNote/:id").patch(updateNote)

export default router



