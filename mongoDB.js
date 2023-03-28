let mongoose = require('mongoose')




async function initDB(){

    try{

        await mongoose.connect(process.env.DB_url,{dbName:'Cipherschools'})
console.log('DB is connected');

    }catch(err){

        console.log(err);
    }
  
 
}

module.exports= {initDB}