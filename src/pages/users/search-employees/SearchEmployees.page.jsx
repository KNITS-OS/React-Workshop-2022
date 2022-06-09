import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, Card, CardHeader, Col, Container, FormGroup, Row } from "reactstrap";

//import { AppActionType } from "redux/app";
import {
  deleteEmployee,
  searchEmployees,
  selectAllBusinessUnitsDataAsSelectOptions,
  selectAllCountriesDataAsSelectOptions,
  selectAllEmployeeData,
  createEmployee,
} from "redux/features";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { EMPLOYEE_DETAILS } from "pages/users";

import { employeesTableColumns, SearchEmployeesFilterPanel, mockEmployee } from ".";

export const SearchEmployeesPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const employees = useSelector(selectAllEmployeeData);

  const businessUnits = useSelector(selectAllBusinessUnitsDataAsSelectOptions);
  const countries = useSelector(selectAllCountriesDataAsSelectOptions);

  const onSearchEmployees = async filters => {
    dispatch(searchEmployees(filters));
  };

  const onViewEmployeeDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${EMPLOYEE_DETAILS}/${id}`);
  };

  const onDeleteEmployee = async e => {
    e.preventDefault();
    const { id } = e.currentTarget;

    dispatch(deleteEmployee(parseInt(id)));
  };

  const onCreateNewEmployee = e => {
    e.preventDefault();
    console.log(mockEmployee);

    //1) basic impl type hardcoded:
    //dispatch({ type: "create-employee", payload: mockEmployee });

    //2) dispatch action type from const
    //dispatch({ type: AppActionType.CREATE_EMPLOYEE, payload: mockEmployee });

    //3) dispatch action from action creator function
    dispatch(createEmployee(mockEmployee));
  };

  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <SearchEmployeesFilterPanel
              onSearchEmployees={onSearchEmployees}
              countries={countries}
              businessUnits={businessUnits}
            />
          </div>
        </Row>

        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <Row>
                  <Col md="12" className="d-flex flex-column justify-content-end">
                    <h3 className="mb-0">Employees</h3>
                    <p className="text-sm mb-0">Kn Employees from PDM</p>
                  </Col>
                </Row>
                <Row>
                  <Col md="10">&nbsp;</Col>
                  <Col md="2" className="d-flex flex-column justify-content-end">
                    <FormGroup>
                      <Button
                        className="btn btn-primary"
                        color="primary"
                        onClick={onCreateNewEmployee}
                      >
                        New
                      </Button>
                    </FormGroup>
                  </Col>
                </Row>
              </CardHeader>

              <ReactTable
                data={employees}
                columns={employeesTableColumns({
                  onDetailsButtonClick: onViewEmployeeDetails,
                  onRemoveButtonClick: onDeleteEmployee,
                })}
              />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
