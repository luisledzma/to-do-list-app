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

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [isBusyMessage, setIsBusyMessage] = useState<string>(
    "Loading, please wait..."
  );
  const [globalContext, setGlobalContext] = useState<GlobalContextModel>({
    setIsBusy(show, message) {
      setIsBusySpinner(show, message);
    },
  });

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

  useEffect(() => {
    const clone = JSON.parse(
      JSON.stringify(globalContext)
    ) as GlobalContextModel;
    // Set setIsBusy
    clone.setIsBusy = setIsBusy;
    setGlobalContext(clone);
  }, []);

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
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={onCloseSideBar} // Closes the sidebar on backdrop click
            ></div>

            {/* Sidebar */}
            <div className="fixed left-0 top-0 h-full z-50">
              <SideBar
                onCloseSideBar={onCloseSideBar}
                isSidebarOpen={isSidebarOpen}
              />
            </div>
          </>
        ) : (
          <SideBar
            onCloseSideBar={onCloseSideBar}
            isSidebarOpen={isSidebarOpen}
          />
        )}
        {/* <SideBar /> */}
        <div className="flex w-screen h-screen">
          <div className={`flex-grow ${isDrawerOpen ? "sm:mr-80" : "mr-0"} `}>
            <Router>
              <Routes>
                <Route
                  path="/:id"
                  element={<Home setIsDrawerOpen={setIsDrawerOpen} />}
                />
              </Routes>
            </Router>
          </div>

          {isDrawerOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={onCloseDrawer}
              ></div>

              {/* Drawer */}
              <div className="w-80 fixed right-0 top-0 h-full z-50">
                <Drawer
                  onCloseDrawer={onCloseDrawer}
                  isDrawerOpen={isDrawerOpen}
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
