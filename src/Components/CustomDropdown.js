import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      <button className="dropdown-btn" onClick={toggleVisibility}>
        <h3>{title}</h3>
        <img
          src={require(`../assets/icons/${icon}`)}
          alt="Arrow"
          style={arrowIconStyle}
        />
      </button>
      <AnimatePresence>
        {dropdownVisible && (
          <motion.div
            className="dropdown-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <ContentComponent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomDropdown;
