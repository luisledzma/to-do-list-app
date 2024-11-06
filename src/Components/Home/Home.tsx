import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Common/GlobalContext";
import { HomeImperativeModel } from "../../Models/ImperativeModel";
import { ListTask } from "../../Models/Models";
import CheckBox from "../ReusableComponents/CheckBox/CheckBox";
import InputText from "../ReusableComponents/Input/InputText";
import "./Home.scoped.scss";
import HomeApi from "./HomeApi";

export type HomeProps = {
  isDataTaskUpdated: boolean;
};

const Home = ({ isDataTaskUpdated }: HomeProps): JSX.Element => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useState, useRef, useContext, etc.
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const api = useRef<HomeImperativeModel>();
  const [listTitle, setListTitle] = useState<string>("");
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [data, setData] = useState<ListTask>({
    _id: "",
    title: "",
    icon: "",
    tasks: [],
  });
  const { id } = useParams();
  const { setIsDataUpdated, setIsDataTaskUpdated } = useContext(GlobalContext);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useEffect
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

  const onAddTask = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      await api.current?.addTask(id, taskTitle, false, undefined, "");
      setIsDataUpdated(true);
      setIsDataTaskUpdated(true);
      setTaskTitle("");
    }
  };

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Callback methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const onPageDataLoaded = useCallback(async () => {
    if (id) {
      const listTaskData = await api.current?.loadPageData(id);
      setData(listTaskData);
    }
  }, [id]);

  useEffect(() => {
    onPageDataLoaded();
  }, [onPageDataLoaded]);

  useEffect(() => {
    onPageDataLoaded();
    setIsDataTaskUpdated(false);
  }, [isDataTaskUpdated, onPageDataLoaded, setIsDataTaskUpdated]);

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
                    value={item.completed}
                    item={item}
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
              value={taskTitle}
              placeholder="Add a task"
              onKeyDown={onAddTask}
              onChange={handleTaskChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
