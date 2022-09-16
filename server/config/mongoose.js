const mongoose = require('mongoose');
const dotenv=require('dotenv');

dotenv.config();
const URL=process.env.DB_URL;


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
  });
  console.log('db is connected')
}

const db=mongoose.connection;

module.exports=db;