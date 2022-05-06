const mongoose = require("mongoose")


const RoomSchema = new mongoose.Schema({
    name:String
}, {
    timestamps:true
})


const Rooms = mongoose.model("room", RoomSchema)

module.exports = Rooms