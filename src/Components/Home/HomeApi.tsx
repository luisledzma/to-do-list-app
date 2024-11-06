import { forwardRef, useContext, useImperativeHandle } from "react";
import { GlobalContext } from "../../Common/GlobalContext";
import Utilities from "../../Common/Utilities";
import { ApiPaths } from "../../Models/Enum";

const HomeApi = forwardRef(
  ({ onPageDataLoaded }: any, ref: any): JSX.Element => {
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // useState, useRef, useContext, etc.
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const { setIsBusy } = useContext(GlobalContext);
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // useEffect
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Misc Methods
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const getTasksByListId = async (listId: string): Promise<any> => {
      const result = await Utilities.GET(ApiPaths.GetTask + listId);
      return result;
    };

    const updateList = async (
      listId?: string,
      title?: string,
      icon?: string
    ): Promise<any> => {
      const body = {
        ...(title && { title }),
        ...(icon && { icon }),
      };
      const result = await Utilities.PATCH(ApiPaths.PatchList + listId, body);
      return result;
    };

    const addTask = async (
      listId?: string,
      title?: string,
      completed?: boolean,
      dueDate?: Date,
      description?: string
    ): Promise<any> => {
      const body = {
        ...(listId && { listId }),
        ...(title && { title }),
        ...(completed && { completed }),
        ...(dueDate && { dueDate }),
        ...(description && { description }),
      };
      const result = await Utilities.POST(ApiPaths.PostTask, body);
      return result;
    };

    const updateTask = async (
      id?: string,
      completed?: boolean
    ): Promise<any> => {
      const body = {
        completed,
      };
      const result = await Utilities.PATCH(ApiPaths.PatchTask + id, body);
      return result;
    };

    ///////////////////////////////////////////////////////////////////////////////
    // Imperative Handle for accessing the child methods from parent using ref
    ///////////////////////////////////////////////////////////////////
    useImperativeHandle(ref, () => ({
      async loadPageData(listId: string): Promise<any> {
        setIsBusy(true);
        return Promise.all([getTasksByListId(listId)])
          .then((results) => {
            return results[0];
          })
          .finally(() => setIsBusy(false));
      },
      async updateList(
        listId?: string,
        title?: string,
        icon?: string
      ): Promise<any> {
        setIsBusy(true);
        return Promise.all([updateList(listId, title, icon)])
          .then((results) => {
            return results;
          })
          .finally(() => setIsBusy(false));
      },
      async addTask(
        listId?: string,
        title?: string,
        completed?: boolean,
        dueDate?: Date,
        description?: string
      ): Promise<any> {
        setIsBusy(true);
        return Promise.all([
          addTask(listId, title, completed, dueDate, description),
        ])
          .then((results) => {
            return results;
          })
          .finally(() => setIsBusy(false));
      },
      async updateTask(id: string, completed: boolean): Promise<any> {
        setIsBusy(true);
        return Promise.all([updateTask(id, completed)])
          .then((results) => {
            return results;
          })
          .finally(() => setIsBusy(false));
      },
    }));

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Component's render method
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return <div></div>;
  }
);

export default HomeApi;
