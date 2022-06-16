import { createSelector } from "reselect";

export const selectVendorsCustomersState = rootState => rootState.vendorsCustomers;

export const selectAllVendorsData = createSelector(
  [selectVendorsCustomersState],
  vendorsCustomersState => vendorsCustomersState.vendors
);

export const selectAllCustomersData = createSelector(
  [selectVendorsCustomersState],
  vendorsCustomersState => vendorsCustomersState.customers
);
