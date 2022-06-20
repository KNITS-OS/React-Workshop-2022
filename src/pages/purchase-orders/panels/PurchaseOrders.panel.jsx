import moment from "moment";
import { useState } from "react";
import { useSelector } from "react-redux";

import { Button, Col, Form, Row } from "reactstrap";

import { selectGroupsByIdsAsSelectValues } from "redux/features";

import { InputField, DateField, SelectField } from "components/widgets";

import { DATE_FILTER_FORMAT } from "variables/app.consts";

export const PurchaseOrdersPanel = ({ purchaseOrder, groupOptions, onSave }) => {
  const [onboardingDate, setOnboardingDate] = useState(
    moment(purchaseOrder?.onboardingDate, DATE_FILTER_FORMAT)
  );

  const [offboardingDate, setOffboardingDate] = useState(
    moment(purchaseOrder?.offboardingDate, DATE_FILTER_FORMAT)
  );

  const purchaseOrdersGroups = useSelector(
    selectGroupsByIdsAsSelectValues(purchaseOrder.groups || [])
  );

  const [groups, setGroups] = useState(purchaseOrder.groups || []);

  // state to know which group fields has the user selected
  const [currentGroupSelections, setCurrentGroupSelections] = useState(purchaseOrdersGroups);

  const onSavePurchaseOrder = () => {
    const newPurchaseOrder = {
      ...purchaseOrder,
      onboardingDate: moment(onboardingDate, DATE_FILTER_FORMAT).format(DATE_FILTER_FORMAT),
      offboardingDate: moment(offboardingDate, DATE_FILTER_FORMAT).format(DATE_FILTER_FORMAT),
      groups,
    };

    onSave(newPurchaseOrder);
  };

  return (
    <Form>
      <h6 className="heading-small text-muted mb-4">Purchase Orders Information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="6">
            <DateField
              id="date-auto-onboarding-date"
              label="Onboard date"
              value={onboardingDate}
              setValue={setOnboardingDate}
            />
          </Col>
          <Col lg="6">
            <DateField
              id="date-auto-offboarding-date"
              label="Auto Offboard Date"
              value={offboardingDate}
              setValue={setOffboardingDate}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <SelectField
              id="select-group"
              label="Group"
              options={groupOptions}
              defaultValue={purchaseOrdersGroups}
              isMulti={true}
              isOptionDisabled={option => {
                const { label } = option;
                // if user has selected ALL field then other fields will be disabled
                if (currentGroupSelections.some(selection => selection.label === "ALL")) {
                  return true;
                  // if user has selected other field then ALL field will be disabled
                } else if (currentGroupSelections.length > 0 && label === "ALL") {
                  return true;
                  // default allow all fields to be selected
                } else {
                  return false;
                }
                // return true to disable field
              }}
              onChange={items => {
                const selections = items;
                setCurrentGroupSelections(selections);
                // if there is an "ALL" selection in the list (data will be 1,2,3,12,etc)
                // split and return an array of numbers
                if (selections.some(item => item.label === "ALL")) {
                  const values = selections[0].value.split(",").map(Number);
                  setGroups(values);
                } else {
                  // if user selected groups manually, return an array of the group ids
                  const groupIdsSelected = selections.map(item => parseInt(item.value));
                  setGroups(groupIdsSelected);
                }
              }}
            />
          </Col>
        </Row>
      </div>
      <hr className="my-4" />
      <h6 className="heading-small text-muted mb-4">Purchase Orders Data</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="4">
            <InputField
              id="input-title"
              label="Title"
              value={purchaseOrder.title}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-poNumber"
              label="PO Number"
              value={purchaseOrder.poNumber}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-vendor"
              label="Vendor"
              value={purchaseOrder.vendor}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <InputField
              id="input-numberOfItems"
              label="Number Of Items"
              value={purchaseOrder.numberOfItems}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-totalQuantity"
              label="Total Quantity"
              value={purchaseOrder.totalQuantity}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-totalCost"
              label="Total Cost"
              value={purchaseOrder.totalCost}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <InputField
              id="input-addedBy"
              label="Added By"
              value={purchaseOrder.addedBy}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-dateAdded"
              label="Date Added"
              value={purchaseOrder.dateAdded}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-dueDate"
              label="Due Date"
              value={purchaseOrder.dueDate}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>
        <Row>
          <Button color="primary" type="button" onClick={onSavePurchaseOrder}>
            Update Purchase Orders
          </Button>
        </Row>
      </div>
    </Form>
  );
};
