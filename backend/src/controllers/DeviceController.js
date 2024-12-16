const deviceService = require('../services/DeviceService');

class DeviceController {
  async getAll(req, res) {
    try {
      const devices = await deviceService.getAll();
      res.json(devices);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const { categoryId, color, partNumber } = req.body;
      const device = await deviceService.create(categoryId, color, partNumber);
      res.status(201).json(device);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await deviceService.delete(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getTotalDevicesByCategory(req, res) {
    try{
      const devices = await deviceService.getTotalDevicesByCategory();
      res.json(devices);
    }catch(error){
      res.status(500).json({ error: error.message });
    }
  }

}

module.exports = new DeviceController();
