const deviceRepository = require('../repositories/DeviceRepository');
const DeviceModel = require('../models/DeviceModel');

class DeviceService {
  getAll() {
    return deviceRepository.getAll();
  }

  create(categoryId, color, partNumber) {
    const validation = DeviceModel.validate({ categoryId, color, partNumber });
    if (validation.error) {
      throw new Error(validation.error.details[0].message);
    }
    return deviceRepository.create(categoryId, color, partNumber);
  }

  delete(id) {
    return deviceRepository.delete(id);
  }

  getTotalDevicesByCategory() {
    return deviceRepository.getTotalDevicesByCategory();
  }
}

module.exports = new DeviceService();
