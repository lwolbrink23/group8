import { useState } from "react";
import arrowIcon from "../assets/icons/white-arrow.svg";
const CustomDropdown = ({ title, ContentComponent }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [arrowRotation, setArrowRotation] = useState(270);

  const toggleVisibility = () => {
    setDropdownVisible(!dropdownVisible);
    setArrowRotation(arrowRotation === 0 ? 270 : 0);
  };

  const arrowIconStyle = {
    height: "15px",
    transform: `rotate(${arrowRotation}deg)`,
  };

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={toggleVisibility}>
        <h3>{title}</h3>
        <img src={arrowIcon} alt="Arrow" style={arrowIconStyle} />
      </div>
      {dropdownVisible && <ContentComponent />}
    </div>
  );
};
export default CustomDropdown;
