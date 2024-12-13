const categoryService = require('../services/CategoryService');

class CategoryController {
  async getAll(req, res) {
    try {
      const categories = await categoryService.getAll();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const { name } = req.body;
      const category = await categoryService.create(name);
      res.status(201).json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await categoryService.delete(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new CategoryController();