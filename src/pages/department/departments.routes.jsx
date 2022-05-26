import { CreateDepartmentPage, SearchDepartments } from ".";

export const departmentMenu = [
  {
    collapse: true,
    name: "Departments",
    icon: "ni ni-single-02 text-primary",
    state: "departmentCollapse",
    path: "departmentMenu",
    key: "departmentMenu",
    views: [
      {
        path: "/departments/department-create",
        name: "Create Department",
        miniName: "CD",
        component: <CreateDepartmentPage />,
        layout: "/admin",
        key: "Departments/CreateDepartment",
      },
      {
        path: "/departments/department-search",
        name: "Search Department",
        miniName: "SD",
        component: <SearchDepartments />,
        layout: "/admin",
        key: "Departments/SearchDepartments",
      },
    ],
  },
];
