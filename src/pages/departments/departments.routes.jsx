import { allAuthRoles } from "../utils";

import { DepartmentCreatePage, DEPARTMENT_CREATE } from ".";

export const departmentMenu = [
  {
    collapse: true,
    name: "Departments",
    icon: "ni ni-single-02 text-primary",
    state: "departmentsCollapse",
    path: "departmentsMenu",
    key: "DepartmentsMenu",
    allowedRoles: [...allAuthRoles],
    views: [
      {
        path: DEPARTMENT_CREATE,
        name: "Create Department",
        miniName: "E",
        component: <DepartmentCreatePage />,
        layout: "/admin",
        key: "Department/Create",
        allowedRoles: [...allAuthRoles],
      },
    ],
  },
];
