const route = require('express').Router()
const {getEmployeeData, getEmployeeDataById, insertEmployeeData, updateEmployeeData, deleteEmployeeData} = require('../controller/employee')

route.get('/employeedata',getEmployeeData)
route.get('/employeedata/:id',getEmployeeDataById)
route.post('/employeedata',insertEmployeeData)
route.put('/employeedata/:id',updateEmployeeData)
route.delete('/employeedata/:id',deleteEmployeeData)


module.exports = route