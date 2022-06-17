import { createSelector } from "reselect";

import { SELECT_ALL } from "variables/app.consts";

export const selectPartsInventoryState = rootState => rootState.partsInventory;

export const selectAllPartsInventoryData = createSelector(
  [selectPartsInventoryState],
  partsInventoryState => partsInventoryState.partsInventory
);

export const selectPartsInventoryById = id =>
  createSelector([selectAllPartsInventoryData], partsInventoryData =>
    partsInventoryData.find(partsInventory => partsInventory.id === id)
  );

export const selectAllPartsInventoryDataAsSelectOptions = createSelector(
  [selectAllPartsInventoryData],
  partsInventory => {
    const partsInventoryOptions = partsInventory.map(singlePartsInventory => {
      return {
        value: `${singlePartsInventory.id}`,
        label: `${singlePartsInventory.firstName} ${singlePartsInventory.lastName}`,
      };
    });
    return [SELECT_ALL, ...partsInventoryOptions];
  }
);
