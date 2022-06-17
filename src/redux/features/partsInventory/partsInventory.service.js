import { PARTS_INVENTORY_ROUTE, httpCommon } from "../../app";

const getAllPartsInventory = () => httpCommon.get(`${PARTS_INVENTORY_ROUTE}`);

const updatePartsInventory = updatedPartsInventory => {
  const { id, body } = updatedPartsInventory;

  return httpCommon.put(`${PARTS_INVENTORY_ROUTE}/${id}`, body);
};

const deletePartsInventory = id => httpCommon.delete(`${PARTS_INVENTORY_ROUTE}/${id}`);

export const partsInventoryService = {
  getAllPartsInventory,
  updatePartsInventory,
  deletePartsInventory,
};
