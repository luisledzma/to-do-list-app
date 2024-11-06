import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../../../Common/GlobalContext";
import { HomeImperativeModel } from "../../../Models/ImperativeModel";
import { Task } from "../../../Models/Models";
import HomeApi from "../../Home/HomeApi";
import "./CheckBox.scoped.scss";

export type CheckBoxProps = {
  text?: string;
  value?: boolean;
  item: Task;
};

const CheckBox = ({ text, value, item }: CheckBoxProps): JSX.Element => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useState, useRef, useContext, etc.
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [isChecked, setIsChecked] = useState(false);
  const api = useRef<HomeImperativeModel>();
  const { setIsDrawerOpen, setSelectedTask } = useContext(GlobalContext);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useEffect
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (value) {
      setIsChecked(value);
    }
  }, [value]);

  useEffect(() => {
    console.log(isChecked);
  }, [isChecked]);

  const updateTask = async (isChecked: boolean) => {
    await api.current?.updateTask(item?._id, isChecked);
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Misc Methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    updateTask(!isChecked);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(true);
    setSelectedTask(item);
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Callback methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Component's render method
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <HomeApi ref={api}></HomeApi>
      <div className="flex items-center space-x-3 cursor-pointer select-none">
        <FontAwesomeIcon
          className={"transition-all duration-200  dark:text-primary-2"}
          size="xl"
          icon={isChecked ? faSquareCheck : faSquare}
          onClick={toggleCheckbox}
        />
        <span
          className={`${
            isChecked ? "dark:text-gray-400" : "dark:text-white"
          }  transition-all duration-200 ${isChecked ? "line-through" : ""}`}
          onClick={toggleDrawer}
        >
          {text}
        </span>
      </div>
    </>
  );
};

export default CheckBox;
