const { MongoClient } = require('mongodb')
const mongoClient = new MongoClient('mongodb://localhost:27017')

const database = mongoClient.db('Human_Resource')
const EmployeeCollection = database.collection('employee')

mongoClient.connect().then(()=>{
    console.log("Database Connected")
})

module.exports={
    EmployeeCollection
}
