// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

// import { BoxHeader } from "components/headers";

// import { PartsInventoryPanel, PARTS_INVENTORY_PAGE } from "pages/parts-inventory";
// import { selectAllGroupsDataAsSelectOptions, selectAllRolesDataAsSelectOptions } from "pages/utils";

// import { partsInventoryService } from "api";
// import { useLocalStateAlerts } from "hooks";

// export const PartsInventoryDetailsPage = () => {
//   const { id } = useParams();
//   const partsInventoryId = parseInt(id);
//   const navigate = useNavigate();

//   const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

//   const [partsInventory, setPartsInventory] = useState([]);

//   const [groupOptions] = useState(selectAllGroupsDataAsSelectOptions());
//   const [roleOptions] = useState(selectAllRolesDataAsSelectOptions());

//   const getPartsInventory = async () => {
//     const { data } = await partsInventoryService.getAllPartsInventory();
//     setPartsInventory(data.find(e => e.id === partsInventoryId));
//   };

//   useEffect(() => {
//     getPartsInventory();
//     // eslint-disable-next-line
//   }, []);

//   const onSavePartsInventory = partsInventoryRequest => {
//     const httpUpdateRequest = {
//       id: partsInventoryRequest.id,
//       body: partsInventoryRequest,
//     };
//     console.log("httpUpdateRequest", httpUpdateRequest);
//     setSuccessMessage("Parts Inventory Updated");
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
//                     <h3 className="mb-0">Parts Inventory Details</h3>
//                   </Col>
//                 </Row>
//                 <Row className="align-items-center py-4">
//                   <Col lg="12" xs="7" className="text-right">
//                     <Button
//                       className="btn btn-primary"
//                       color="primary"
//                       onClick={() => navigate(`/admin${PARTS_INVENTORY_PAGE}`)}
//                     >
//                       Back
//                     </Button>
//                   </Col>
//                 </Row>
//               </CardHeader>
//               <CardBody>
//                 <PartsInventoryPanel
//                   partsInventory={partsInventory}
//                   groupOptions={groupOptions}
//                   roleOptions={roleOptions}
//                   onSave={onSavePartsInventory}
//                 />
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };
