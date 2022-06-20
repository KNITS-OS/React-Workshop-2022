import { ButtonGroup, Button } from "reactstrap";

export const VendorsCustomersSwitchButton = ({ category, handleCategory }) => {
  return (
    <ButtonGroup>
      <Button
        active={category === "Vendors" ? true : false}
        color="primary"
        onClick={e => handleCategory(e.target.innerText)}
      >
        Vendors
      </Button>
      <Button
        active={category === "Customers" ? true : false}
        color="primary"
        onClick={e => handleCategory(e.target.innerText)}
      >
        Customers
      </Button>
    </ButtonGroup>
  );
};
