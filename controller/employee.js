const {EmployeeCollection} = require('../db/config')
const {ObjectId} = require('mongodb')

const getEmployeeData = async(req, res)=>{
    const dbresponse = await EmployeeCollection.find().toArray()
    res.send(dbresponse)
}
const getEmployeeDataById =async(req,res)=>{
    
    const objId = new ObjectId(req.params.id);
    const dbresponse = await EmployeeCollection.findOne({_id: objId})
    res.send(dbresponse)
}

const insertEmployeeData = async(req, res)=>{
    const details = req.body
    const dbresponse = await EmployeeCollection.insertOne(details)
    res.send(dbresponse)
}

const updateEmployeeData = async(req, res)=>{

    const objId = new ObjectId(req.params.id)
    const data = req.body

    const dbresponse = await EmployeeCollection.updateOne({_id:objId},{$set: data})
    res.send(dbresponse)
}
const deleteEmployeeData = async(req,res) =>{

    const objId = new ObjectId(req.params.id)
    
    const dbresponse = await EmployeeCollection.deleteOne({_id: objId})
    res.send(dbresponse)
}


module.exports = {
    getEmployeeData, 
    getEmployeeDataById,
    insertEmployeeData, 
    updateEmployeeData, 
    deleteEmployeeData
}