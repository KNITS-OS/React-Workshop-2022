import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { DEPARTMENT_DETAILS } from "pages/department";

import { departmentService } from "api/departments";
import { departmentsData } from "data";

import { departmentTableColumns } from ".";

export const SearchDepartments = () => {
  const navigate = useNavigate();

  console.log("departments", departmentsData);
  const [departments, setDepartments] = useState([]);
  console.log("departments", departments);

  const onSearchdepartments = async e => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    const { data } = await departmentService.searchDepartment(queryParams);
    console.log(data);
    setDepartments(data);
  };

  const onViewDepartmentDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${DEPARTMENT_DETAILS}/${id}`);
  };

  const onDeleteDepartment = e => {
    e.preventDefault();
    // const { id } = e.currentTarget;
    // console.log("delete department", id);
  };

  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Departments</h3>
                <p className="text-sm mb-0">Resultset</p>
              </CardHeader>

              <CardBody>
                <Row>
                  <Col md="1.1" className="d-flex flex-column justify-content-end">
                    <Button
                      className="btn btn-primary"
                      color="primary"
                      onClick={onSearchdepartments}
                    >
                      Search
                    </Button>
                  </Col>
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
                      })}                   />
                 
             
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
