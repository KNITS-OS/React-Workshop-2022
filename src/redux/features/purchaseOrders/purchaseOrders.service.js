import { PURCHASE_ORDERS_ROUTE, httpCommon } from "../../app";

const getAllPurchaseOrders = () => httpCommon.get(`${PURCHASE_ORDERS_ROUTE}`);

const updatePurchaseOrder = updatedPurchaseOrder => {
  const { id, body } = updatedPurchaseOrder;

  return httpCommon.put(`${PURCHASE_ORDERS_ROUTE}/${id}`, body);
};

const createPurchaseOrder = newPurchaseOrder => {
  return httpCommon.post(`${PURCHASE_ORDERS_ROUTE}`, newPurchaseOrder);
};

const deletePurchaseOrder = id => httpCommon.delete(`${PURCHASE_ORDERS_ROUTE}/${id}`);

export const purchaseOrdersService = {
  getAllPurchaseOrders,
  updatePurchaseOrder,
  deletePurchaseOrder,
  createPurchaseOrder,
};
