import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';
import bodyParser from 'body-parser';
// Xf9bnXJ7Q6aaKgn

const app = express();

app.use('/students',studentRoutes);

app.use(bodyParser.json({limit:"20mb",extended : true}));
app.use(bodyParser.urlencoded({limit:"20mb",extended : true}));

app.use(cors());

const CONNECTION_URL = 'mongodb+srv://Admin:Xf9bnXJ7Q6aaKgn@cluster0.rv7e7.mongodb.net/Student-management-system?retryWrites=true&w=majority';
const PORT = process.env.PORT || 8000;

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>app.listen(PORT,()=> console.log(`Connection to mongoDB is established and is now listening on port : ${PORT}`)
)).catch((err)=> console.log(err.message));

mongoose.set('useFindAndModify',false)

