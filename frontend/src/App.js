import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import './App.css';
import ShowStudents from './components/showStudents'
import CreateStudent from './components/createStudent'
import useStyles from './styles';
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
        <div className={classes.appBar} position ="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align ="center">Student Management System</Typography>
        </div>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignContent="stretch">

               {/* Table */}
               <Grid item xs={12} sm={7}>
                  <AppBar className={classes.appBar} position ="static" color="inherit">
                  <ShowStudents/>
                  </AppBar>

              </Grid>
              {/* Form */}
              <Grid item xs={12} sm={4}>
                  <AppBar className={classes.appBar} position ="static" color="inherit">
                  <CreateStudent/>
                  </AppBar>
              </Grid>

            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
