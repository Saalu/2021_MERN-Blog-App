const Category = require("../models/Category");

const categoryCtrl = {
  getCategories: async (req, res) => {
    try {
      const cats = await Category.find();
      res.json(cats);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createCategory: async (req, res) => {
    const newCat = new Category(req.body);
    try {
      const savedCat = await newCat.save();
      res.json(savedCat);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deleteItem: async (req, res) => {
    try {
      // delete func takes 'req.params.id' only
      await Items.findByIdAndDelete(req.params.id);
      res.json({ msg: "Deleted an Item" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateItem: async (req, res) => {
    try {
      const { title, content, date } = req.body;
      // Update func takes 'req.params.id' , set of items to update
      await Items.findOneAndUpdate(
        { _id: req.params.id },
        {
          title,
          content,
          date,
        }
      );

      res.json({ msg: "Updated an Item" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getItem: async (req, res) => {
    try {
      const note = await Items.findById(req.params.id);

      res.json(note);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = categoryCtrl;
