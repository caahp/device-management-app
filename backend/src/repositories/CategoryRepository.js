const db = require('../config/db');

class CategoryRepository {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM categories');
    return rows;
  }

  async create(name) {
    const [result] = await db.query('INSERT INTO categories (name) VALUES (?)', [name]);
    return { id: result.insertId, name };
  }

  async delete(id) {
    await db.query('DELETE FROM categories WHERE id = ?', [id]);
  }
}

module.exports = new CategoryRepository();