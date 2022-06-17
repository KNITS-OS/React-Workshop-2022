import { AppActionType } from "redux/app";

const initialState = {
  partsInventory: [],
  singlePartsInventory: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const partsInventoryReducer = (partsInventoryState = initialState, action) => {
  const { type, payload } = action;
  const { partsInventory, singlePartsInventory } = partsInventoryState;

  let updatedPartsInventory = [];
  let partsInventoryToKeep = [];

  switch (type) {
    case AppActionType.FETCH_PARTS_INVENTORY_LOADING:
    case AppActionType.UPDATE_PARTS_INVENTORY_LOADING:
    case AppActionType.DELETE_PARTS_INVENTORY_LOADING:
      return {
        isLoading: true,
        isSuccess: false,
        error: {},
        partsInventory,
        singlePartsInventory,
      };

    case AppActionType.FETCH_PARTS_INVENTORY_ERROR:
    case AppActionType.UPDATE_PARTS_INVENTORY_ERROR:
    case AppActionType.DELETE_PARTS_INVENTORY_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        error: payload,
        partsInventory,
        singlePartsInventory,
      };

    case AppActionType.FETCH_PARTS_INVENTORY_COMPLETE:
      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        partsInventory: payload,
        singlePartsInventory,
      };

    case AppActionType.UPDATE_PARTS_INVENTORY_COMPLETE:
      updatedPartsInventory = partsInventoryState.partsInventory.map(singlePartsInventory => {
        if (singlePartsInventory.id === payload.id) {
          return {
            ...singlePartsInventory,
            ...payload,
          };
        }

        return singlePartsInventory;
      });

      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        partsInventory: updatedPartsInventory,
        singlePartsInventory: payload,
      };

    case AppActionType.DELETE_PARTS_INVENTORY_COMPLETE:
      partsInventoryToKeep = partsInventoryState.partsInventory.filter(({ id }) => id !== payload);

      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        partsInventory: partsInventoryToKeep,
        singlePartsInventory,
      };

    default:
      return partsInventoryState;
  }
};
