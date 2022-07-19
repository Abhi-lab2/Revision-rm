
const mongoose=require("mongoose");
const app=require("./index");

require("dotenv").config();

const PORT =process.env.PORT || 4001
const connect=()=>{
    return mongoose.connect(process.env.mongodbURL)

}

app.listen(PORT,async function(){
    await connect();
    console.log("listening on port 4000")
})