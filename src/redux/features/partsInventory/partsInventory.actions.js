import { AppActionType, typedAction } from "redux/app";

import { partsInventoryService } from ".";

const partsInventoryLoading = () =>
  typedAction(
    AppActionType.FETCH_PARTS_INVENTORY_LOADING,
    AppActionType.FETCH_PARTS_INVENTORY_LOADING
  );

const partsInventoryComplete = data =>
  typedAction(AppActionType.FETCH_PARTS_INVENTORY_COMPLETE, data);

const partsInventoryError = err => typedAction(AppActionType.FETCH_PARTS_INVENTORY_ERROR, err);

export const fetchPartsInventory = () => async dispatch => {
  try {
    dispatch(partsInventoryLoading());

    const { data } = await partsInventoryService.getAllPartsInventory();

    dispatch(partsInventoryComplete(data));
  } catch (err) {
    dispatch(partsInventoryError(err));
  }
};
