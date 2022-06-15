import { PURCHASE_ORDERS_ROUTE, httpCommon } from "../../app";

const getAllPurchaseOrders = () => httpCommon.get(`${PURCHASE_ORDERS_ROUTE}`);

export const purchaseOrdersService = {
  getAllPurchaseOrders,
};
