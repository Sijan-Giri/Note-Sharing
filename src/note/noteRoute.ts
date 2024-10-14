import express from "express"
import { createNote } from "./noteController";
import {multer , storage} from "./../middleware/multerMiddleware"

const router = express.Router();

const upload = multer({storage : storage})
router.route("/createNote").post(upload.single("file"),createNote)

export default router



