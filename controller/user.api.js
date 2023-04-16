const User = require("../models/user");

exports.listuser = async (req, res, next) => {
     let users = await User.find();
     try {
        if (users) {
            res.status(200).json({
                data: users,
                msg: "list user"
                
            });
        }
     } catch (error) {
        res.status(204).json({
            data: error,
            msg: "i can't list user",
        });
        
     }
       
};
