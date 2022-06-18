import { AppActionType, typedAction } from "redux/app";

import { partsInventoryService } from ".";

const partsInventoryLoading = () =>
  typedAction(
    AppActionType.FETCH_PARTS_INVENTORY_LOADING,
    AppActionType.FETCH_PARTS_INVENTORY_LOADING
  );
const deletePartsInventoryLoading = () =>
  typedAction(
    AppActionType.DELETE_PARTS_INVENTORY_LOADING,
    AppActionType.DELETE_PARTS_INVENTORY_LOADING
  );
const updatePartsInventoryLoading = () =>
  typedAction(
    AppActionType.UPDATE_PARTS_INVENTORY_LOADING,
    AppActionType.UPDATE_PARTS_INVENTORY_LOADING
  );
const createPartsInventoryLoading = () =>
  typedAction(
    AppActionType.CREATE_PARTS_INVENTORY_LOADING,
    AppActionType.CREATE_PARTS_INVENTORY_LOADING
  );

const partsInventoryError = err => typedAction(AppActionType.FETCH_PARTS_INVENTORY_ERROR, err);
const deletePartsInventoryError = err =>
  typedAction(AppActionType.DELETE_PARTS_INVENTORY_ERROR, err);
const updatePartsInventoryError = err =>
  typedAction(AppActionType.UPDATE_PARTS_INVENTORY_ERROR, err);
const createPartsInventoryError = err =>
  typedAction(AppActionType.CREATE_PARTS_INVENTORY_ERROR, err);

const partsInventoryComplete = data =>
  typedAction(AppActionType.FETCH_PARTS_INVENTORY_COMPLETE, data);
const deletePartsInventoryComplete = data =>
  typedAction(AppActionType.DELETE_PARTS_INVENTORY_COMPLETE, data);
const updatePartsInventoryComplete = data =>
  typedAction(AppActionType.UPDATE_PARTS_INVENTORY_COMPLETE, data);
const createPartsInventoryComplete = data =>
  typedAction(AppActionType.CREATE_PARTS_INVENTORY_COMPLETE, data);

export const fetchPartsInventory = () => async dispatch => {
  try {
    dispatch(partsInventoryLoading());

    const { data } = await partsInventoryService.getAllPartsInventory();

    dispatch(partsInventoryComplete(data));
  } catch (err) {
    dispatch(partsInventoryError(err));
  }
};

export const updatePartsInventory = updatedPartsInventory => async dispatch => {
  try {
    dispatch(updatePartsInventoryLoading());

    const { data } = await partsInventoryService.updatePartsInventory(updatedPartsInventory);
    dispatch(updatePartsInventoryComplete(data));
  } catch (err) {
    dispatch(updatePartsInventoryError(err));
  }
};

export const deletePartsInventory = id => async dispatch => {
  try {
    dispatch(deletePartsInventoryLoading());

    await partsInventoryService.deletePartsInventory(id);
    dispatch(deletePartsInventoryComplete(id));
  } catch (err) {
    dispatch(deletePartsInventoryError(err));
  }
};

export const createPartsInventory = newPartsInventory => async dispatch => {
  try {
    dispatch(createPartsInventoryLoading());

    await partsInventoryService.createPartsInventory(newPartsInventory);
    dispatch(createPartsInventoryComplete(newPartsInventory));
  } catch (err) {
    dispatch(createPartsInventoryError(err));
  }
};
