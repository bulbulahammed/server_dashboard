const express = require('express');
const app = express();
const {jsonData} = require("./data/jsonData");
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
// const userRoutes = require('./routes/userRoutes');
// const noteRoutes = require('./routes/noteRoutes');
const { errorHandler, notFound } = require('./middleware/errorMiddleware');

const DashData = require("./models/dataModel");

var cors = require('cors');
app.use(cors());



// Apply Json
app.use(express.json());


// MongoDB Connection
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nsmggcf.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);

mongoose.connect(url,{
    useNewUrlParser: true,
})
.then(()=> console.log('Database connection established'))
.catch(err => console.log(err));


app.get('/', (req, res) => {
  res.send('Hello, From Server! ✌')
});

// TODO: Remove after test
app.get("/api/jsonData",(req,res)=>{
  res.json();
})

// Creating Route for users
// app.use('/api/users',userRoutes);
// Creating Route for notes
// app.use('/api/notes',noteRoutes);

// --------------------------deployment------------------------------

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

module.exports = app;