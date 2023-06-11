const { findOneAndDelete, findById } = require('../models/User');
const User = require('../models/User');


module.exports = {
    updateUser : async(req, res) =>{
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(user.password, process.env.SECRET).toString(CryptoJS.enc.Utf8)
        }
        try{
            const updatedUsers = await User.findByIdAndUpdate(
                req.params.id, {
                    $set :
                        req.body                    
                }, {new: true}
                        
            )
            const {password, _v, createdAt , ...others} = this.updatedUsers._doc;
            res.status(200).json(others);

        }catch(error){
            res.status(403).json("You cannot update the user")
        }
    },

    deleteUser : async (req, res) =>{
        try{
            const deletedUser = await findOneAndDelete(
                req.params.id
            )
            res.status(200).json('User deleted successfully')
        }catch(error){
            res.status(403).json('Failed to delete the user')
        }
       
    },

    getUser : async (req, res) =>{
        try{
            const getSingleUser = await findById(
                req.params.id
            );
            const {password, _v, createdAt, ...user} = this.getSingleUser._doc;
            res.status(200).json(user)
        }catch(error){
            res.status(403).json('Failed to get the user')
        }
       
    },

    getAllUser : async (req, res) =>{
        try{
            const getAllUsers = await find();
            res.status(200).json(getAllUsers)
        }catch(error){
            res.status(403).json('Failed to get the user')
        }
       
    }
}