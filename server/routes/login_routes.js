const express =require('express')

const logcntrl= require('../controller/Login_control')

const loginrouter=express.Router()

loginrouter.post('/sign', function(req, res){
    console.log("Sign up route in")
    logcntrl.SignUp(req, res)
  });
  loginrouter.post('/login', function(req, res){
    logcntrl.LoginID(req, res)
  });
/*
router.post("/userId",logcntrl.userId)
router.post("/sign",logcntrl.SignUp)
router.post("/login",logcntrl.LoginID)
router.post("/rooms",logcntrl.createRooms)
router.post("/BRooms",logcntrl.createBRooms)
router.post("/joinRoom",logcntrl.joinRoom)
router.post("/getrooms",logcntrl.getRooms)
router.post("/deleterooms",logcntrl.deleteRoom)
*/
//module.exports=router

module.exports=loginrouter;