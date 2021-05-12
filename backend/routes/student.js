import express from 'express';
import bodyParser from 'body-parser';
import {getStudents, createStudent, deleteStudent} from '../controllers/student.js';
import StudentData from '../models/student.js';

const router = express.Router();
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: true });

// below function takes body and call back function as parameter
router.get("/", urlencodedParser, getStudents);
router.post("/", jsonParser, createStudent);
router.delete('/:id', deleteStudent)
export default router;
