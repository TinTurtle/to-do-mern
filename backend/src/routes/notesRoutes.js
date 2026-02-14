import express from "express";
import { getNoteById, getAllNotes, createNote, updateNote, deleteNote} from "../controllers/notesControllers.js";

const router = express.Router();

//what is an endpoint?
// an endpoint is a combination of a URL + HTTP method that lets the client interact with a specific resource

router.get("/",getAllNotes);
router.get("/:id",getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;


