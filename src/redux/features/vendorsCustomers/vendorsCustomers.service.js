import { VENDORS_ROUTE, CUSTOMERS_ROUTE, httpCommon } from "../../app";

const getAllVendors = () => httpCommon.get(`${VENDORS_ROUTE}`);

const getAllCustomers = () => httpCommon.get(`${CUSTOMERS_ROUTE}`);

const deleteVendor = id => httpCommon.delete(`${VENDORS_ROUTE}/${id}`);

const deleteCustomer = id => httpCommon.delete(`${CUSTOMERS_ROUTE}/${id}`);

export const vendorsCustomersService = {
  getAllVendors,
  getAllCustomers,
  deleteVendor,
  deleteCustomer,
};
