import { TwoMouseEventActionButtons } from "components/widgets";

export const CustomersTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
  return [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "customerName",
      Header: "Customer Name",
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
      accessor: "emailAddress",
      Header: "Email Address",
    },
    {
      accessor: "customerType",
      Header: "Customer Type",
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
