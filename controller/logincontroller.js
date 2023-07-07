const register = require("../model/RegisterModel")
var jwt = require('jsonwebtoken');

const user_register = async (req,res) => {
    var data = await register.find({"email":req.body.email});

    if(data.length == 0)
    {
        var data = await register.create(req.body);

        res.status(200).json({
            status:"Success",
            data
        })
    }else
    {
        res.status(200).json({
            status:"your email address is already register",
        })
    }
}

const user_login = async (req,res) => {

  
    var data = await register.find({"email":req.body.email});
    var token = jwt.sign({ id:data[0].id}, 'cdmi');
    if(data.length == 1)
    {
        if(data[0].password == req.body.password)
        {
            res.status(200).json({
                status:"Success",
                token
            })
        }else{
            res.status(200).json({
                status:"Check Password",
            })
        }
    }else if(data.length == 0)
    {
        res.status(200).json({
            status:"Check your email ",
        })
    }else if(data.length != 0)
    {
        res.status(200).json({
            status:"Find Multiple Account",
            data
        })
    }
}


const user_delete = async (req,res)=>{

    var id = req.params.id;

var data = await register.findByIdAndDelete(id);

res.status(200).json({
    status:"Success",
    data
})
}
const user_update = async (req,res)=>{
    var id = req.params.id;

    await register.findByIdAndUpdate(id,req.body);

    var data = await register.findById(id);

res.status(200).json({
    status:"Success",
    data
})
}

// Pgination
const get_user = async (req,res)=>{
    var page_no = req.params.page_no;

    var start = (page_no-1)*3;

    var data = await register.find().skip(start).limit(3);

    res.status(200).json({
        status:"success",
        data,
        start,
        page_no
    })
}
module.exports ={https://dummyjson.com/products
    user_register,
    user_login,
    user_delete,
    user_update,
    get_user
}