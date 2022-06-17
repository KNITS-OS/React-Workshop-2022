import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Card, CardBody, CardHeader, Col, Container, Row, Spinner } from "reactstrap";

import {
  selectAllGroupsDataAsSelectOptions,
  selectCustomerById,
  updateCustomer,
} from "redux/features";

import { BoxHeader } from "components/headers";

import { CustomersPanel, VENDORS_CUSTOMERS_PAGE } from "pages/vendors-customers";

import { useLocalStateAlerts } from "hooks";

export const CustomersDetailsPage = () => {
  const { id } = useParams();
  const customersId = parseInt(id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const customers = useSelector(selectCustomerById(customersId));
  const groupOptions = useSelector(selectAllGroupsDataAsSelectOptions);

  if (!customers) {
    return (
      <div className="text-center">
        <Spinner />
      </div>
    );
  }

  const onSaveCustomers = async updatedCustomers => {
    dispatch(updateCustomer({ id: customersId, body: updatedCustomers }));

    setSuccessMessage("Customers Updated");
    setSaveSent(true);
    setIsSuccess(true);
  };

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
                    <h3 className="mb-0">Customers Details</h3>
                  </Col>
                </Row>
                <Row className="align-items-center py-4">
                  <Col lg="12" xs="7" className="text-right">
                    <Button
                      className="btn btn-primary"
                      color="primary"
                      onClick={() => navigate(`/admin${VENDORS_CUSTOMERS_PAGE}`)}
                    >
                      Back
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <CustomersPanel
                  customers={customers}
                  groupOptions={groupOptions}
                  onSave={onSaveCustomers}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
