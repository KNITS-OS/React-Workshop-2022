import { PURCHASE_ORDERS_ROUTE, httpCommon } from "../../app";

const getAllPurchaseOrders = () => httpCommon.get(`${PURCHASE_ORDERS_ROUTE}`);

const deletePurchaseOrders = id => httpCommon.delete(`${PURCHASE_ORDERS_ROUTE}/${id}`);

export const purchaseOrdersService = {
  getAllPurchaseOrders,
  deletePurchaseOrders,
};
