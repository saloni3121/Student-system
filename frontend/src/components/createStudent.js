import React,{useState} from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from '../axios.js';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export default function CreateStudent() {
  const classes = useStyles();
  const [student,setStudent] = useState({
      regNo : '' ,
      studentName :'',
      grade: '',
      section: '',
  });

  const createStudent = ()=>{
    console.log(student);
    axios.post('http://localhost:8000/students',student).then(()=>{
      window.location.reload(false);
    })
  }

  return (
    <>
        <h2>Create Student</h2>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="SAP ID" variant="outlined" value={student.regNo} onChange={(event)=>{
            setStudent({...student,regNo: event.target.value})
        }}/>
        <TextField id="outlined-basic" label="Name of the student" variant="outlined" value={student.studentName}onChange={(event)=>{
            setStudent({...student,studentName: event.target.value})
        }}/>
        <TextField id="outlined-basic" label="Grade" variant="outlined"value={student.grade} onChange={(event)=>{
            setStudent({...student,grade: event.target.value})
        }} />
        <TextField id="outlined-basic" label="Section" variant="outlined" value={student.section} onChange={(event)=>{
            setStudent({...student,section: event.target.value})
        }}/>
        
        <Button variant="contained" color="primary" onClick={createStudent}>Create Student</Button>
        </form>
    </>
  );
}
