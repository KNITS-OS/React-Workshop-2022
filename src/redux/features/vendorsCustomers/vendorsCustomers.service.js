import { VENDORS_ROUTE, CUSTOMERS_ROUTE, httpCommon } from "../../app";

const getAllVendors = () => httpCommon.get(`${VENDORS_ROUTE}`);

const getAllCustomers = () => httpCommon.get(`${CUSTOMERS_ROUTE}`);

export const vendorsCustomersService = {
  getAllVendors,
  getAllCustomers,
};
