const express = require('express');
const app = express();
const cors = require('cors');
const whitelist = ['http://localhost:3000']; // add the origin of your frontend app here
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
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
