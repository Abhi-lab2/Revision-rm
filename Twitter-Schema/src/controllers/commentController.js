const express=require('express');

const router=express.Router();

const Comment=require("../models/commentModel");


router.get("/:id",async(req,res)=>{
    try{
        const comments= await Comment.find({postId:req.params.id}).lean().exec();
        return res.status(200).send({"Comments":comments})

    }
    catch(err){
        return res.status(500).send({error:err.message});

    }
})

router.post("",async(res,res)=>{
    try{
        const comment=await Comment.create(req.body);
        return res.status(201).send({"comment":comment});

    }
    catch(err){
        return res.status(500).send({error:err.message});

    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const comment=await Comment.findByIdAndUpdate(req.params.id,req.body);
        return res.status(201).send({"comment":comment});

    }catch(err){
        return res.status(500).send({error:err.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const comment=await Comment.findByIdAndDelete(req.params.id);
        return res.status(201).send({"comment":comment});

    }catch(err){
        return res.status(500).send({error:err.message })
    }
})

module.exports=router;