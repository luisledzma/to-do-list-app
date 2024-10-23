import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Components/Home/Home";
import SideBar from "./Components/ReusableComponents/SideBar/SideBar";

function App() {
  return (
    <div className="dark:bg-background-dark1">
      <SideBar></SideBar>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
