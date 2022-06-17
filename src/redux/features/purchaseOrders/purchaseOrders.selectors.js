import { createSelector } from "reselect";

import { SELECT_ALL } from "variables/app.consts";

export const selectPurchaseOrdersState = rootState => rootState.purchaseOrders;

export const selectAllPurchaseOrdersData = createSelector(
  [selectPurchaseOrdersState],
  purchaseOrdersState => purchaseOrdersState.purchaseOrders
);

export const selectPurchaseOrdersById = id =>
  createSelector([selectAllPurchaseOrdersData], purchaseOrdersData =>
    purchaseOrdersData.find(purchaseOrders => purchaseOrders.id === id)
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
