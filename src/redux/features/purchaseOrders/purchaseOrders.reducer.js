import { AppActionType } from "redux/app";

const initialState = {
  purchaseOrders: [],
  singlePurchaseOrder: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const purchaseOrdersReducer = (purchaseOrdersState = initialState, action) => {
  const { type, payload } = action;
  const { purchaseOrders, singlePurchaseOrder } = purchaseOrdersState;

  let updatedPurchaseOrders = [];
  let purchaseOrdersToKeep = [];

  switch (type) {
    case AppActionType.FETCH_PURCHASE_ORDERS_LOADING:
    case AppActionType.UPDATE_PURCHASE_ORDERS_LOADING:
    case AppActionType.DELETE_PURCHASE_ORDERS_LOADING:
      return {
        isLoading: true,
        isSuccess: false,
        error: {},
        purchaseOrders,
        singlePurchaseOrder,
      };

    case AppActionType.FETCH_PURCHASE_ORDERS_ERROR:
    case AppActionType.UPDATE_PURCHASE_ORDERS_ERROR:
    case AppActionType.DELETE_PURCHASE_ORDERS_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        error: payload,
        purchaseOrders,
        singlePurchaseOrder,
      };

    case AppActionType.FETCH_PURCHASE_ORDERS_COMPLETE:
      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        purchaseOrders: payload,
        singlePurchaseOrder,
      };

    case AppActionType.UPDATE_PURCHASE_ORDERS_COMPLETE:
      updatedPurchaseOrders = purchaseOrdersState.purchaseOrders.map(singlePurchaseOrder => {
        if (singlePurchaseOrder.id === payload.id) {
          return {
            ...singlePurchaseOrder,
            ...payload,
          };
        }

        return singlePurchaseOrder;
      });

      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        purchaseOrders: updatedPurchaseOrders,
        singlePurchaseOrder: payload,
      };

    case AppActionType.DELETE_PURCHASE_ORDERS_COMPLETE:
      purchaseOrdersToKeep = purchaseOrdersState.purchaseOrders.filter(({ id }) => id !== payload);

      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        purchaseOrders: purchaseOrdersToKeep,
        singlePurchaseOrder,
      };

    default:
      return purchaseOrdersState;
  }
};
