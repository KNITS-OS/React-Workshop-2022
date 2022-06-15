// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

// import { BoxHeader } from "components/headers";

// import { PurchaseOrdersPanel, PURCHASE_ORDERS_PAGE } from "pages/purchase-orders";
// import { selectAllGroupsDataAsSelectOptions, selectAllRolesDataAsSelectOptions } from "pages/utils";

// import { purchaseOrdersService } from "api";
// import { useLocalStateAlerts } from "hooks";

// export const PurchaseOrdersDetailsPage = () => {
//   const { id } = useParams();
//   const purchaseOrdersId = parseInt(id);
//   const navigate = useNavigate();

//   const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

//   const [purchaseOrders, setPurchaseOrders] = useState([]);

//   const [groupOptions] = useState(selectAllGroupsDataAsSelectOptions());
//   const [roleOptions] = useState(selectAllRolesDataAsSelectOptions());

//   const getPurchaseOrders = async () => {
//     const { data } = await purchaseOrdersService.getAllPurchaseOrders();
//     setPurchaseOrders(data.find(e => e.id === purchaseOrdersId));
//   };

//   useEffect(() => {
//     getPurchaseOrders();
//     // eslint-disable-next-line
//   }, []);

//   const onSavePurchaseOrders = purchaseOrdersRequest => {
//     const httpUpdateRequest = {
//       id: purchaseOrdersRequest.id,
//       body: purchaseOrdersRequest,
//     };
//     console.log("httpUpdateRequest", httpUpdateRequest);
//     setSuccessMessage("Purchase Orders Updated");
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
//                     <h3 className="mb-0">Purchase Orders Details</h3>
//                   </Col>
//                 </Row>
//                 <Row className="align-items-center py-4">
//                   <Col lg="12" xs="7" className="text-right">
//                     <Button
//                       className="btn btn-primary"
//                       color="primary"
//                       onClick={() => navigate(`/admin${PURCHASE_ORDERS_PAGE}`)}
//                     >
//                       Back
//                     </Button>
//                   </Col>
//                 </Row>
//               </CardHeader>
//               <CardBody>
//                 <PurchaseOrdersPanel
//                   purchaseOrders={purchaseOrders}
//                   groupOptions={groupOptions}
//                   roleOptions={roleOptions}
//                   onSave={onSavePurchaseOrders}
//                 />
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };
