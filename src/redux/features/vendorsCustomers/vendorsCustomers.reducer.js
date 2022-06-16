import { AppActionType } from "redux/app";

const initialState = {
  vendors: [],
  customers: [],
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const vendorsCustomersReducer = (vendorsCustomersState = initialState, action) => {
  const { type, payload } = action;
  const { vendors, customers } = vendorsCustomersState;

  let vendorsToKeep = [];
  let customersToKeep = [];

  switch (type) {
    case AppActionType.FETCH_VENDORS_CUSTOMERS_LOADING:
    case AppActionType.DELETE_VENDOR_LOADING:
    case AppActionType.DELETE_CUSTOMER_LOADING:
      return {
        isLoading: true,
        isSuccess: false,
        error: {},
        vendors,
        customers,
      };

    case AppActionType.FETCH_VENDORS_CUSTOMERS_ERROR:
    case AppActionType.DELETE_VENDOR_ERROR:
    case AppActionType.DELETE_CUSTOMER_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        error: payload,
        vendors,
        customers,
      };

    case AppActionType.FETCH_VENDORS_CUSTOMERS_COMPLETE:
      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        vendors: payload.vendorsData,
        customers: payload.customersData,
      };

    case AppActionType.DELETE_VENDOR_COMPLETE:
      vendorsToKeep = vendorsCustomersState.vendors.filter(({ id }) => id !== payload);

      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        vendors: vendorsToKeep,
        customers,
      };

    case AppActionType.DELETE_CUSTOMER_COMPLETE:
      customersToKeep = vendorsCustomersState.customers.filter(({ id }) => id !== payload);

      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        customers: customersToKeep,
        vendors,
      };

    default:
      return vendorsCustomersState;
  }
};
