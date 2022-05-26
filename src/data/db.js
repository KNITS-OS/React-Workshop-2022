const departmentsData = require("./departments");
const documentsData = require("./documents");
const employeesData = require("./employees");

module.exports = () => ({
  employee: employeesData,
  document: documentsData,
  department: departmentsData,
});
