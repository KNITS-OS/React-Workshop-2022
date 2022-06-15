import {
  PURCHASE_ORDERS_PAGE,
  PurchaseOrdersPage,
  PURCHASE_ORDERS_DETAILS,
  PurchaseOrdersDetailsPage,
} from ".";

export const purchaseOrdersPage = [
  {
    collapse: false,
    name: "Purchase Orders",
    path: PURCHASE_ORDERS_PAGE,
    component: <PurchaseOrdersPage />,
    icon: "ni ni-money-coins text-info",
    layout: "/admin",
    key: "PurchaseOrders",
    sideBarGroup: 2,
  },
  {
    collapse: false,
    global: true,
    path: `${PURCHASE_ORDERS_DETAILS}/:id`,
    component: <PurchaseOrdersDetailsPage />,
    layout: "/admin",
    name: `${PURCHASE_ORDERS_DETAILS}/:id`,
    key: `PurchaseOrders/${PURCHASE_ORDERS_DETAILS}/:id`,
  },
];
