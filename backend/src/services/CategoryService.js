const categoryRepository = require('../repositories/CategoryRepository');
const CategoryModel = require('../models/CategoryModel');

class CategoryService {
  getAll() {
    return categoryRepository.getAll();
  }

  create(name) {
    const validation = CategoryModel.validate({ name });
    if (validation.error) {
      throw new Error(validation.error.details[0].message);
    }
    return categoryRepository.create(name);
  }

  delete(id) {
    return categoryRepository.delete(id);
  }
}

module.exports = new CategoryService();