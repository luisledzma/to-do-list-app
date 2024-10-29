import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Components/Home/Home";
import Drawer from "./Components/ReusableComponents/Drawer/Drawer";
import SideBar from "./Components/ReusableComponents/SideBar/SideBar";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const onCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="dark:bg-background-dark1 ">
      <SideBar />
      <div className="flex w-screen h-screen">
        <div className={`flex-grow ${isDrawerOpen ? "sm:mr-80" : "mr-0"} `}>
          <Router>
            <Routes>
              <Route
                path="/home"
                element={<Home setIsDrawerOpen={setIsDrawerOpen} />}
              />
            </Routes>
          </Router>
        </div>

        {isDrawerOpen && (
          <div className="w-80 fixed right-0 top-0 h-full ">
            <Drawer onCloseDrawer={onCloseDrawer} isDrawerOpen={isDrawerOpen} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
