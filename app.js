const express = require('express');
const app = express();
const cors=require('cors')
app.use(cors())
const { urlencoded } = require('express');
app.use(urlencoded())
app.use(express.json())
let cookieParser = require('cookie-parser'); 
app.use(cookieParser())
const dotenv = require('dotenv');
dotenv.config();


const { initDB } = require('./mongoDB');  
initDB();

const { signUp,login,logout,follower } = require('./controllers/authControllers');



app.post('/signup', signUp);
app.post('/login', login);
app.post('/logout', logout);
app.get('/followers',follower);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
