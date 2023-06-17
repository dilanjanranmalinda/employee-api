# Employee API

This is a RESTful API built with Express.js, MongoDB, and Mongoose for managing employees. It provides endpoints to perform CRUD operations on employee data.

## Prerequisites

- Node.js (v14 or above)
- MongoDB

## Installation

1. Clone the repository:
   git clone <repository-url>

2. Navigate to the project directory:
   cd employee-api

3. Install the dependencies:
   npm install or yarn

4. Set up the MongoDB connection:
   - Ensure that MongoDB is installed and running on your local machine or provide the appropriate connection URL.
   - Modify the MongoDB connection settings in the `index.js` file.

## Usage

1. Start the server:
   npm start or yarn start
2. The API will be available at: `http://localhost:3001`

## API Endpoints

- List Employees: [GET] /employee

  - Retrieves a list of all employees.

- Add Employee: [POST] /employee

  - Adds a new employee to the database.
  - Required fields: firstName, lastName, email, phoneNumber, gender.

- Update Employee: [PUT] /employee/:empId

  - Updates an existing employee based on the empId parameter.
  - Required fields: firstName, lastName, email, phoneNumber, gender.

- Delete Employee: [DELETE] /employee/:empId
  - Deletes an existing employee based on the empId parameter.

## Error Handling

- The API returns appropriate status codes and error messages in case of errors or invalid requests.

## Database

- The API uses MongoDB as the database and Mongoose as the ODM (Object Data Modeling) library.
- The database connection settings can be configured in the `index.js` file.
