import React, {useState,useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function ShowStudents() {
  const classes = useStyles();

  const [studentsList,setStudentsList] = useState([]);

  const deleteStudent = (id) =>{
    axios.delete(`http://localhost:8000/students/${id}`).then(()=>{
      window.location.reload(false);
    })
  }


  useEffect(()=>{
      axios.get('http://localhost:8000/students').then((allStudents)=>{
          setStudentsList(allStudents.data);
          console.log(allStudents.data);
      })
  },[])

  return (
    <>
    <h2>Students enrolled</h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">SAP ID</TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">Section</TableCell>
            <TableCell align="right">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {studentsList.map((student,key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {student.studentName}
              </TableCell>
              <TableCell align="right">{student.regNo}</TableCell>
              <TableCell align="right">{student.grade}</TableCell>
              <TableCell align="right">{student.section}</TableCell>
              <TableCell align="right">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={()=> deleteStudent(student._id)}
                startIcon={<DeleteIcon fontsize="small"/>}
              >
                Delete
              </Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
