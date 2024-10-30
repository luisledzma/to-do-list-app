import {
  faFloppyDisk,
  faTrashCan,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Datepicker from "../Datepicker/Datepicker";
import InputText from "../Input/InputText";
import Label from "../Label/Label";
import TextArea from "../TextArea/TextArea";
import "./Drawer.scoped.scss";

export type DrawerProps = {
  isDrawerOpen: boolean;
  onCloseDrawer: () => void;
};

const Drawer = ({ isDrawerOpen, onCloseDrawer }: DrawerProps): JSX.Element => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useState, useRef, useContext, etc.
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [taskTitle, setTaskTitle] = useState<string>("");
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useEffect
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    setTaskTitle("Task 1");
  }, []);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Misc Methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Callback methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Component's render method
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div
      id="drawer-right-example"
      className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-background-dark3 ${
        isDrawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
      aria-labelledby="drawer-right-label"
    >
      <h4 className="text-2xl font-bold dark:text-white">Details</h4>

      <Button
        onClick={onCloseDrawer}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        icon={faXmark}
        iconSize="2x"
        type={"button"}
      />
      <div className="flex flex-col mt-3">
        <InputText
          className={
            "w-full text-base font-bold dark:bg-transparent dark:text-white dark:placeholder:text-gray-400 border-0 focus:outline-none focus:ring-0"
          }
          value={taskTitle}
          placeholder="Add a task"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <Label text={"Due Date:"} />
        <Datepicker />
      </div>
      <div className="flex flex-col">
        <Label text={"Description:"} />
        <TextArea
          id="description"
          rows={3}
          placeholder="Type a description..."
          className=""
        />
      </div>
      <div className="mt-5 flex gap-2 justify-end">
        <Button
          type={"button"}
          text="Delete"
          className="w-full p-2 bg-danger-2 text-white font-semibold rounded-lg hover:bg-danger-1 transition-colors"
          icon={faTrashCan}
          iconSize="lg"
        />
        <Button
          type={"button"}
          text="Save"
          className="w-full p-2 bg-primary-2 text-white font-semibold rounded-lg hover:bg-primary-1 transition-colors"
          icon={faFloppyDisk}
          iconSize="lg"
        />
      </div>
    </div>
  );
};

export default Drawer;
