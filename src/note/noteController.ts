import { Request, Response } from "express";
import Note from "./noteModel";
import envConfig from "../config/config";


const createNote = async(req:Request,res:Response) => {
    try {
    const file = req.file ? `${envConfig.backendUrl}/${req.file.filename}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7EtqOpuewOP5rSURN8E4W8rUPhuGoPK2LKw&s"
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

const listNote = async(req:Request,res:Response) => {
    try {
        const allNotes = await Note.find()
    res.status(200).json({
        message : "Notes fetched successfully",
        data : allNotes
    })
    } catch (error) {
      console.log("Error occured",error)  
    }
}

const listNoteById = async(req:Request,res:Response) => {
    try {
        const {id} = req.params;
        if(!id) {
            res.status(400).json({
                message : "Please provide id"
            })
        }
        const note = await Note.findById(id);
        res.status(200).json({
            message : "Note fetched successfully",
            data : note
        })
    } catch (error) {
        console.log("Error occured",error)
    }
}

const deleteNote = async(req:Request,res:Response) => {
    const {id} = req.params;
    if(!id) {
        res.status(400).json({
            message : "Please provide id"
        })
    }
    await Note.findByIdAndDelete(id)
    res.status(200).json({
        message : "Note deleted successfully"
    })
}

const updateNote = async(req:Request,res:Response) => {
    const {id} = req.params;
    const file = req.file ? `${envConfig.backendUrl}/${req.file.filename}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7EtqOpuewOP5rSURN8E4W8rUPhuGoPK2LKw&s"
    const {title , subtitle , description} = req.body;
    if(!id) {
        res.status(400).json({
            message : "Please provide id"
        })
    }
    if(!title || !description) {
        res.status(400).json({
            message : "Please provide title & description"
        })
    }
    const updatedNote = await Note.findByIdAndUpdate(id,{
        title,
        subtitle,
        description,
        file
    });
    res.status(200).json({
        message : "Note updated successfully",
        data : updatedNote
    })
    
}

export {createNote , listNote , listNoteById , deleteNote , updateNote}