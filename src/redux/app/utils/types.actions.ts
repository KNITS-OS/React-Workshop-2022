// https://typeofnan.dev/setup-a-typescript-react-redux-project/
export function typedAction<T extends string>(type: T): { type: T };
export function typedAction<T extends string, P>(type: T, payload: P): { type: T; payload: P };
export function typedAction(type: string, payload?: any) {
  return { type, payload };
}

export enum AppActionType {
  // countries
  LIST_COUNTRIES_LOADING = "LIST_COUNTRIES_LOADING",
  LIST_COUNTRIES_ERROR = "LIST_COUNTRIES_ERROR",
  LIST_COUNTRIES_COMPLETE = "LIST_COUNTRIES_COMPLETE",

  // business-units
  LIST_BUSINESS_UNITS_LOADING = "LIST_BUSINESS_UNITS_LOADING",
  LIST_BUSINESS_UNITS_ERROR = "LIST_BUSINESS_UNITS_ERROR",
  LIST_BUSINESS_UNITS_COMPLETE = "LIST_BUSINESS_UNITS_COMPLETE",

  // world-overview
  FETCH_ACTIVE_MEMBERS_REPORT_LOADING = "FETCH_ACTIVE_MEMBERS_REPORT_LOADING",
  FETCH_ACTIVE_MEMBERS_REPORT_ERROR = "FETCH_ACTIVE_MEMBERS_REPORT_ERROR",
  FETCH_ACTIVE_MEMBERS_REPORT_COMPLETE = "FETCH_ACTIVE_MEMBERS_REPORT_COMPLETE",

  FETCH_NEW_MEMBERS_REPORT_LOADING = "FETCH_NEW_MEMBERS_REPORT_LOADING",
  FETCH_NEW_MEMBERS_REPORT_ERROR = "FETCH_NEW_MEMBERS_REPORT_ERROR",
  FETCH_NEW_MEMBERS_REPORT_COMPLETE = "FETCH_NEW_MEMBERS_REPORT_COMPLETE",

  FETCH_AUTO_OFFBOARDED_MEMBERS_REPORT_LOADING = "FETCH_AUTO_OFFBOARDED_MEMBERS_REPORT_LOADING",
  FETCH_AUTO_OFFBOARDED_MEMBERS_REPORT_ERROR = "FETCH_AUTO_OFFBOARDED_MEMBERS_REPORT_ERROR",
  FETCH_AUTO_OFFBOARDED_MEMBERS_REPORT_COMPLETE = "FETCH_AUTO_OFFBOARDED_MEMBERS_REPORT_COMPLETE",

  FETCH_SELF_RESIGNED_MEMBERS_REPORT_LOADING = "FETCH_SELF_RESIGNED_MEMBERS_REPORT_LOADING",
  FETCH_SELF_RESIGNED_MEMBERS_REPORT_ERROR = "FETCH_SELF_RESIGNED_MEMBERS_REPORT_ERROR",
  FETCH_SELF_RESIGNED_MEMBERS_REPORT_COMPLETE = "FETCH_SELF_RESIGNED_MEMBERS_REPORT_COMPLETE",

  // Employees
  SEARCH_EMPLOYEE_LOADING = "SEARCH_EMPLOYEE_LOADING",
  SEARCH_EMPLOYEE_ERROR = "SEARCH_EMPLOYEE_ERROR",
  SEARCH_EMPLOYEE_COMPLETE = "SEARCH_EMPLOYEE_COMPLETE",

  SEARCH_EMPLOYEES_LOADING = "SEARCH_EMPLOYEES_LOADING",
  SEARCH_EMPLOYEES_ERROR = "SEARCH_EMPLOYEES_ERROR",
  SEARCH_EMPLOYEES_COMPLETE = "SEARCH_EMPLOYEES_COMPLETE",

  UPDATE_EMPLOYEE_LOADING = "UPDATE_EMPLOYEE_LOADING",
  UPDATE_EMPLOYEE_ERROR = "UPDATE_EMPLOYEE_ERROR",
  UPDATE_EMPLOYEE_COMPLETE = "UPDATE_EMPLOYEE_COMPLETE",

  DELETE_EMPLOYEE_LOADING = "DELETE_EMPLOYEE_LOADING",
  DELETE_EMPLOYEE_ERROR = "DELETE_EMPLOYEE_ERROR",
  DELETE_EMPLOYEE_COMPLETE = "DELETE_EMPLOYEE_COMPLETE",

  // Documents
  SEARCH_DOCUMENT_LOADING = "SEARCH_DOCUMENT_LOADING",
  SEARCH_DOCUMENT_ERROR = "SEARCH_DOCUMENT_ERROR",
  SEARCH_DOCUMENT_COMPLETE = "SEARCH_DOCUMENT_COMPLETE",

  SEARCH_DOCUMENTS_LOADING = "SEARCH_DOCUMENTS_LOADING",
  SEARCH_DOCUMENTS_ERROR = "SEARCH_DOCUMENTS_ERROR",
  SEARCH_DOCUMENTS_COMPLETE = "SEARCH_DOCUMENTS_COMPLETE",

  CREATE_DOCUMENT_LOADING = "CREATE_DOCUMENT_LOADING",
  CREATE_DOCUMENT_ERROR = "CREATE_DOCUMENT_ERROR",
  CREATE_DOCUMENT_COMPLETE = "CREATE_DOCUMENT_COMPLETE",

  UPDATE_DOCUMENT_LOADING = "UPDATE_DOCUMENT_LOADING",
  UPDATE_DOCUMENT_ERROR = "UPDATE_DOCUMENT_ERROR",
  UPDATE_DOCUMENT_COMPLETE = "UPDATE_DOCUMENT_COMPLETE",

  DELETE_DOCUMENT_LOADING = "DELETE_DOCUMENT_LOADING",
  DELETE_DOCUMENT_ERROR = "DELETE_DOCUMENT_ERROR",
  DELETE_DOCUMENT_COMPLETE = "DELETE_DOCUMENT_COMPLETE",

  // Groups
  SEARCH_GROUP_LOADING = "SEARCH_GROUP_LOADING",
  SEARCH_GROUP_ERROR = "SEARCH_GROUP_ERROR",
  SEARCH_GROUP_COMPLETE = "SEARCH_GROUP_COMPLETE",

  SEARCH_GROUPS_LOADING = "SEARCH_GROUPS_LOADING",
  SEARCH_GROUPS_ERROR = "SEARCH_GROUPS_ERROR",
  SEARCH_GROUPS_COMPLETE = "SEARCH_GROUPS_COMPLETE",

  CREATE_GROUP_LOADING = "CREATE_GROUP_LOADING",
  CREATE_GROUP_ERROR = "CREATE_GROUP_ERROR",
  CREATE_GROUP_COMPLETE = "CREATE_GROUP_COMPLETE",

  UPDATE_GROUP_LOADING = "UPDATE_GROUP_LOADING",
  UPDATE_GROUP_ERROR = "UPDATE_GROUP_ERROR",
  UPDATE_GROUP_COMPLETE = "UPDATE_GROUP_COMPLETE",

  DELETE_GROUP_LOADING = "DELETE_GROUP_LOADING",
  DELETE_GROUP_ERROR = "DELETE_GROUP_ERROR",
  DELETE_GROUP_COMPLETE = "DELETE_GROUP_COMPLETE",
}
