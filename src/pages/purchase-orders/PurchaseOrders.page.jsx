import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Card, CardBody, Container, Row, Col, Input, Label, Button } from "reactstrap";

import {
  selectAllPurchaseOrdersData,
  fetchPurchaseOrders,
  deletePurchaseOrders,
} from "redux/features";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { PurchaseOrdersTableColumns, PURCHASE_ORDERS_DETAILS } from ".";

export const PurchaseOrdersPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPurchaseOrders());
    // eslint-disable-next-line
  }, []);

  const purchaseOrders = useSelector(selectAllPurchaseOrdersData);

  const onViewPurchaseOrdersDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${PURCHASE_ORDERS_DETAILS}/${id}`);
  };

  const onDeletePurchaseOrders = e => {
    e.preventDefault();
    const { id } = e.currentTarget;

    dispatch(deletePurchaseOrders(parseInt(id)));
  };

  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row className="align-items-center justify-content-between">
                  <Col lg="auto">
                    <Row className="align-items-center gx-5">
                      <Col lg="auto">
                        <h3 className="mb-0">Purchase Orders |</h3>
                      </Col>
                      <Col lg="auto">
                        <Input type="checkbox" />
                        <Label check>Select Purchase Orders</Label>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="auto">
                    <Button>Show/Hide</Button>
                    <Button>Export</Button>
                    <Button color="primary">+ Purchase Order</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <ReactTable
                data={purchaseOrders}
                columns={PurchaseOrdersTableColumns({
                  onDetailsButtonClick: onViewPurchaseOrdersDetails,
                  onRemoveButtonClick: onDeletePurchaseOrders,
                })}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
