const mongoose=require('mongoose');

const contactSchema=mongoose.Schema({
    name:{
        type:String,
        requried:[true,"please add the contact name"],

    },
    email:{
        type:String,
        required:[true,"please add the email"],
    },
    phone:{
        type:String,
        requried:[true,"please add the number"]
    },


    },{
        timestamps:true,
    })

module.exports=mongoose.model("Contact",contactSchema);