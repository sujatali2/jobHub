const User = require("../models/User");
const CryptoJS = require('crypto-js');
const { decrypt } = require("dotenv");

module.exports = {
    createUser: async (req, res) => {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET).toString()
        })

        try {
            const user = await newUser.save();
            res.status(201).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //login

    loginUser: async (req, res) => {
        try {
            console.log(req.body.email)
            const user = await User.findOne({ email: req.body.email });
            console.log(user)
            !user && res.status(401).json('Wrong login credentials');

            const decryptPass = CryptoJS.AES.decrypt(user.password, process.env.SECRET).toString(CryptoJS.enc.Utf8)
            decryptPass != user.password && res.status(401).json('Wrong Password');

            // exclude password , _v from response 
            const { password, _v, ...others} = user._doc;
            res.status(200).json(others);
        } catch (error) {
            res.status(404).json(error)
        }
    }


}