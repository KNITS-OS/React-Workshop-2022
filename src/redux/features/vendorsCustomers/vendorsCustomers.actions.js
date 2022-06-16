import { AppActionType, typedAction } from "redux/app";

import { vendorsCustomersService } from ".";

const vendorsCustomersLoading = () =>
  typedAction(
    AppActionType.FETCH_VENDORS_CUSTOMERS_LOADING,
    AppActionType.FETCH_VENDORS_CUSTOMERS_LOADING
  );

const vendorsCustomersComplete = data =>
  typedAction(AppActionType.FETCH_VENDORS_CUSTOMERS_COMPLETE, data);

const vendorsCustomersError = err => typedAction(AppActionType.FETCH_VENDORS_CUSTOMERS_ERROR, err);

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
