import mentor from '../Models/mentorschema.js';

export const getmentors = async(req,res)=>{
    try {
        const mentordetails = await mentor.find().populate("studentsassigned");
        res.send(mentordetails);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error in mentor get method"});
        
    }
}

export const createMentor = async(req,res)=>{
    try {
        const newMentor = new mentor(req.body);
        await newMentor.save();
        res.send(newMentor);
     } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error in mentor create method"});
     }
}

export const getmentorById = async(req,res)=>{
    try {
        const mentorId = req.params.id;
        const mentordata = await mentor.findById(mentorId).populate("studentsassigned");
        res.send(mentordata);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error in mentor getbyid method"});
        
    }
}