import { AppActionType, typedAction } from "redux/app";

import { purchaseOrdersService } from ".";

const purchaseOrdersLoading = () =>
  typedAction(
    AppActionType.FETCH_PURCHASE_ORDERS_LOADING,
    AppActionType.FETCH_PURCHASE_ORDERS_LOADING
  );
const deletePurchaseOrdersLoading = () =>
  typedAction(
    AppActionType.DELETE_PURCHASE_ORDERS_LOADING,
    AppActionType.DELETE_PURCHASE_ORDERS_LOADING
  );
const updatePurchaseOrdersLoading = () =>
  typedAction(
    AppActionType.UPDATE_PURCHASE_ORDERS_LOADING,
    AppActionType.UPDATE_PURCHASE_ORDERS_LOADING
  );

const purchaseOrdersError = err => typedAction(AppActionType.FETCH_PURCHASE_ORDERS_ERROR, err);
const deletePurchaseOrdersError = err =>
  typedAction(AppActionType.DELETE_PURCHASE_ORDERS_ERROR, err);
const updatePurchaseOrdersError = err =>
  typedAction(AppActionType.UPDATE_PURCHASE_ORDERS_ERROR, err);

const purchaseOrdersComplete = data =>
  typedAction(AppActionType.FETCH_PURCHASE_ORDERS_COMPLETE, data);
const deletePurchaseOrdersComplete = data =>
  typedAction(AppActionType.DELETE_PURCHASE_ORDERS_COMPLETE, data);
const updatePurchaseOrdersComplete = data =>
  typedAction(AppActionType.UPDATE_PURCHASE_ORDERS_COMPLETE, data);

export const fetchPurchaseOrders = () => async dispatch => {
  try {
    dispatch(purchaseOrdersLoading());

    const { data } = await purchaseOrdersService.getAllPurchaseOrders();

    dispatch(purchaseOrdersComplete(data));
  } catch (err) {
    dispatch(purchaseOrdersError(err));
  }
};

export const updatePurchaseOrders = updatedPurchaseOrders => async dispatch => {
  try {
    dispatch(updatePurchaseOrdersLoading());

    const { data } = await purchaseOrdersService.updatePurchaseOrders(updatedPurchaseOrders);
    dispatch(updatePurchaseOrdersComplete(data));
  } catch (err) {
    dispatch(updatePurchaseOrdersError(err));
  }
};

export const deletePurchaseOrders = id => async dispatch => {
  try {
    dispatch(deletePurchaseOrdersLoading());

    await purchaseOrdersService.deletePurchaseOrders(id);
    dispatch(deletePurchaseOrdersComplete(id));
  } catch (err) {
    dispatch(deletePurchaseOrdersError(err));
  }
};
