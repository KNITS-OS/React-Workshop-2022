import { VENDORS_ROUTE, CUSTOMERS_ROUTE, httpCommon } from "../../app";

const getAllVendors = () => httpCommon.get(`${VENDORS_ROUTE}`);

const getAllCustomers = () => httpCommon.get(`${CUSTOMERS_ROUTE}`);

const updateVendor = updatedVendors => {
  const { id, body } = updatedVendors;

  return httpCommon.put(`${VENDORS_ROUTE}/${id}`, body);
};

const updateCustomer = updatedCustomers => {
  const { id, body } = updatedCustomers;

  return httpCommon.put(`${CUSTOMERS_ROUTE}/${id}`, body);
};

const createVendor = newVendor => {
  return httpCommon.post(`${VENDORS_ROUTE}`, newVendor);
};

const createCustomer = newCustomer => {
  return httpCommon.post(`${CUSTOMERS_ROUTE}`, newCustomer);
};

const deleteVendor = id => httpCommon.delete(`${VENDORS_ROUTE}/${id}`);

const deleteCustomer = id => httpCommon.delete(`${CUSTOMERS_ROUTE}/${id}`);

export const vendorsCustomersService = {
  getAllVendors,
  getAllCustomers,
  updateVendor,
  updateCustomer,
  deleteVendor,
  deleteCustomer,
  createVendor,
  createCustomer,
};
