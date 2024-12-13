-- Create database
CREATE DATABASE IF NOT EXISTS device_management;
USE device_management;

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(128) NOT NULL
);

-- Create devices table
CREATE TABLE IF NOT EXISTS devices (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    color VARCHAR(16) NOT NULL,
    part_number INT UNSIGNED NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- Seed data

-- Insert categories
INSERT INTO categories (id, name) VALUES
    (1, 'Smartphones'),
    (2, 'Laptops'),
    (3, 'Tablets'),
    (4, 'Smartwatches'),
    (5, 'Headphones');

-- Insert devices
INSERT INTO devices (id, category_id, color, part_number) VALUES
    (1, 1, 'Black', 123456),
    (2, 2, 'Silver', 789012),
    (3, 3, 'Gold', 345678),
    (4, 4, 'White', 901234),
    (5, 5, 'Blue', 567890);

