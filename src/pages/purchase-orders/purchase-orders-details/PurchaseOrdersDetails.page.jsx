import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Card, CardBody, CardHeader, Col, Container, Row, Spinner } from "reactstrap";

import {
  selectAllGroupsDataAsSelectOptions,
  selectPurchaseOrdersById,
  updatePurchaseOrders,
} from "redux/features";

import { BoxHeader } from "components/headers";

import { PurchaseOrdersPanel, PURCHASE_ORDERS_PAGE } from "pages/purchase-orders";

import { useLocalStateAlerts } from "hooks";

export const PurchaseOrdersDetailsPage = () => {
  const { id } = useParams();
  const purchaseOrdersId = parseInt(id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const purchaseOrders = useSelector(selectPurchaseOrdersById(purchaseOrdersId));
  const groupOptions = useSelector(selectAllGroupsDataAsSelectOptions);

  if (!purchaseOrders) {
    return (
      <div className="text-center">
        <Spinner />
      </div>
    );
  }

  const onSavePurchaseOrders = async updatedPurchaseOrders => {
    dispatch(updatePurchaseOrders({ id: purchaseOrdersId, body: updatedPurchaseOrders }));

    setSuccessMessage("Purchase Orders Updated");
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
                    <h3 className="mb-0">Purchase Orders Details</h3>
                  </Col>
                </Row>
                <Row className="align-items-center py-4">
                  <Col lg="12" xs="7" className="text-right">
                    <Button
                      className="btn btn-primary"
                      color="primary"
                      onClick={() => navigate(`/admin${PURCHASE_ORDERS_PAGE}`)}
                    >
                      Back
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <PurchaseOrdersPanel
                  purchaseOrders={purchaseOrders}
                  groupOptions={groupOptions}
                  onSave={onSavePurchaseOrders}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
