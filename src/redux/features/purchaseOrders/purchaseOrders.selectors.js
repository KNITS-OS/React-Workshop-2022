import { createSelector } from "reselect";

import { SELECT_ALL } from "variables/app.consts";

export const selectPurchaseOrdersState = rootState => rootState.purchaseOrders;

export const selectAllPurchaseOrdersData = createSelector(
  [selectPurchaseOrdersState],
  purchaseOrdersState => purchaseOrdersState.purchaseOrders
);

export const selectPurchaseOrderById = id =>
  createSelector([selectAllPurchaseOrdersData], purchaseOrdersData =>
    purchaseOrdersData.find(purchaseOrder => purchaseOrder.id === id)
  );

export const selectAllPurchaseOrdersDataAsSelectOptions = createSelector(
  [selectAllPurchaseOrdersData],
  purchaseOrders => {
    const purchaseOrdersOptions = purchaseOrders.map(singlePurchaseOrder => {
      return {
        value: `${singlePurchaseOrder.id}`,
        label: `${singlePurchaseOrder.firstName} ${singlePurchaseOrder.lastName}`,
      };
    });
    return [SELECT_ALL, ...purchaseOrdersOptions];
  }
);
