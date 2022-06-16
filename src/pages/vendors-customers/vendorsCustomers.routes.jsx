import {
  VENDORS_CUSTOMERS_PAGE,
  VendorsCustomersPage,
  VENDORS_DETAILS,
  VendorsDetailsPage,
  CUSTOMERS_DETAILS,
  CustomersDetailsPage,
} from ".";

export const vendorsCustomersPage = [
  {
    collapse: false,
    name: "Vendors & Customers",
    path: VENDORS_CUSTOMERS_PAGE,
    component: <VendorsCustomersPage />,
    icon: "ni ni-circle-08 text-info",
    layout: "/admin",
    key: "VendorsCustomers",
    sideBarGroup: 3,
  },
  {
    collapse: false,
    global: true,
    path: `${VENDORS_DETAILS}/:id`,
    component: <VendorsDetailsPage />,
    layout: "/admin",
    name: `${VENDORS_DETAILS}/:id`,
    key: `VendorsCustomers/${VENDORS_DETAILS}/:id`,
  },
  {
    collapse: false,
    global: true,
    path: `${CUSTOMERS_DETAILS}/:id`,
    component: <CustomersDetailsPage />,
    layout: "/admin",
    name: `${CUSTOMERS_DETAILS}/:id`,
    key: `VendorsCustomers/${CUSTOMERS_DETAILS}/:id`,
  },
];
