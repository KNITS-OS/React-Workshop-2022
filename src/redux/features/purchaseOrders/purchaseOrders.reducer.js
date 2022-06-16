import { AppActionType } from "redux/app";

const initialState = {
  purchaseOrders: [],
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const purchaseOrdersReducer = (purchaseOrdersState = initialState, action) => {
  const { type, payload } = action;
  const { purchaseOrders } = purchaseOrdersState;

  let purchaseOrdersToKeep = [];

  switch (type) {
    case AppActionType.FETCH_PURCHASE_ORDERS_LOADING:
    case AppActionType.DELETE_PURCHASE_ORDERS_LOADING:
      return {
        isLoading: true,
        isSuccess: false,
        error: {},
        purchaseOrders,
      };

    case AppActionType.FETCH_PURCHASE_ORDERS_ERROR:
    case AppActionType.DELETE_PURCHASE_ORDERS_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        error: payload,
        purchaseOrders,
      };

    case AppActionType.FETCH_PURCHASE_ORDERS_COMPLETE:
      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        purchaseOrders: payload,
      };

    case AppActionType.DELETE_PURCHASE_ORDERS_COMPLETE:
      purchaseOrdersToKeep = purchaseOrdersState.purchaseOrders.filter(({ id }) => id !== payload);

      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        purchaseOrders: purchaseOrdersToKeep,
      };

    default:
      return purchaseOrdersState;
  }
};
