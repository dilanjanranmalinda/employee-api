const express = require("express");
const router = express.Router();

const employee = require("./employee.services");

// List employees
router.get("/employee", employee.listEmployees);

// Add employee
router.post("/employee", employee.addEmployee);

// Update employee
router.put("/employee/:empId", employee.updateEmployee);

// Delete employee
router.delete("/employee/:empId", employee.deleteEmployee);

// 404 Not Found
router.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

module.exports = router;
