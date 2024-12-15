# Device Management App

The **Device Management App** is a web application designed to manage devices and categories efficiently. This app allows users to create, read, and delete devices and categories with proper validation. Built with Angular 16 on the frontend and Node.js on the backend, the application integrates with a MySQL database to store and retrieve data. The app is intuitive and user-friendly, ensuring smooth device and category management.

## Features

- **Create, Read, and Delete** devices and categories.
- Device fields: 
  - **Id**: Automatically generated (integer and incremental).
  - **Category**: Dropdown to select from existing categories.
  - **Color**: Text field (letters only, max size 16).
  - **Part Number**: Positive integer, validated.
- Category fields:
  - **Id**: Automatically generated (integer and incremental).
  - **Name**: Required, max size 128 characters.
  
## Technology Stack

- **Frontend**: ![Angular](https://img.shields.io/badge/Angular-13C7D2?style=for-the-badge&logo=angular&logoColor=white)
- **Backend**: ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
- **Database**: ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

## Architecture

The backend follows the **View-Controller-Service-Repository** (VCSR) pattern:

- **View**: Handles HTTP requests/responses.
- **Controller**: Manages application logic.
- **Service**: Contains business logic.
- **Repository**: Handles data access and interaction with the database.

## Running the Project

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend/device_management
2. Run the Angular app:
   ```bash
   ng serve
### Backend
1. Install dependencies:
   ```bash
   npm install
2. Navigate to the backend directory and start the server:
   ```bash
   cd backend/src
   node app.js

## API Endpoints

### Devices

1. **POST /devices**
   - Create a new device.
   - Request body:
   ```json
   {
     "categoryId": 4,
     "color": "Black",
     "partNumber": 12478
   }

2. **GET /devices**
   - Retrieve all devices.
   - Example response:
   ```json
   [
     {
       "id": 1,
       "category_id": 1,
       "category_name": "Smartphones",
       "color": "Black",
       "part_number": 12345
     },
     {
       "id": 2,
       "category_id": 2,
       "category_name": "Laptops",
       "color": "Silver",
       "part_number": 54321
     }
   ]

3. **DELETE /devices/{id}**
   - Delete a device by its ID.

### Categories

1. **POST /categories**
   - Create a new category.
   - Request body:
   ```json
   {
     "name": "Computers"
   }


2. **GET /categories**
   - Retrieve all categories.
   - Example response:
   ```json
   [
     {
       "id": 1,
       "name": "Smartphones"
     },
     {
       "id": 2,
       "name": "Laptops"
     }
   ]

3. **DELETE /categories/{id}**
   - Delete a category by its ID.


