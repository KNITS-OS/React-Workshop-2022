import { createSelector } from "reselect";

import { SELECT_ALL } from "variables/app.consts";

export const selectVendorsCustomersState = rootState => rootState.vendorsCustomers;

export const selectAllVendorsData = createSelector(
  [selectVendorsCustomersState],
  vendorsCustomersState => vendorsCustomersState.vendors
);

export const selectAllCustomersData = createSelector(
  [selectVendorsCustomersState],
  vendorsCustomersState => vendorsCustomersState.customers
);

export const selectVendorById = id =>
  createSelector([selectAllVendorsData], vendorsData =>
    vendorsData.find(vendors => vendors.id === id)
  );

export const selectCustomerById = id =>
  createSelector([selectAllCustomersData], customersData =>
    customersData.find(customers => customers.id === id)
  );

export const selectAllVendorsDataAsSelectOptions = createSelector(
  [selectAllVendorsData],
  vendors => {
    const vendorsOptions = vendors.map(vendor => {
      return {
        value: `${vendor.id}`,
        label: `${vendor.firstName} ${vendor.lastName}`,
      };
    });
    return [SELECT_ALL, ...vendorsOptions];
  }
);

export const selectAllCustomersDataAsSelectOptions = createSelector(
  [selectAllCustomersData],
  customers => {
    const customersOptions = customers.map(customer => {
      return {
        value: `${customer.id}`,
        label: `${customer.firstName} ${customer.lastName}`,
      };
    });
    return [SELECT_ALL, ...customersOptions];
  }
);
