import { AppActionType } from "redux/app";

const initialState = {
  vendors: [],
  vendor: null,
  customers: [],
  customer: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const vendorsCustomersReducer = (vendorsCustomersState = initialState, action) => {
  const { type, payload } = action;
  const { vendors, vendor, customers, customer } = vendorsCustomersState;

  let updatedVendors = [];
  let updatedCustomers = [];
  let vendorsToKeep = [];
  let customersToKeep = [];

  switch (type) {
    case AppActionType.FETCH_VENDORS_CUSTOMERS_LOADING:
    case AppActionType.DELETE_VENDOR_LOADING:
    case AppActionType.DELETE_CUSTOMER_LOADING:
    case AppActionType.UPDATE_VENDOR_LOADING:
    case AppActionType.UPDATE_CUSTOMER_LOADING:
      return {
        isLoading: true,
        isSuccess: false,
        error: {},
        vendors,
        vendor,
        customers,
        customer,
      };

    case AppActionType.FETCH_VENDORS_CUSTOMERS_ERROR:
    case AppActionType.DELETE_VENDOR_ERROR:
    case AppActionType.DELETE_CUSTOMER_ERROR:
    case AppActionType.UPDATE_VENDOR_ERROR:
    case AppActionType.UPDATE_CUSTOMER_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        error: payload,
        vendors,
        vendor,
        customers,
        customer,
      };

    case AppActionType.FETCH_VENDORS_CUSTOMERS_COMPLETE:
      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        vendors: payload.vendorsData,
        vendor,
        customers: payload.customersData,
        customer,
      };

    case AppActionType.UPDATE_VENDOR_COMPLETE:
      updatedVendors = vendorsCustomersState.vendors.map(vendor => {
        if (vendor.id === payload.id) {
          return {
            ...vendor,
            ...payload,
          };
        }

        return vendor;
      });

      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        vendors: updatedVendors,
        vendor: payload,
        customers,
        customer,
      };

    case AppActionType.UPDATE_CUSTOMER_COMPLETE:
      updatedCustomers = vendorsCustomersState.customers.map(customer => {
        if (customer.id === payload.id) {
          return {
            ...customer,
            ...payload,
          };
        }

        return customer;
      });

      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        customers: updatedCustomers,
        customer: payload,
        vendors,
        vendor,
      };

    case AppActionType.DELETE_VENDOR_COMPLETE:
      vendorsToKeep = vendorsCustomersState.vendors.filter(({ id }) => id !== payload);

      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        vendors: vendorsToKeep,
        vendor,
        customers,
        customer,
      };

    case AppActionType.DELETE_CUSTOMER_COMPLETE:
      customersToKeep = vendorsCustomersState.customers.filter(({ id }) => id !== payload);

      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        vendors,
        vendor,
        customers: customersToKeep,
        customer,
      };

    default:
      return vendorsCustomersState;
  }
};
