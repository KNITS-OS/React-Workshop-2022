import { TwoMouseEventActionButtons } from "components/widgets";

export const VendorsTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
  return [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "companyName",
      Header: "Company Name",
    },
    {
      accessor: "address",
      Header: "Address",
    },
    {
      accessor: "phoneNumber",
      Header: "Phone Number",
    },
    {
      accessor: "contactName",
      Header: "Contact Name",
    },
    {
      accessor: "emailAddress",
      Header: "Email Address",
    },
    {
      accessor: "vendorType",
      Header: "Vendor Type",
    },
    {
      accessor: "website",
      Header: "Website",
    },
    {
      accessor: "dateCreated",
      Header: "Date Created",
    },
    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ];
};
