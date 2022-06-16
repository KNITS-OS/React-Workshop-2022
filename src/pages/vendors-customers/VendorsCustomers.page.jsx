import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Card, CardHeader, Container, Row, Col, Button } from "reactstrap";

import {
  selectAllVendorsData,
  selectAllCustomersData,
  fetchVendorsCustomers,
  deleteCustomer,
  deleteVendor,
} from "redux/features";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import {
  VendorsTableColumns,
  CustomersTableColumns,
  VendorsCustomersSwitchButton,
  VENDORS_DETAILS,
  CUSTOMERS_DETAILS,
} from ".";

export const VendorsCustomersPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVendorsCustomers());
    // eslint-disable-next-line
  }, []);

  const vendors = useSelector(selectAllVendorsData);
  const customers = useSelector(selectAllCustomersData);

  const [category, setCategory] = useState("Vendors");

  const onViewVendorDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${VENDORS_DETAILS}/${id}`);
  };

  const onDeleteVendor = e => {
    e.preventDefault();
    const { id } = e.currentTarget;

    dispatch(deleteVendor(parseInt(id)));
  };

  const onViewCustomerDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${CUSTOMERS_DETAILS}/${id}`);
  };

  const onDeleteCustomer = e => {
    e.preventDefault();
    const { id } = e.currentTarget;

    dispatch(deleteCustomer(parseInt(id)));
  };

  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <Row className="justify-content-between">
                  <Col>
                    <Row className="align-items-center">
                      <Col xl="auto">
                        <h3 className="mb-0">Vendors and Customers</h3>
                      </Col>
                      <Col xl="auto">
                        <VendorsCustomersSwitchButton
                          category={category}
                          handleCategory={setCategory}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col xl="auto">
                    <Button color="primary">+ {category}</Button>
                  </Col>
                </Row>
              </CardHeader>
              {category === "Vendors" ? (
                <ReactTable
                  data={vendors}
                  columns={VendorsTableColumns({
                    onDetailsButtonClick: onViewVendorDetails,
                    onRemoveButtonClick: onDeleteVendor,
                  })}
                />
              ) : (
                <ReactTable
                  data={customers}
                  columns={CustomersTableColumns({
                    onDetailsButtonClick: onViewCustomerDetails,
                    onRemoveButtonClick: onDeleteCustomer,
                  })}
                />
              )}
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
