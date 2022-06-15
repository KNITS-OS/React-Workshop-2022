import { createSelector } from "reselect";

export const selectPurchaseOrdersState = rootState => rootState.purchaseOrders;

export const selectAllPurchaseOrdersData = createSelector(
  [selectPurchaseOrdersState],
  purchaseOrdersState => purchaseOrdersState.purchaseOrders
);
