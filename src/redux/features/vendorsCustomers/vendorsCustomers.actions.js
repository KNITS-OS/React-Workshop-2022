import { AppActionType, typedAction } from "redux/app";

import { vendorsCustomersService } from ".";

const vendorsCustomersLoading = () =>
  typedAction(
    AppActionType.FETCH_VENDORS_CUSTOMERS_LOADING,
    AppActionType.FETCH_VENDORS_CUSTOMERS_LOADING
  );
const deleteVendorLoading = () =>
  typedAction(AppActionType.DELETE_VENDOR_LOADING, AppActionType.DELETE_VENDOR_LOADING);
const deleteCustomerLoading = () =>
  typedAction(AppActionType.DELETE_CUSTOMER_LOADING, AppActionType.DELETE_CUSTOMER_LOADING);

const vendorsCustomersError = err => typedAction(AppActionType.FETCH_VENDORS_CUSTOMERS_ERROR, err);
const deleteVendorError = err => typedAction(AppActionType.DELETE_VENDOR_ERROR, err);
const deleteCustomerError = err => typedAction(AppActionType.DELETE_CUSTOMER_ERROR, err);

const vendorsCustomersComplete = data =>
  typedAction(AppActionType.FETCH_VENDORS_CUSTOMERS_COMPLETE, data);
const deleteVendorComplete = data => typedAction(AppActionType.DELETE_VENDOR_COMPLETE, data);
const deleteCustomerComplete = data => typedAction(AppActionType.DELETE_CUSTOMER_COMPLETE, data);

export const fetchVendorsCustomers = () => async dispatch => {
  try {
    dispatch(vendorsCustomersLoading());

    const { data: vendorsData } = await vendorsCustomersService.getAllVendors();
    const { data: customersData } = await vendorsCustomersService.getAllCustomers();

    dispatch(vendorsCustomersComplete({ vendorsData, customersData }));
  } catch (err) {
    dispatch(vendorsCustomersError(err));
  }
};

export const deleteVendor = id => async dispatch => {
  try {
    dispatch(deleteVendorLoading());

    await vendorsCustomersService.deleteVendor(id);
    dispatch(deleteVendorComplete(id));
  } catch (err) {
    dispatch(deleteVendorError(err));
  }
};

export const deleteCustomer = id => async dispatch => {
  try {
    dispatch(deleteCustomerLoading());

    await vendorsCustomersService.deleteCustomer(id);
    dispatch(deleteCustomerComplete(id));
  } catch (err) {
    dispatch(deleteCustomerError(err));
  }
};
