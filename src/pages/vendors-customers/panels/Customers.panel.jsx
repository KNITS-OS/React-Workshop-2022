import moment from "moment";
import { useState } from "react";
import { useSelector } from "react-redux";

import { Button, Col, Form, Row } from "reactstrap";

import { selectGroupsByIdsAsSelectValues } from "redux/features";

import { InputField, DateField, SelectField } from "components/widgets";

import { DATE_FILTER_FORMAT } from "variables/app.consts";

export const CustomersPanel = ({ customers, groupOptions, onSave }) => {
  const [onboardingDate, setOnboardingDate] = useState(
    moment(customers?.onboardingDate, DATE_FILTER_FORMAT)
  );

  const [offboardingDate, setOffboardingDate] = useState(
    moment(customers?.offboardingDate, DATE_FILTER_FORMAT)
  );

  const customersGroups = useSelector(selectGroupsByIdsAsSelectValues(customers.groups || []));

  const [groups, setGroups] = useState(customers.groups || []);

  // state to know which group fields has the user selected
  const [currentGroupSelections, setCurrentGroupSelections] = useState(customersGroups);

  const onSaveCustomers = () => {
    const newCustomers = {
      ...customers,
      onboardingDate: moment(onboardingDate, DATE_FILTER_FORMAT).format(DATE_FILTER_FORMAT),
      offboardingDate: moment(offboardingDate, DATE_FILTER_FORMAT).format(DATE_FILTER_FORMAT),
      groups,
    };

    onSave(newCustomers);
  };

  return (
    <Form>
      <h6 className="heading-small text-muted mb-4">Customers Information</h6>
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
              defaultValue={customersGroups}
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
      <h6 className="heading-small text-muted mb-4">Customers Data</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="4">
            <InputField
              id="input-customerName"
              label="Customer Name"
              value={customers.customerName}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-customerType"
              label="Customer Type"
              value={customers.customerType}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-phoneNumber"
              label="Phone Number"
              value={customers.phoneNumber}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <InputField
              id="input-address"
              label="Address"
              value={customers.address}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-emailAddress"
              label="Email Address"
              value={customers.emailAddress}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-website"
              label="Website"
              value={customers.website}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <InputField
              id="input-dateCreated"
              label="Date Created"
              value={customers.dateCreated}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>
        <Row>
          <Button color="primary" type="button" onClick={onSaveCustomers}>
            Update Customers
          </Button>
        </Row>
      </div>
    </Form>
  );
};
