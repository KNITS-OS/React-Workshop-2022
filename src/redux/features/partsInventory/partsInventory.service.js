import { PARTS_INVENTORY_ROUTE, httpCommon } from "../../app";

const getAllPartsInventory = () => httpCommon.get(`${PARTS_INVENTORY_ROUTE}`);

export const partsInventoryService = {
  getAllPartsInventory,
};
