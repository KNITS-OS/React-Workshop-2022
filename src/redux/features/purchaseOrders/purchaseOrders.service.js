import { PURCHASE_ORDERS_ROUTE, httpCommon } from "../../app";

const getAllPurchaseOrders = () => httpCommon.get(`${PURCHASE_ORDERS_ROUTE}`);

const updatePurchaseOrders = updatedPurchaseOrders => {
  const { id, body } = updatedPurchaseOrders;

  return httpCommon.put(`${PURCHASE_ORDERS_ROUTE}/${id}`, body);
};

const createPurchaseOrder = newPurchaseOrder => {
  return httpCommon.post(`${PURCHASE_ORDERS_ROUTE}`, newPurchaseOrder);
};

const deletePurchaseOrders = id => httpCommon.delete(`${PURCHASE_ORDERS_ROUTE}/${id}`);

export const purchaseOrdersService = {
  getAllPurchaseOrders,
  updatePurchaseOrders,
  deletePurchaseOrders,
  createPurchaseOrder,
};
