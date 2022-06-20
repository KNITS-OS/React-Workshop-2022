import {
  PARTS_INVENTORY_PAGE,
  PartsInventoryPage,
  PARTS_INVENTORY_DETAILS,
  PartsInventoryDetailsPage,
} from ".";

export const partsInventoryPage = [
  {
    collapse: false,
    name: "Parts/Inventory",
    path: PARTS_INVENTORY_PAGE,
    component: <PartsInventoryPage />,
    icon: "ni ni-key-25 text-info",
    layout: "/admin",
    key: "PartsInventory",
    sideBarGroup: 2,
  },
  {
    collapse: false,
    global: true,
    path: `${PARTS_INVENTORY_DETAILS}/:id`,
    component: <PartsInventoryDetailsPage />,
    layout: "/admin",
    name: `${PARTS_INVENTORY_DETAILS}/:id`,
    key: `PartsInventory/${PARTS_INVENTORY_DETAILS}/:id`,
  },
];
