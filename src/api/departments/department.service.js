import { httpCommon, DEPARTMENT_ROUTE } from "..";

const searchDepartment = queryParams => {
  const members = queryParams.get("members");
  queryParams.set("members", "");
  return httpCommon.get(`${DEPARTMENT_ROUTE}?${members}&${queryParams}`);
};
const getDepartmentById = id => httpCommon.get(`${DEPARTMENT_ROUTE}/${id}`);

const createDepartment = body => httpCommon.post(`${DEPARTMENT_ROUTE}`, body);

const deleteDepartment = id => httpCommon.delete(`${DEPARTMENT_ROUTE}/${id}`);

export const departmentService = {
  searchDepartment,
  getDepartmentById,
  createDepartment,
  deleteDepartment,
};
