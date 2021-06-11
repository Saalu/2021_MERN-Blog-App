// const Employees = require('../models/employeeModel')

// const empCtrl = {
//     getEmps: async (req,res) => {

//         try {
//             const emps = await Employees.find()
//             res.json(emps)
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
//     createEmps: async (req,res) => {

//         const {fullname, position, salary} = req.body

//         const newEmp = new Employees({
//             fullname,
//             position,
//             salary
//         })

//         await newEmp.save()
//         res.json({msg: 'Created Employee'})

//     },
//     getEmp: async (req,res) => {

//         try {
//             const emp = await Employees.findById(req.params.id)
//             res.json(emp)
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },

//     updateEmp: async (req,res) => {

//         try {
//              const {fullname, position, salary} = req.body

//              await Employees.findByIdAndUpdate(req.params.id, {
//                 fullname,
//                 position,
//                 salary
//              })

//             res.json({msg: 'Updated Successfully'})

//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },

//     deleteEmp: async (req,res) => {

//         try {
//              await Employees.findByIdAndDelete(req.params.id)
//             res.json({msg: 'Deleted Successfully'})
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
// }

// module.exports = empCtrl
