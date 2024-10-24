import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CheckBox from "../ReusableComponents/CheckBox/CheckBox";
import InputText from "../ReusableComponents/Input/InputText";
import "./Home.scoped.scss";

export type HomeProps = {};

const Home = (): JSX.Element => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useState, useRef, useContext, etc.
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useEffect
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
    <div className="sm:ml-64 p-6 h-screen transition-all duration-300 flex flex-col justify-between">
      <div className="mb-6 mt-6">
        <h1 className="dark:text-gray-100 ">Home Page</h1>
      </div>

      <div className="w-full dark:text-white flex-grow">
        <div className="w-full mt-auto dark:bg-background-dark3">
          <div className="dark:bg-background-dark3 rounded-lg p-4 shadow-md flex justify-start">
            <CheckBox text="Do the laundry" value={true}></CheckBox>
          </div>
        </div>
      </div>
      <div className="w-full mt-auto dark:bg-background-dark3">
        <div className="dark:bg-background-dark3 rounded-lg p-4 shadow-md flex justify-start">
          <FontAwesomeIcon
            className="dark:text-primary-2 "
            size="xl"
            icon={faSquareCheck}
          />
          <InputText
            className={
              "w-full pl-3 dark:bg-transparent dark:text-white dark:placeholder:text-gray-400 border-0 focus:outline-none focus:ring-0"
            }
            placeholder="Add a task"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
