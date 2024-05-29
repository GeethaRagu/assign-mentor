import express from 'express';
import { createStudent, getStudents } from '../Controllers/studentController.js';
import { createMentor, getmentorById, getmentors } from '../Controllers/mentorController.js';
import { assignMentor, getoldmentor, modifyMentor } from '../Controllers/studentmentorController.js';

const router = express.Router();
router.get('/student/all',getStudents);
router.post('/student/create',createStudent);
router.get('/mentor/all',getmentors);
router.post('/mentor/create',createMentor);
router.get('/mentor/:id',getmentorById);
router.put('/mentor/assign',assignMentor);
router.put('/student/modifymentor',modifyMentor);
router.get('/student/oldmentor/:id',getoldmentor);
export default router;