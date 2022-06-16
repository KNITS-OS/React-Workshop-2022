import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Card, CardBody, Container, Row, Col, Button, Input, Label } from "reactstrap";

import {
  selectAllPartsInventoryData,
  fetchPartsInventory,
  deletePartsInventory,
} from "redux/features";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { PartsInventoryTableColumns, PARTS_INVENTORY_DETAILS } from ".";

export const PartsInventoryPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPartsInventory());
    // eslint-disable-next-line
  }, []);

  const partsInventory = useSelector(selectAllPartsInventoryData);

  const onViewPartsInventoryDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${PARTS_INVENTORY_DETAILS}/${id}`);
  };

  const onDeletePartsInventory = e => {
    e.preventDefault();
    const { id } = e.currentTarget;

    dispatch(deletePartsInventory(parseInt(id)));
  };

  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row className="justify-content-between">
                  <Col lg="auto">
                    <Row className="align-items-center">
                      <Col lg="auto">
                        <h3 className="mb-0">Parts and Inventory</h3>
                      </Col>
                      <Col lg="auto">
                        <Button color="primary">Table View</Button>
                        <Button color="primary">Card View</Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="auto">
                    <Button>Update</Button>
                    <Button>Import</Button>
                    <Button>Export</Button>
                    <Button>Filter</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row className="align-items-center justify-content-between">
                  <Col lg="auto ml-4">
                    <Input type="checkbox" />
                    <Label check>Select Parts</Label>
                  </Col>
                  <Col lg="auto">
                    <Button>Show/Hide</Button>
                    <Button color="primary">+ Part</Button>
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
                data={partsInventory}
                columns={PartsInventoryTableColumns({
                  onDetailsButtonClick: onViewPartsInventoryDetails,
                  onRemoveButtonClick: onDeletePartsInventory,
                })}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
