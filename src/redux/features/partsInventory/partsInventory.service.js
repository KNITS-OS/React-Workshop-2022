import { PARTS_INVENTORY_ROUTE, httpCommon } from "../../app";

const getAllPartsInventory = () => httpCommon.get(`${PARTS_INVENTORY_ROUTE}`);

const deletePartsInventory = id => httpCommon.delete(`${PARTS_INVENTORY_ROUTE}/${id}`);

export const partsInventoryService = {
  getAllPartsInventory,
  deletePartsInventory,
};
