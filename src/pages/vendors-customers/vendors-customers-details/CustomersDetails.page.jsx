// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

// import { BoxHeader } from "components/headers";

// import { selectAllGroupsDataAsSelectOptions, selectAllRolesDataAsSelectOptions } from "pages/utils";
// import { CustomersPanel, VENDORS_CUSTOMERS_PAGE } from "pages/vendors-customers";

// import { customersService } from "api";
// import { useLocalStateAlerts } from "hooks";

// export const CustomersDetailsPage = () => {
//   const { id } = useParams();
//   const customersId = parseInt(id);
//   const navigate = useNavigate();

//   const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

//   const [customers, setCustomers] = useState([]);

//   const [groupOptions] = useState(selectAllGroupsDataAsSelectOptions());
//   const [roleOptions] = useState(selectAllRolesDataAsSelectOptions());

//   const getCustomers = async () => {
//     const { data } = await customersService.getAllCustomers();
//     setCustomers(data.find(e => e.id === customersId));
//   };

//   useEffect(() => {
//     getCustomers();
//     // eslint-disable-next-line
//   }, []);

//   const onSaveCustomers = customersRequest => {
//     const httpUpdateRequest = {
//       id: customersRequest.id,
//       body: customersRequest,
//     };
//     console.log("httpUpdateRequest", httpUpdateRequest);
//     setSuccessMessage("Customers Updated");
//     setIsSuccess(true);
//     setSaveSent(true);
//   };

//   return (
//     <>
//       {alert}
//       <BoxHeader />
//       <Container className="mt--6" fluid>
//         <Row>
//           <Col className="order-xl-1" xl="12">
//             <Card>
//               <CardHeader>
//                 <Row className="align-items-center">
//                   <Col xs="8">
//                     <h3 className="mb-0">Customers Details</h3>
//                   </Col>
//                 </Row>
//                 <Row className="align-items-center py-4">
//                   <Col lg="12" xs="7" className="text-right">
//                     <Button
//                       className="btn btn-primary"
//                       color="primary"
//                       onClick={() => navigate(`/admin${VENDORS_CUSTOMERS_PAGE}`)}
//                     >
//                       Back
//                     </Button>
//                   </Col>
//                 </Row>
//               </CardHeader>
//               <CardBody>
//                 <CustomersPanel
//                   customers={customers}
//                   groupOptions={groupOptions}
//                   roleOptions={roleOptions}
//                   onSave={onSaveCustomers}
//                 />
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };
