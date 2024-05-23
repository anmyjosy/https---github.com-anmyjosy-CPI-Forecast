const mongoose=require('mongoose')
const EmploySchema=new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  role:String,
  purpose:String
})

const EmployeeModel=mongoose.model("employees",EmploySchema)
module.exports=EmployeeModel