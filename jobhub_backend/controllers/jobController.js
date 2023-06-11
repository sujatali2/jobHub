const Job = require('../models/Job')
module.exports = {

    createJob: async (req, res) => {
        const newJob = new Job(req.body);

        try{
            const savedJob = await newJob.save();
            res.status(201).json(savedJob);
        }catch(error){
            res.status(500).json(error)
        }
    },


    updateJob : async(req, res) =>{
        try{
            const updatedJOb = await Job.findByIdAndUpdate(
                req.params.id, {
                    $set :
                        req.body                    
                }, {new: true}
                        
            )
            res.status(200).json(updatedJOb);

        }catch(error){
            res.status(403).json("You cannot update the job")
        }
    },

    deleteJob : async (req, res) =>{
        try{
            await Job.findOneAndDelete(
                req.params.id
            )
            res.status(200).json('JOb deleted successfully')
        }catch(error){
            res.status(403).json('Failed to delete the job')
        }
       
    },

    getJob : async (req, res) =>{
        try{
            const getSingleJob = await Job.findById(
                req.params.id
            );
            const {_v, createdAt, ...Job} = this.getSingleJob._doc;
            res.status(200).json(Job)
        }catch(error){
            res.status(403).json('Failed to get the Job')
        }
       
    },

    getAllJob : async (req, res) =>{
        try{
            const getAllJobs = await Job.find();
            res.status(200).json(getAllJobs)
        }catch(error){
            res.status(403).json('Failed to get the Job')
        }
       
    },

    searchJob : async (req, res) =>{
        try{
            const searchJobs = await Job.aggregate(
                [
                    {
                        $search: {
                          index: 'jobsearch',
                          text: {
                            query: req.params.key,
                            path: {
                                wildcard: "*"
                            }
                          }
                        }
                    }
                ]
            );
            res.status(200).json(searchJobs)
        }catch(error){
            res.status(403).json('Failed to search the Job')
        }
       
    }


}