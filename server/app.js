//require the module
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config({ path: '.env' });

if (!process.env.PORT) {
  console.error("❌ Error: .env file not loaded or missing required environment variables.");
  process.exit(1); 
}

require('./db/database');

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/",(_,res)=>{
  res.json({message:"Server Set Up Succesfully (Health Check)"}); 
});

app.listen(PORT, () => {
  console.log(`Server Listening on ${process.env.PORT}`);
});
