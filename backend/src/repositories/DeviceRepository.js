const db = require('../config/db');

class DeviceRepository {
  async getAll() {
    const [rows] = await db.query(`
      SELECT 
        devices.id,
        devices.category_id,
        categories.name AS category_name,
        devices.color,
        devices.part_number
      FROM devices
      JOIN categories ON devices.category_id = categories.id
      ORDER BY devices.id ASC
    `);
    return rows;
  }

  async create(categoryId, color, partNumber) {
    const [result] = await db.query(
      'INSERT INTO devices (category_id, color, part_number) VALUES (?, ?, ?)',
      [categoryId, color, partNumber]
    );
    return { id: result.insertId, categoryId, color, partNumber };
  }

  async delete(id) {
    await db.query('DELETE FROM devices WHERE id = ?', [id]);
  }
}

module.exports = new DeviceRepository();