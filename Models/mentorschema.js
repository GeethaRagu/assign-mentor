import mongoose from "mongoose";

const mentorschema = mongoose.Schema({
    mentorName:String,
    mentorEmail:String,
    studentsassigned:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Student"
        }
    ]
});
const mentor = mongoose.model("Mentor",mentorschema,"Mentor");

export default mentor;