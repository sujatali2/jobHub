const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
    title:{type:String, required:true,},
    location:{type:String, required:true},
    description:{type:String, required:true},
    company:{type:String, required:true},
    salary:{type:String, required:true}, //10k
    period:{type:String, required:true}, //monthly
    contract:{type:String, required:true}, //part time , full time
    requirements:{type:Array, required:true},
    imageUrl: {type: String, required: true},
    agentId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true}, //who upload the job



}, {timestamp: true}
)

module.exports = mongoose.model("Job", JobSchema)