/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";





import { EmployeePanel, EMPLOYEE_SEARCH } from "pages/users";
import { selectAllGroupsDataAsSelectOptions, selectAllRolesDataAsSelectOptions } from "pages/utils";

import { employeesData } from "data";
import { useLocalStateAlerts } from "hooks";
*/

import { Button, Card, CardBody, CardHeader, Col, Container, Form, Row } from "reactstrap";

import { BoxHeader } from "components/headers";
import { DateField, InputField } from "components/widgets";

export const CreateDepartmentPage = () => {
  /*
  const { id } = useParams();
  const employeeId = parseInt(id);
  const navigate = useNavigate();

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const [employee] = useState(employeesData.find(e => e.id === employeeId));

  const [groupOptions] = useState(selectAllGroupsDataAsSelectOptions());
  const [roleOptions] = useState(selectAllRolesDataAsSelectOptions());

  const onSaveEmployee = employeeRequest => {
    const httpUpdateRequest = {
      id: employeeRequest.id,
      body: employeeRequest,
    };
    console.log("httpUpdateRequest", httpUpdateRequest);
    setSuccessMessage("Employee Updated");
    setIsSuccess(true);
    setSaveSent(true);
  };
*/
  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Create Department</h3>
                  </Col>
                </Row>
                <Row className="align-items-center py-4">
                  <Col lg="12" xs="7" className="text-right">
                    <Button
                      className="btn btn-primary"
                      color="primary"
                      // onClick={() => navigate(`/admin${EMPLOYEE_SEARCH}`)}
                    >
                      Back to Search
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">Department information</h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="3">
                        <InputField
                          id="input-last-name"
                          label="Last name"
                          // value={employee.lastName}
                          type="text"
                        />
                      </Col>
                      <Col lg="3">
                        <InputField
                          id="input-last-name"
                          label="Last name"
                          // value={employee.lastName}
                          type="text"
                        />
                      </Col>
                      <Col lg="3">
                        <InputField
                          id="input-last-name"
                          label="Last name"
                          // value={employee.lastName}
                          type="text"
                        />
                      </Col>
                      <Col lg="3">
                        <DateField
                          id="date-auto-offboarding-date"
                          label="Auto Offboard Date"
                          // value={offboardingDate}
                          // setValue={setOffboardingDate}
                        />
                      </Col>
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
