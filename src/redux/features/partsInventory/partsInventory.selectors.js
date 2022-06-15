import { createSelector } from "reselect";

export const selectPartsInventoryState = rootState => rootState.partsInventory;

export const selectAllPartsInventoryData = createSelector(
  [selectPartsInventoryState],
  partsInventoryState => partsInventoryState.partsInventory
);
