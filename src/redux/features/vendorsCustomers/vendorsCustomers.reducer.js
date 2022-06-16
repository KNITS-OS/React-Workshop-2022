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

  switch (type) {
    case AppActionType.FETCH_VENDORS_CUSTOMERS_LOADING:
      return {
        isLoading: true,
        isSuccess: false,
        error: {},
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

    case AppActionType.FETCH_VENDORS_CUSTOMERS_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        error: payload,
        vendors,
        customers,
      };

    default:
      return vendorsCustomersState;
  }
};
