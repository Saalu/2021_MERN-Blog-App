// const Items = require('../models/itemModel')

// const itemCtrl = {
//     getItems: async (req,res) => {
//         try {
//             const notes = await Items.find({user_id: req.user.id})

//             res.json(notes)

//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
//     createItem: async (req,res) => {
//         try {
//             const {title, content, date} = req.body

//             const newItem = new Items({
//                 title,
//                 content,
//                 date,
//                 user_id:req.user.id,
//                 name: req.user.name
//             })

//             await newItem.save()

//             res.json({msg: 'Created an Item'})

//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
//     deleteItem: async (req,res) => {
//         try {

//             // delete func takes 'req.params.id' only
//             await Items.findByIdAndDelete(req.params.id)
//             res.json({msg: 'Deleted an Item'})

//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
//     updateItem: async (req,res) => {
//         try {
//             const {title, content, date} = req.body
//             // Update func takes 'req.params.id' , set of items to update
//             await Items.findOneAndUpdate({_id: req.params.id}, {
//                 title,
//                 content,
//                 date
//             })

//             res.json({msg: 'Updated an Item'})

//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },
//     getItem: async (req,res) => {
//         try {
//             const note = await Items.findById( req.params.id)

//             res.json(note)

//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     },

// }

// module.exports = itemCtrl
