import { Request, Response } from "express";
import Note from "./noteModel";


const createNote = async(req:Request,res:Response) => {
    try {
    const file = req.file
    const {title , subtitle , description } = req.body;
    if(!title || !description) {
         res.status(400).json({
            message : "Title & description are not provided"
        });
        return;
    }
    await Note.create({
        title,
        subtitle,
        description,
        file
    })
    res.status(200).json({
        message : "Notes created successfully"
    })
    } catch (error) {
        console.log("Error occured",error)
    }
}

export {createNote}