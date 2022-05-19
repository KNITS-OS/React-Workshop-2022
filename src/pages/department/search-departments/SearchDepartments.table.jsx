import { TwoMouseEventActionButtons } from "components/widgets";

export const departmentTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
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
      accessor: "code",
      Header: "Code",
    },
    {
      accessor: "startDate",
      Header: "StartDate",
    },
    {
      accessor: "endDate",
      Header: "EndDate",
    },
    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ];
};
