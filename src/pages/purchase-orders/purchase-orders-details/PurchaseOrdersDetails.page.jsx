import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Card, CardBody, CardHeader, Col, Container, Row, Spinner } from "reactstrap";

import {
  selectAllGroupsDataAsSelectOptions,
  selectPurchaseOrderById,
  updatePurchaseOrder,
} from "redux/features";

import { BoxHeader } from "components/headers";

import { PurchaseOrdersPanel, PURCHASE_ORDERS_PAGE } from "pages/purchase-orders";

import { useLocalStateAlerts } from "hooks";

export const PurchaseOrdersDetailsPage = () => {
  const { id } = useParams();
  const purchaseOrderId = parseInt(id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const purchaseOrder = useSelector(selectPurchaseOrderById(purchaseOrderId));
  const groupOptions = useSelector(selectAllGroupsDataAsSelectOptions);

  if (!purchaseOrder) {
    return (
      <div className="text-center">
        <Spinner />
      </div>
    );
  }

  const onSavePurchaseOrder = async updatedPurchaseOrder => {
    dispatch(updatePurchaseOrder({ id: purchaseOrderId, body: updatedPurchaseOrder }));

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
                  purchaseOrder={purchaseOrder}
                  groupOptions={groupOptions}
                  onSave={onSavePurchaseOrder}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
