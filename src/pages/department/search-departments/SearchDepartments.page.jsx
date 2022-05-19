import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardHeader, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { EMPLOYEE_DETAILS } from "pages/users";

import { departmentsData } from "data";

import { departmentTableColumns } from ".";
/*
import {
  selectAllBusinessUnitsDataAsSelectOptions,
  selectAllCountriesDataAsSelectOptions,
} from "../../utils";

import { employeesTableColumns, SearchEmployeesFilterPanel } from ".";
*/

export const SearchDepartments = () => {
  const navigate = useNavigate();

  const [departments] = useState(departmentsData);

  /*
  const businessUnits = selectAllBusinessUnitsDataAsSelectOptions();
  const countries = selectAllCountriesDataAsSelectOptions();
  const onSearchEmployees = filters => {
    console.log("filters", filters);
  };
*/

  const onViewDepartmentDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${EMPLOYEE_DETAILS}/${id}`);
  };

  const onDeleteDepartment = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log("delete department", id);
  };

  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">Filters will go here</div>
        </Row>

        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Departments</h3>
                <p className="text-sm mb-0">Resultset</p>
              </CardHeader>

              <ReactTable
                data={departments}
                columns={departmentTableColumns({
                  onDetailsButtonClick: onViewDepartmentDetails,
                  onRemoveButtonClick: onDeleteDepartment,
                })}
              />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
