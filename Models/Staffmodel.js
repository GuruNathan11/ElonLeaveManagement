
const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
  Dateofjoining: {
    type: Date,
  },
  Name: {
    required: false,
    type: String,
  },
  Age: {
    required: false,
    type: String,
  },
  Gender: {
    type: String,
  },
  DOB: {
    type: String,
  },
  Maritalstatus:{
    type:String,
  },
  Contact: {
    required: false,
    type: Number,
    length: 10,
  },

  email: {
    type: String,
    required: false,
    unique: true,
    sparse: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
   Role: {
    type: String,
    required: true,
  },
  Casualleaves: {
    type: Number,
    
  },
  Medicalleaves: {
    type: Number,
    
  },
  Menstrualleaves: {
    type: Number,
    required: true,
  },
  Maternityleaves:{type:Number},
  Sickleaves:{
    type:Number,
  },
  Marriageleaves:{
    type:Number,
  },
 
  usertype: {
    type: String,
    enum: ["Admin", "Staff", "HR", "ReportingManager"],
    default: "Staff",
    required: true,
  },
  ORGName: {
    type: String,
    required: true,
  },
  Role: {
    type: String,
    required: true,
  },

  resetToken: String,
  resetTokenExpiration: Date,
});

const Staffdetails = mongoose.model("Staffdetails", staffSchema);

module.exports = Staffdetails;
