// import moment from "moment";
// import { useState } from "react";

// import { Button, Col, Form, Row } from "reactstrap";

// import { InputField, DateField, SelectField } from "components/widgets";

// import { selectRoleByIdAsSelectOption, selectGroupsByIdsAsSelectValues } from "pages/utils";

// import { DATE_FILTER_FORMAT } from "variables/app.consts";

// export const PartsInventoryPanel = ({ partsInventory, groupOptions, roleOptions, onSave }) => {
//   const [onboardingDate, setOnboardingDate] = useState(
//     moment(partsInventory?.onboardingDate, DATE_FILTER_FORMAT)
//   );

//   const [offboardingDate, setOffboardingDate] = useState(
//     moment(partsInventory?.offboardingDate, DATE_FILTER_FORMAT)
//   );

//   const partsInventoryRole = selectRoleByIdAsSelectOption(partsInventory.roleId);
//   const partsInventoryGroups = selectGroupsByIdsAsSelectValues(partsInventory.groups || []);

//   const [roleId, setRoleId] = useState(partsInventory.roleId);
//   const [groups, setGroups] = useState(partsInventory.groups || []);

//   // state to know which group fields has the user selected
//   const [currentGroupSelections, setCurrentGroupSelections] = useState([]);

//   const onSavePartsInventory = () => {
//     const partsInventorySaveRequest = {
//       id: partsInventory.id,
//       onboardingDate: moment(onboardingDate, DATE_FILTER_FORMAT).format(DATE_FILTER_FORMAT),
//       offboardingDate: moment(offboardingDate, DATE_FILTER_FORMAT).format(DATE_FILTER_FORMAT),
//       roleId,
//       groups,
//     };

//     onSave(partsInventorySaveRequest);
//   };
//   return (
//     <Form>
//       <h6 className="heading-small text-muted mb-4">Parts Inventory Information</h6>
//       <div className="pl-lg-4">
//         <Row>
//           <Col lg="6">
//             <DateField
//               id="date-auto-onboarding-date"
//               label="Onboard date"
//               value={onboardingDate}
//               setValue={setOnboardingDate}
//             />
//           </Col>
//           <Col lg="6">
//             <DateField
//               id="date-auto-offboarding-date"
//               label="Auto Offboard Date"
//               value={offboardingDate}
//               setValue={setOffboardingDate}
//             />
//           </Col>
//         </Row>
//         <Row>
//           <Col lg="6">
//             <SelectField
//               id="select-role"
//               label="Role"
//               options={roleOptions}
//               defaultValue={partsInventoryRole}
//               onChange={item => {
//                 const { value } = item;
//                 setRoleId(parseInt(value));
//               }}
//             />
//           </Col>
//           <Col lg="6">
//             <SelectField
//               id="select-group"
//               label="Group"
//               options={groupOptions}
//               defaultValue={partsInventoryGroups}
//               isMulti={true}
//               isOptionDisabled={option => {
//                 const { label } = option;
//                 // if user has selected ALL field then other fields will be disabled
//                 if (currentGroupSelections.some(selection => selection.label === "ALL")) {
//                   return true;
//                   // if user has selected other field then ALL field will be disabled
//                 } else if (currentGroupSelections.length > 0 && label === "ALL") {
//                   return true;
//                   // default allow all fields to be selected
//                 } else {
//                   return false;
//                 }
//                 // return true to disable field
//               }}
//               onChange={items => {
//                 const selections = items;
//                 setCurrentGroupSelections(selections);
//                 // if there is an "ALL" selection in the list (data will be 1,2,3,12,etc)
//                 // split and return an array of numbers
//                 if (selections.some(item => item.label === "ALL")) {
//                   const values = selections[0].value.split(",").map(Number);
//                   setGroups(values);
//                 } else {
//                   // if user selected groups manually, return an array of the group ids
//                   const groupIdsSelected = selections.map(item => parseInt(item.value));
//                   setGroups(groupIdsSelected);
//                 }
//               }}
//             />
//           </Col>
//         </Row>
//       </div>
//       <hr className="my-4" />
//       <h6 className="heading-small text-muted mb-4">Parts Inventory Data</h6>
//       <div className="pl-lg-4">
//         <Row>
//           <Col lg="6">
//             <InputField
//               id="input-name"
//               label="Name"
//               value={partsInventory.name}
//               type="text"
//               disabled={true}
//             />
//           </Col>
//           <Col lg="6">
//             <InputField
//               id="input-area"
//               label="Area"
//               value={partsInventory.area}
//               type="text"
//               disabled={true}
//             />
//           </Col>
//         </Row>
//         <Row>
//           <Col lg="4">
//             <InputField
//               id="input-quantity"
//               label="Quantity"
//               value={partsInventory.quantity}
//               type="text"
//               disabled={true}
//             />
//           </Col>
//           <Col lg="4">
//             <InputField
//               id="input-cost"
//               label="Cost"
//               value={partsInventory.cost}
//               type="text"
//               disabled={true}
//             />
//           </Col>
//           <Col lg="4">
//             <InputField
//               id="input-barcode"
//               label="Barcode"
//               value={partsInventory.barcode}
//               type="text"
//               disabled={true}
//             />
//           </Col>
//         </Row>
//         <Row>
//           <Col lg="12">
//             <InputField
//               id="input-description"
//               label="Description"
//               value={partsInventory.description}
//               type="text"
//               disabled={true}
//             />
//           </Col>
//         </Row>
//         <Row>
//           <Button color="primary" type="button" onClick={onSavePartsInventory}>
//             Update Parts Inventory
//           </Button>
//         </Row>
//       </div>
//     </Form>
//   );
// };
