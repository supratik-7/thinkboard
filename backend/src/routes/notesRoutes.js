
import express from "express";
import {  createNote,  deleteNote, getAllNotes,  getNoteById,  updateNote } from "../controllers/notesController.js";


const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;

// app.get("/api/notes", (req,res) => {
//     //send the notes
//     res.status(200).send("you got 20 notes");
// });


// app.post("/api/notes", (req,res) => {
//     res.status(201).json({message:"post created successfully!"})
// });


// app.put("/api/notes/:id", (req,res) => {
//     res.status(200).json({message:"Note updated successfully!"})
// });

// app.delete("/api/notes/:id", (req,res) => {
//     res.status(200).json({message:"Note deleted successfully!"})
// });