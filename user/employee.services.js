const Employee = require("./employee");

// List employees
const listEmployees = (req, res) => {
  Employee.find()
    .then((employees) => res.json(employees))
    .catch((error) =>
      res.status(500).json({ success: false, message: error.message })
    );
};

// Add employee
const addEmployee = (req, res) => {
  const { firstName, lastName, email, phoneNumber, gender } = req.body;

  // Check if the email already exists
  Employee.findOne({ email })
    .then((existingEmployee) => {
      if (existingEmployee) {
        return res.status(400).json({
          success: false,
          message: "An employee with the same email already exists",
        });
      }

      const newEmployee = new Employee({
        firstName,
        lastName,
        email,
        phoneNumber,
        gender,
      });

      newEmployee
        .save()
        .then((employee) =>
          res.status(201).json({ success: true, data: employee })
        )
        .catch((error) =>
          res.status(500).json({ success: false, message: error.message })
        );
    })
    .catch((error) =>
      res.status(500).json({ success: false, message: error.message })
    );
};

// Update employee
const updateEmployee = (req, res) => {
  const employeeId = req.params.empId;
  const { firstName, lastName, email, phoneNumber, gender } = req.body;

  Employee.findOneAndUpdate(
    { _id: employeeId },
    { firstName, lastName, email, phoneNumber, gender },
    { new: true }
  )
    .then((employee) => {
      if (!employee) {
        return res
          .status(404)
          .json({ success: false, message: "Employee not found" });
      }
      res.json({ success: true, data: employee });
    })
    .catch((error) =>
      res.status(500).json({ success: false, message: error.message })
    );
};

// Delete employee
const deleteEmployee = (req, res) => {
  const employeeId = req.params.empId;

  Employee.findOneAndDelete({ _id: employeeId })
    .then((employee) => {
      if (!employee) {
        return res
          .status(404)
          .json({ success: false, message: "Employee not found" });
      }
      res.json({ success: true, message: "Employee deleted successfully" });
    })
    .catch((error) =>
      res.status(500).json({ success: false, message: error.message })
    );
};

module.exports = {
  listEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
