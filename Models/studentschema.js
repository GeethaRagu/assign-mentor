import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    studentName: String,
    studentEmail:String,
    mentorDetails: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Mentor"
    
    },
    oldmentorDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Mentor"
    }
});

// studentSchema.pre('save',async function(done){
//     if(this.isModified('mentorDetails')){
//         const hashed = await studentSchema.toHash(this.get('mentorDetails'));
//         this.set('oldmentor',hashed);
//     }
//     done();
// })
const student = mongoose.model("Student",studentSchema,"Student");

export default student;