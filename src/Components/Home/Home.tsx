import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { HomeImperativeModel } from "../../Models/ImperativeModel";
import { ListTask } from "../../Models/Models";
import CheckBox from "../ReusableComponents/CheckBox/CheckBox";
import InputText from "../ReusableComponents/Input/InputText";
import "./Home.scoped.scss";
import HomeApi from "./HomeApi";

export type HomeProps = {
  setIsDrawerOpen: any;
  setIsDataUpdated: any;
  setSelectedTask: any;
};

const Home = ({
  setIsDrawerOpen,
  setIsDataUpdated,
  setSelectedTask,
}: HomeProps): JSX.Element => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useState, useRef, useContext, etc.
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const api = useRef<HomeImperativeModel>();
  const [listTitle, setListTitle] = useState<string>("");
  const [data, setData] = useState<ListTask>({
    _id: "",
    title: "",
    icon: "",
    tasks: [],
  });
  const { id } = useParams();

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useEffect
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    onPageDataLoaded();
  }, []);

  useEffect(() => {
    if (data.title !== undefined) {
      setListTitle(data.title);
    }
  }, [data]);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Misc Methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setListTitle(e.target.value);
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      await api.current?.updateList(id, listTitle);
      setIsDataUpdated(true);
    }
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Callback methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const onPageDataLoaded = async () => {
    if (id) {
      const listTaskData: ListTask = await api.current?.loadPageData(id);
      setData(listTaskData);
    }
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Component's render method
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <HomeApi ref={api}></HomeApi>
      <div className="sm:ml-64 p-6 h-screen transition-all duration-300 flex flex-col justify-between">
        <div className="mb-6 mt-6">
          <InputText
            className={
              "w-full text-4xl font-bold dark:bg-transparent dark:text-white dark:placeholder:text-gray-400 border-0 focus:outline-none focus:ring-0"
            }
            value={listTitle}
            placeholder="Add a list name"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div>
          {data?.tasks?.map((item, index) => (
            <div key={index} className="w-full dark:text-white flex-grow mb-3">
              <div className="w-full mt-auto dark:bg-background-dark3">
                <div className="dark:bg-background-dark3 rounded-lg p-4 shadow-md flex justify-start">
                  <CheckBox
                    text={item.title}
                    setIsDrawerOpen={setIsDrawerOpen}
                    value={item.completed}
                    item={item}
                    setSelectedTask={setSelectedTask}
                  ></CheckBox>
                </div>
              </div>
            </div>
          ))}
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
    </>
  );
};

export default Home;
