const mongoose = require("mongoose");

const BookMarkSchema = mongoose.Schema({
    job:{type:String, required:true},
    userId:{type:String, required:true},
    title:{type:String, required:true},
    imageUrl:{type:String, required: true, default:'profile-pic'},
    company:{type:String, required: true},
    location:{type:String, required:true},

    
}, {timestamp: true}

)

module.exports = mongoose.model("Bookmark", BookMarkSchema)