const mongoose= require('mongoose')


const mongoURI ="mongodb://localhost:27017/inotebook" 

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Conected to mongo successfully")
    })
} 

module.exports=connectToMongo