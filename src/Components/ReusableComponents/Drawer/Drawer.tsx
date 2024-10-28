import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import Button from "../Button/Button";
import Datepicker from "../Datepicker/Datepicker";
import "./Drawer.scoped.scss";

export type DrawerProps = {
  isDrawerOpen: boolean;
  onCloseDrawer: () => void;
};

const Drawer = ({ isDrawerOpen, onCloseDrawer }: DrawerProps): JSX.Element => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useState, useRef, useContext, etc.
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useEffect
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    console.log(isDrawerOpen);
  }, [isDrawerOpen]);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Misc Methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
      <h5
        id="drawer-right-label"
        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
      >
        <svg
          className="w-4 h-4 me-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        Task Name
      </h5>
      <Button
        onClick={onCloseDrawer}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        icon={faXmark}
        iconSize="2x"
        type={"button"}
      />

      <Datepicker></Datepicker>
    </div>
  );
};

export default Drawer;
