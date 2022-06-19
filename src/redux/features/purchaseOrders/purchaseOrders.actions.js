import { AppActionType, typedAction } from "redux/app";

import { purchaseOrdersService } from ".";

const purchaseOrdersLoading = () =>
  typedAction(
    AppActionType.FETCH_PURCHASE_ORDERS_LOADING,
    AppActionType.FETCH_PURCHASE_ORDERS_LOADING
  );
const deletePurchaseOrderLoading = () =>
  typedAction(
    AppActionType.DELETE_PURCHASE_ORDER_LOADING,
    AppActionType.DELETE_PURCHASE_ORDER_LOADING
  );
const updatePurchaseOrderLoading = () =>
  typedAction(
    AppActionType.UPDATE_PURCHASE_ORDER_LOADING,
    AppActionType.UPDATE_PURCHASE_ORDER_LOADING
  );
const createPurchaseOrderLoading = () =>
  typedAction(
    AppActionType.CREATE_PURCHASE_ORDER_LOADING,
    AppActionType.CREATE_PURCHASE_ORDER_LOADING
  );

const purchaseOrdersError = err => typedAction(AppActionType.FETCH_PURCHASE_ORDERS_ERROR, err);
const deletePurchaseOrderError = err => typedAction(AppActionType.DELETE_PURCHASE_ORDER_ERROR, err);
const updatePurchaseOrderError = err => typedAction(AppActionType.UPDATE_PURCHASE_ORDER_ERROR, err);
const createPurchaseOrderError = err => typedAction(AppActionType.CREATE_PURCHASE_ORDER_ERROR, err);

const purchaseOrdersComplete = data =>
  typedAction(AppActionType.FETCH_PURCHASE_ORDERS_COMPLETE, data);
const deletePurchaseOrderComplete = data =>
  typedAction(AppActionType.DELETE_PURCHASE_ORDER_COMPLETE, data);
const updatePurchaseOrderComplete = data =>
  typedAction(AppActionType.UPDATE_PURCHASE_ORDER_COMPLETE, data);
const createPurchaseOrderComplete = data =>
  typedAction(AppActionType.CREATE_PURCHASE_ORDER_COMPLETE, data);

export const fetchPurchaseOrders = () => async dispatch => {
  try {
    dispatch(purchaseOrdersLoading());

    const { data } = await purchaseOrdersService.getAllPurchaseOrders();

    dispatch(purchaseOrdersComplete(data));
  } catch (err) {
    dispatch(purchaseOrdersError(err));
  }
};

export const updatePurchaseOrder = updatedPurchaseOrder => async dispatch => {
  try {
    dispatch(updatePurchaseOrderLoading());

    const { data } = await purchaseOrdersService.updatePurchaseOrder(updatedPurchaseOrder);
    dispatch(updatePurchaseOrderComplete(data));
  } catch (err) {
    dispatch(updatePurchaseOrderError(err));
  }
};

export const deletePurchaseOrder = id => async dispatch => {
  try {
    dispatch(deletePurchaseOrderLoading());

    await purchaseOrdersService.deletePurchaseOrder(id);
    dispatch(deletePurchaseOrderComplete(id));
  } catch (err) {
    dispatch(deletePurchaseOrderError(err));
  }
};

export const createPurchaseOrder = newPurchaseOrder => async dispatch => {
  try {
    dispatch(createPurchaseOrderLoading());

    await purchaseOrdersService.createPurchaseOrder(newPurchaseOrder);
    dispatch(createPurchaseOrderComplete(newPurchaseOrder));
  } catch (err) {
    dispatch(createPurchaseOrderError(err));
  }
};
