const express=require("express");
const cors=require("cors")
const userController=require("./controllers/userController")
const postsController=require("./controllers/postController");
const commentController=require("./controllers/commentController")
const app=express();

app.use(express.json());
app.use(cors());

app.use("/users",userController)

 app.use("/posts", postsController);

 app.use("/comments", commentController)

module.exports=app;