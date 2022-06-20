import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Card, CardBody, CardHeader, Col, Container, Row, Spinner } from "reactstrap";

import {
  selectAllGroupsDataAsSelectOptions,
  selectPartsInventoryById,
  updatePartsInventory,
} from "redux/features";

import { BoxHeader } from "components/headers";

import { PartsInventoryPanel, PARTS_INVENTORY_PAGE } from "pages/parts-inventory";

import { useLocalStateAlerts } from "hooks";

export const PartsInventoryDetailsPage = () => {
  const { id } = useParams();
  const partsInventoryId = parseInt(id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const partsInventory = useSelector(selectPartsInventoryById(partsInventoryId));
  const groupOptions = useSelector(selectAllGroupsDataAsSelectOptions);

  if (!partsInventory) {
    return (
      <div className="text-center">
        <Spinner />
      </div>
    );
  }

  const onSavePartsInventory = async updatedPartsInventory => {
    dispatch(updatePartsInventory({ id: partsInventoryId, body: updatedPartsInventory }));

    setSuccessMessage("Parts Inventory Updated");
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
                    <h3 className="mb-0">Parts Inventory Details</h3>
                  </Col>
                </Row>
                <Row className="align-items-center py-4">
                  <Col lg="12" xs="7" className="text-right">
                    <Button
                      className="btn btn-primary"
                      color="primary"
                      onClick={() => navigate(`/admin${PARTS_INVENTORY_PAGE}`)}
                    >
                      Back
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <PartsInventoryPanel
                  partsInventory={partsInventory}
                  groupOptions={groupOptions}
                  onSave={onSavePartsInventory}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
