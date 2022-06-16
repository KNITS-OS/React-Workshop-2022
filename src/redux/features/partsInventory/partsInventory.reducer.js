import { AppActionType } from "redux/app";

const initialState = {
  partsInventory: [],
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const partsInventoryReducer = (partsInventoryState = initialState, action) => {
  const { type, payload } = action;
  const { partsInventory } = partsInventoryState;

  let partsInventoryToKeep = [];

  switch (type) {
    case AppActionType.FETCH_PARTS_INVENTORY_LOADING:
    case AppActionType.DELETE_PARTS_INVENTORY_LOADING:
      return {
        isLoading: true,
        isSuccess: false,
        error: {},
        partsInventory,
      };

    case AppActionType.FETCH_PARTS_INVENTORY_ERROR:
    case AppActionType.DELETE_PARTS_INVENTORY_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        error: payload,
        partsInventory,
      };

    case AppActionType.FETCH_PARTS_INVENTORY_COMPLETE:
      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        partsInventory: payload,
      };

    case AppActionType.DELETE_PARTS_INVENTORY_COMPLETE:
      partsInventoryToKeep = partsInventoryState.partsInventory.filter(({ id }) => id !== payload);

      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        partsInventory: partsInventoryToKeep,
      };

    default:
      return partsInventoryState;
  }
};
