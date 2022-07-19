const mongoose=require("mongoose");

const commentSchema=new mongoose.Schema({
    userId:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"user",
     required:true
    },

    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post",
        required:true
    },
    desc:{type:String,required:true},
    likes:{type:Number, required:false,default:0}

},
    {
        versionKey:false,
        timestamps:true
    }
);

const Comment =mongoose.model("comment",commentSchema);
module.exports=Comment;