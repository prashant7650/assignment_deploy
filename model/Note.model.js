const mongoose = require("mongoose")

const noteSchema = mongoose.Schema({
    title:String,
    body :String,
    
    

}
,{

    
    versionKey: false
})

// model for thee data
const NoteModel = mongoose.model("note",noteSchema)

module.exports = {
     NoteModel
}