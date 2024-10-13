import mongoose from "mongoose";
import { Note } from "./noteTypes";

const schema = mongoose.Schema;

const noteSchema = new schema<Note>({
    title : {
        type : String,
        required : true
    },
    subtitle : {
        type : String
    },
    description : {
        type : String,
        required : true
    },
    file : {
        type : String
    }
},{timestamps : true})

const Note = mongoose.model<Note>("Note",noteSchema);
export default Note