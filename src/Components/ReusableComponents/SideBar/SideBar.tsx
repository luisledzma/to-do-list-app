import { faBars, faHouse, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "../Button/Button";
import "./SideBar.scoped.scss";
import SidebarItem from "./SidebarItem/SidebarItem";

export type SideBarProps = {};

const SideBar = (): JSX.Element => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useState, useRef, useContext, etc.
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useEffect
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Misc Methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Callback methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Component's render method
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <Button
        onClick={toggleSidebar}
        icon={faBars}
        iconSize="2x"
        type={"button"}
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      />

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-background-light dark:bg-background-dark3 flex flex-col justify-between">
          <Button
            onClick={toggleSidebar}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 sm:hidden"
            icon={faXmark}
            iconSize="2x"
            type={"button"}
          />

          <div>
            <a href="/home" className="flex items-center ps-2.5 mb-5">
              <img
                src="https://res.cdn.office.net/todo/2151454_2.125.2/icons/logo.png"
                className="h-6 me-3 sm:h-7"
                alt=""
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                To Do List
              </span>
            </a>
            <ul className="space-y-2 font-medium">
              <SidebarItem
                text="Home"
                linkTo="/home"
                icon={faHouse}
              ></SidebarItem>
            </ul>
          </div>

          <div className="mt-4">
            <Button
              onClick={() => {}}
              type={"button"}
              text="New List"
              className="w-full p-3 bg-primary-2 text-gray-100 font-semibold rounded-lg hover:bg-primary-1 transition-colors"
            ></Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
