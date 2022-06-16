// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

// import { BoxHeader } from "components/headers";

// import { selectAllGroupsDataAsSelectOptions, selectAllRolesDataAsSelectOptions } from "pages/utils";
// import { VendorsPanel, VENDORS_CUSTOMERS_PAGE } from "pages/vendors-customers";

// import { vendorsService } from "api";
// import { useLocalStateAlerts } from "hooks";

// export const VendorsDetailsPage = () => {
//   const { id } = useParams();
//   const vendorsId = parseInt(id);
//   const navigate = useNavigate();

//   const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

//   const [vendors, setVendors] = useState([]);

//   const [groupOptions] = useState(selectAllGroupsDataAsSelectOptions());
//   const [roleOptions] = useState(selectAllRolesDataAsSelectOptions());

//   const getVendors = async () => {
//     const { data } = await vendorsService.getAllVendors();
//     setVendors(data.find(e => e.id === vendorsId));
//   };

//   useEffect(() => {
//     getVendors();
//     // eslint-disable-next-line
//   }, []);

//   const onSaveVendors = vendorsRequest => {
//     const httpUpdateRequest = {
//       id: vendorsRequest.id,
//       body: vendorsRequest,
//     };
//     console.log("httpUpdateRequest", httpUpdateRequest);
//     setSuccessMessage("Vendors Updated");
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
//                     <h3 className="mb-0">Vendors Details</h3>
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
//                 <VendorsPanel
//                   vendors={vendors}
//                   groupOptions={groupOptions}
//                   roleOptions={roleOptions}
//                   onSave={onSaveVendors}
//                 />
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };
