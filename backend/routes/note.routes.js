const express = require("express");
const jwt = require("jsonwebtoken");

const noteRouter = express.Router();
const bcrypt = require("bcrypt");
const { authenticator } = require("../middlewares/authenticator");
const { NoteModel } = require("../models/NoteModel");

noteRouter.use(authenticator);

noteRouter.get("/", (req, res) => {
  let token = req.headers.authorization;
  jwt.verify(token, "asmare", async (error, decode) => {
    if (error) {
      return res.send({
        message: "Token verification failed",
        status: 0,
      });
    }

    try {
      let data = await NoteModel.find({ user: decode.userId });
      res.send({
        data: data,
        message: "success",
        status: 1,
      });
    } catch (error) {
      res.send({
        message: error.message,
        status: 0,
      });
    }
  });
});

noteRouter.post("/create", async (req, res) => {
  try {
    let note = new NoteModel(req.body);
    await note.save();
    res.send({
      message: "Note Created",
      status: 1,
    });
  } catch (error) {
    res.send({
      message: error.message,
      status: 0,
    });
  }
});

noteRouter.patch("/",async(req,res) => {
    let{id} = req.headers
    try {
        await NoteModel.findByIdAndUpdate({_id:id},req.body)
        res.send({
            message:"note updated",
            status:1
        })
    } catch (error) {
        res.send({
            message:error.message,
            status:0
        })
    }
})

noteRouter.delete("/"),async(req,res) =>{
    let id = req.headers
    try {
        await NoteModel.findByIdAndDelete({_id:id})
        res.send({
            message:"note deleted",
            status:1
        })
    } catch (error) {
        res.send({
            message:error.message,
            status:0
        })
    }
}

module.exports = {
  noteRouter,
};
