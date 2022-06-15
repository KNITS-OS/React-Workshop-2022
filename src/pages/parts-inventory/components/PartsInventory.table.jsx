import { TwoMouseEventActionButtons } from "components/widgets";

export const PartsInventoryTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
  return [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "name",
      Header: "Name",
    },
    {
      accessor: "quantity",
      Header: "Quantity",
    },
    {
      accessor: "cost",
      Header: "Cost",
    },
    {
      accessor: "barcode",
      Header: "Barcode",
    },
    {
      accessor: "area",
      Header: "Area",
    },
    {
      accessor: "description",
      Header: "Description",
    },
    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ];
};
