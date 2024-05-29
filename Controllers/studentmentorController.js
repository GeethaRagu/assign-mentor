import student from "../Models/studentschema.js";
import mentor from "../Models/mentorschema.js";

//get mentorId and studentsid [studentsList] from request and get the particular mentor
// data with mentorid and add the students details under studentsassigned
export const assignMentor = async (req, res) => {
  try {
    const mentorid = req.body.mentorId; //get mentor id from request
    const mentorinfo = await mentor.findById(mentorid);
    //console.log(mentorinfo);

    // const [studentsList] = req.body.studentsList;
    // console.log(studentsList);
    // const result = await mentorinfo.updateOne({
    //   $push: { studentsassigned: [studentsList] },
    // });
    // //console.log(result);
    // if (result.matchedCount == 0) {
    //   return res.status(404).send("Mentor not found");
    // }
    // const updatementor = await mentor.find({ _id: mentorid });
    mentorinfo.studentsassigned = [
      ...mentorinfo.studentsassigned,
      ...req.body.studentsList,
    ];
    mentorinfo.save();
    //adding mentor to all respective students
    req.body.studentsList.forEach(async (s) => {
      const studentupdate = await student.findById(s);
      studentupdate.mentorDetails = req.body.mentorId;
      studentupdate.save();
    });

    res.status(200).json({
      message: "Mentor assigned to students successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal server error in assign student mentor method"});
  }
};

//modify mentor- get student id and new mentor id in request

export const modifyMentor = async (req, res) => {
  try {
    //change mentorassigned to new value in students
    const studdata = await student.findById(req.body.studentId);
    const oldMentorId = studdata.mentorDetails; //save the oldmentor id for updating studentsassigned later
    studdata.mentorDetails = req.body.newMentorId;
    studdata.oldmentorDetails = oldMentorId;

    studdata.save();
    //remove student from oldmentor assignedlist and add in new mentor assignedlist

    //change in oldmentor studentssssigned list
     //filtering that one student and remove from studentList of mentor
    const oldmentor = await mentor.findById(oldMentorId);
    const newAssigned = oldmentor.studentsassigned;
    const indexpos = newAssigned.indexOf(req.body.studentId);
    newAssigned.pop(indexpos);
    oldmentor.studentsassigned = newAssigned;
    oldmentor.save();

    //add the studentid in newMentor studentsassignedlist
    let newmentor = await mentor.findById(req.body.newMentorId);
    if (newmentor.studentsassigned.length < 0) {
      return;
    } else {
      if (!newmentor.studentsassigned.includes(req.body.studentId)) {
        newmentor.studentsassigned = [
          ...newmentor.studentsassigned,
          req.body.studentId,
        ];
      }
    }
    newmentor.save();

    res.send(
      "Updated mentor to respective student , updated in oldmentor and new mentor studentsassigned list"
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal server error in modify student- mentor method"});
  }
};

export const getoldmentor = async (req, res) => {
  try {
    const studentid = req.params.id;
    const studentdata = await student
      .findById(studentid)
      .populate("oldmentorDetails");
    res.send(studentdata);
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal server error in get oldmentor method"});
  }
};
