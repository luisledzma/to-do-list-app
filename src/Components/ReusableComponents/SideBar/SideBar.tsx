import {
  faListCheck,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { SideBarImperativeModel } from "../../../Models/ImperativeModel";
import { List } from "../../../Models/Models";
import Button from "../Button/Button";
import "./SideBar.scoped.scss";
import SideBarApi from "./SideBarApi";
import SidebarItem from "./SidebarItem/SidebarItem";

export type SideBarProps = {
  isSidebarOpen: boolean;
  onCloseSideBar: () => void;
};

const SideBar = ({
  isSidebarOpen,
  onCloseSideBar,
}: SideBarProps): JSX.Element => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useState, useRef, useContext, etc.
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const api = useRef<SideBarImperativeModel>();
  const [listData, setListData] = useState<List[]>([]);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useEffect
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    onPageDataLoaded();
  }, []);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Misc Methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Callback methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const onPageDataLoaded = async () => {
    const newList: List[] = await api.current?.loadPageData();
    setListData(newList);
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Component's render method
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <SideBarApi ref={api}></SideBarApi>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-background-light dark:bg-background-dark3 flex flex-col justify-between">
          <Button
            onClick={onCloseSideBar}
            className="absolute top-3 right-3 dark:text-gray-500 dark:hover:text-gray-300 sm:hidden"
            icon={faXmark}
            iconSize="2x"
            type={"button"}
          />

          <div>
            {/* <Skeleton listCount={4}></Skeleton> */}
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
              {listData.map((item, index) => (
                <SidebarItem
                  key={index}
                  text={item.title}
                  linkTo={item._id}
                  icon={faListCheck}
                ></SidebarItem>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <Button
              onClick={() => {}}
              type={"button"}
              text="New List"
              className="w-full p-2 dark:bg-primary-2 dark:text-white font-semibold rounded-lg dark:hover:bg-primary-1 transition-colors"
              icon={faPlus}
            ></Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
