const express = require("express")

const mongoose = require("mongoose")
const Rooms = require("./dbRooms")
const Messages = require("./dbMessages")

const app = express()
const cors = require("cors")

app.use(cors())

app.use(express.json())
mongoose.connect("mongodb+srv://Irshath:ahamed@cluster0.iwmdb.mongodb.net/whatsapp_clone?retryWrites=true&w=majority")
.then(()=> {
    console.log("db is connected")
})


app.get("/", (req,res) => {
    console.log("responding")
})


app.post("/messages/new", (req,res) => {
    const message = req.body
    Messages.create(message, (err,data) => {
        if(err){
            return res.status(500).send(err)
        }
        else {
            return res.status(201).send(data)
        }
    })

})

app.post("/groups/create", (req,res) => {

    const name = req.body.groupName
    
    Rooms.create({name}, (err,data) => {
        if(err) {
            return res.status(500).send(err)
        }
        else {
            return res.status(201).send(data)
        }
    })
        
})





app.listen(5000, ()=> {
    console.log("server is running")
})