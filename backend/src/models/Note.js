import mongoose  from "mongoose";

//1 - make the schema
//2 - make the model from the schema

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // createdAt, updatedAt
);

const Note = mongoose.model("Note", noteSchema);

export default Note;