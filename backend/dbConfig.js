const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()

MONGO_URL=process.env.MONGO_URL
console.log('Mongo URL ', MONGO_URL)

const connectToMongoDB=async ()=>{
   try {
     await mongoose.connect(MONGO_URL)
     console.log("connected to mongoDB")    
   } catch (error) {
    console.log(error,"Error")   
   }
}

module.exports=connectToMongoDB