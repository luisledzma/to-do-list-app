import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./CheckBox.scoped.scss";

export type CheckBoxProps = {
  text?: string;
  value?: boolean;
};

const CheckBox = ({ text, value }: CheckBoxProps): JSX.Element => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useState, useRef, useContext, etc.
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [isChecked, setIsChecked] = useState(false);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useEffect
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (value) {
      setIsChecked(value);
    }
  }, [value]);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Misc Methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Callback methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Component's render method
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div
      className="flex items-center space-x-3 cursor-pointer select-none"
      onClick={toggleCheckbox}
    >
      <FontAwesomeIcon
        className={"transition-all duration-200  dark:text-primary-2"}
        size="xl"
        icon={isChecked ? faSquareCheck : faSquare}
      />
      <span
        className={`${
          isChecked ? "dark:text-gray-400" : "dark:text-white"
        }  transition-all duration-200 ${isChecked ? "line-through" : ""}`}
      >
        {text}
      </span>
    </div>
  );
};

export default CheckBox;
