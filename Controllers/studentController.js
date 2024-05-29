import student from '../Models/studentschema.js'

export const getStudents = async(req,res)=>{
    try {
        const studentdetails = await student.find().populate("mentorDetails");
        res.send(studentdetails);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error in student get method"});
    }
}
export const createStudent = async(req,res)=>{
   try {
    const newStudent = new student(req.body);
    await newStudent.save();
    res.send(newStudent);
 } catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal server error in student create method"});
 }
}