const express = require('express')
const passport = require('passport')
const session = require('express-session')
const studentRouter = require('./routes/studentRoutes')
const courseRouter = require('./routes/courseRoutes')
const userRouter = require('./routes/userRoutes');
const connectDB = require('./config/db')
const dotenv = require('dotenv')

dotenv.config();
require('./config/passport')(passport);

const app = express()

connectDB();

app.use(express.json());

app.use(session({
    secret: process.env.SECRET_SESSION_KEY,
    resave:false,
    saveUninitialized:false,
    cookie:{},
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/students', studentRouter)
app.use('/courses', courseRouter)
app.use('/auth', userRouter);

const PORT = process.env.PORT || 8000;
  
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
