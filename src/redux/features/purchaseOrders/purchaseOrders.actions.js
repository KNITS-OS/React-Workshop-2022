import { AppActionType, typedAction } from "redux/app";

import { purchaseOrdersService } from ".";

const purchaseOrdersLoading = () =>
  typedAction(
    AppActionType.FETCH_PURCHASE_ORDERS_LOADING,
    AppActionType.FETCH_PURCHASE_ORDERS_LOADING
  );

const purchaseOrdersComplete = data =>
  typedAction(AppActionType.FETCH_PURCHASE_ORDERS_COMPLETE, data);

const purchaseOrdersError = err => typedAction(AppActionType.FETCH_PURCHASE_ORDERS_ERROR, err);

export const fetchPurchaseOrders = () => async dispatch => {
  try {
    dispatch(purchaseOrdersLoading());

    const { data } = await purchaseOrdersService.getAllPurchaseOrders();

    dispatch(purchaseOrdersComplete(data));
  } catch (err) {
    dispatch(purchaseOrdersError(err));
  }
};
