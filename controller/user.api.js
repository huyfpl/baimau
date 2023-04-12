const User = require("../models/user");

exports.listuser = async (req, res, next) => {
     let users = await User.find();
     try {
        if (users) {
            res.status(200).json({
                data: users,
                msg: "danh sách user"
                
            });
        }
     } catch (error) {
        res.status(204).json({
            data: error,
            msg: "ko tìm thấy danh sách",
        });
        
     }
       
};
