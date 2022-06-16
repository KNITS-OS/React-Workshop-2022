const businessUnitsData = require("./business-units");
const countriesData = require("./countries");
const customersData = require("./customers");
const documentsData = require("./documents");
const employeesData = require("./employees");
const groupsData = require("./groups");
const partsInventoryData = require("./parts-inventory");
const purchaseOrdersData = require("./purchase-orders");
const reportData = require("./report-data");
const vendorsData = require("./vendors");

module.exports = () => ({
  employee: employeesData,
  document: documentsData,
  country: countriesData,
  "business-unit": businessUnitsData,
  group: groupsData,
  "report-members-turnover": reportData.memberTurnoverReport,
  "workforce-report": reportData.workforceReport,
  "gender-report": reportData.distributionByGenderReport,
  "business-unit-report": reportData.distributionByBusinessUnitReport,
  "role-report": reportData.distributionByRoleReport,
  "age-report": reportData.distributionByAgeReport,
  "seniority-report": reportData.distributionBySeniorityReport,
  "active-members-report": reportData.activeMembersMapData(),
  "auto-offboarded-members-report": reportData.autoOffboardedMembersMapData(),
  "new-members-report": reportData.newMembersMapData(),
  "self-resigned-members-report": reportData.selfResignedMembersMapData(),
  partsInventory: partsInventoryData,
  purchaseOrders: purchaseOrdersData,
  vendors: vendorsData,
  customers: customersData,
});
