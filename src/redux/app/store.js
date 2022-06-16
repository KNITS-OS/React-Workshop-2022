import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

import {
  businessUnitReducer,
  countryReducer,
  documentReducer,
  employeeReducer,
  groupReducer,
  worldOverviewReducer,
  partsInventoryReducer,
  purchaseOrdersReducer,
  vendorsCustomersReducer,
} from "redux/features";

const middleware = [thunk];

const rootReducer = combineReducers({
  employee: employeeReducer,
  document: documentReducer,
  group: groupReducer,
  worldOverview: worldOverviewReducer,
  businessUnit: businessUnitReducer,
  country: countryReducer,
  partsInventory: partsInventoryReducer,
  purchaseOrders: purchaseOrdersReducer,
  vendorsCustomers: vendorsCustomersReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware, logger))
);
