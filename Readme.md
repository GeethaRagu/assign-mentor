# Mentor - Student Assign 
This API has endpoints to create student and mentor,assign mentor to student,modify mentor for a student , get details of particular mentor and get previously assigned mentor of a student.

1. Create Student: 
/student/create: Creates a student with studentName and studentEmail.These fields are to be mentioned in request in json format.

 RenderURL : https://assign-mentor-e1dx.onrender.com/api/student/create


 2. Create Mentor
 /mentor/create: Creates a mentor with mentorName and mentorEmail.These fields are to be mentioned in request in json format.

 RenderURL: https://assign-mentor-e1dx.onrender.com/api/mentor/create

 3. Assign mentor to a student
 /mentor/assign : Assigns a mentor for more than one student.Studentsid to the corresponding mentor are given in the studentsList array along with mentorId.
 The mentor is updated with students details and the student is updated with mentor details.

 RenderURL: https://assign-mentor-e1dx.onrender.com/api/mentor/assign

 4. Change mentor for a particular student
 /student/modifymentor : Changes the mentor of a student.The newMentorId and studentId are given in the request.
The student details in old mentorid are removed and added to new mentor id.
The mentor is updated with new student details.

RenderURL:
https://assign-mentor-e1dx.onrender.com/api/student/modifymentor

5. Show all students for a particular mentor
/mentor/:id  : Retrieves the mentor details of mentorid mentioned in the queryparam and shows its students.

RenderURL:
https://assign-mentor-e1dx.onrender.com/api/mentor/665746b7ab3a34650a3ae6ab

6. show previously assigned mentor for a particular student
/student/oldmentor/:id :Retreives old mentor details of studentid mentioned in queryparam.

RenderURL:
https://assign-mentor-e1dx.onrender.com/api/student/oldmentor/665750bdb7faf1a9183bcd86


Postman Documentation:
https://documenter.getpostman.com/view/31336064/2sA3QtfBrr
  
