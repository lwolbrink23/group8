import { useState } from "react";

const CustomDropdown = ({ title, ContentComponent, icon }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [arrowRotation, setArrowRotation] = useState(0);

  const toggleVisibility = () => {
    setDropdownVisible(!dropdownVisible);
    setArrowRotation(arrowRotation === 0 ? 90 : 0);
  };

  const arrowIconStyle = {
    height: "15px",
    transform: `rotate(${arrowRotation}deg)`,
  };

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={toggleVisibility}>
        <h3>{title}</h3>
        <img
          src={require(`../assets/icons/${icon}`)}
          alt="Arrow"
          style={arrowIconStyle}
        />
      </div>
      {dropdownVisible && <ContentComponent />}
    </div>
  );
};
export default CustomDropdown;
