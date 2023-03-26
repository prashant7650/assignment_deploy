const express = require("express");
const {NoteModel} = require("../model/Note.model")

const noteRouter = express.Router()

noteRouter.get("/", async (req,res) => {

    const notes = await NoteModel.find()
    res.send(notes)
})
noteRouter.post("/add", async (req,res) => {
    const payload = req.body
    const note  = new NoteModel(payload)
     await note.save()
     res.send("Notes Created")
   
})
noteRouter.patch("/update/:id", async (req,res) => {
    const noteID = req.params.id
    await NoteModel.findByIdAndUpdate({_id:noteID})
    res.send({"msg":"Note with id has been updated"})
})

noteRouter.delete("/delete/:id", async (req,res) => {
    const noteID = req.params.id
    await NoteModel.findByIdAndDelete({_id:noteID})
    res.send({"msg":`Note with id  ${noteID} has been delted`})
})
module.exports ={
    noteRouter
}