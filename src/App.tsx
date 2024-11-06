import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import { GlobalContext } from "./Common/GlobalContext";
import Home from "./Components/Home/Home";
import Button from "./Components/ReusableComponents/Button/Button";
import Drawer from "./Components/ReusableComponents/Drawer/Drawer";
import SideBar from "./Components/ReusableComponents/SideBar/SideBar";
import Spinner from "./Components/ReusableComponents/Spinner/Spinner";
import { GlobalContextModel } from "./Models/GlobalContextModel";
import { Task } from "./Models/Models";

function App() {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useState, useRef, useContext, etc.
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isDataUpdated, setIsDataUpdated] = useState<boolean>(false);
  const [isDataTaskUpdated, setIsDataTaskUpdated] = useState<boolean>(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<Task>();
  const [isBusyMessage, setIsBusyMessage] = useState<string>(
    "Loading, please wait..."
  );
  const [globalContext, setGlobalContext] = useState<GlobalContextModel>({
    setIsBusy(show, message) {
      setIsBusySpinner(show, message);
    },
    setIsDrawerOpen(isOpen) {
      setIsDrawerOpen(isOpen);
    },
    setIsDataUpdated(isUpdated) {
      setIsDataUpdated(isUpdated);
    },
    setIsDataTaskUpdated(isUpdated) {
      setIsDataTaskUpdated(isUpdated);
    },
    setIsSidebarOpen(isOpen) {
      setSidebarOpen(isOpen);
    },
    setSelectedTask(task) {
      setSelectedTask(task);
    },
  });
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Misc Methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const onCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  const onCloseSideBar = () => {
    setSidebarOpen(false);
  };
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const setIsBusySpinner = (show: boolean, message?: string) => {
    setIsBusy(show);
    if (message) setIsBusyMessage(message);
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useEffect for Context
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    const clone = JSON.parse(
      JSON.stringify(globalContext)
    ) as GlobalContextModel;
    clone.setIsBusy = setIsBusy;
    clone.setIsDrawerOpen = setIsDrawerOpen;
    clone.setIsDataUpdated = setIsDataUpdated;
    clone.setIsDataTaskUpdated = setIsDataTaskUpdated;
    clone.setIsSidebarOpen = setSidebarOpen;
    clone.setSelectedTask = setSelectedTask;
    setGlobalContext(clone);
  }, []);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Component's render method
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="dark:bg-background-dark1 ">
      <Spinner isBusy={isBusy} message={isBusyMessage}></Spinner>
      <GlobalContext.Provider value={globalContext}>
        <Button
          onClick={toggleSidebar}
          icon={faBars}
          iconSize="2x"
          type={"button"}
          className="absolute inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        />
        {isSidebarOpen ? (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={onCloseSideBar}
            ></div>
            <div className="fixed left-0 top-0 h-full z-50">
              <SideBar
                onCloseSideBar={onCloseSideBar}
                isSidebarOpen={isSidebarOpen}
                isDataUpdated={isDataUpdated}
              />
            </div>
          </>
        ) : (
          <SideBar
            onCloseSideBar={onCloseSideBar}
            isSidebarOpen={isSidebarOpen}
            isDataUpdated={isDataUpdated}
          />
        )}
        <div className="flex w-screen h-screen">
          <div className={`flex-grow ${isDrawerOpen ? "sm:mr-80" : "mr-0"} `}>
            <Router>
              <Routes>
                <Route
                  path="/:id"
                  element={<Home isDataTaskUpdated={isDataTaskUpdated} />}
                />
              </Routes>
            </Router>
          </div>

          {isDrawerOpen && (
            <>
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={onCloseDrawer}
              ></div>
              <div className="w-80 fixed right-0 top-0 h-full z-50">
                <Drawer
                  onCloseDrawer={onCloseDrawer}
                  isDrawerOpen={isDrawerOpen}
                  selectedTask={selectedTask}
                />
              </div>
            </>
          )}
        </div>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
