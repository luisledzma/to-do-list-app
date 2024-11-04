import { forwardRef, useContext, useImperativeHandle } from "react";
import { GlobalContext } from "../../../Common/GlobalContext";
import Utilities from "../../../Common/Utilities";
import { ApiPaths } from "../../../Models/Enum";

const DrawerApi = forwardRef(
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

    const updateTask = async (
      id: string,
      title?: string,
      dueDate?: Date,
      description?: string
    ): Promise<any> => {
      const body = {
        ...(title && { title }),
        ...(dueDate && { dueDate }),
        ...(description && { description }),
      };
      const result = await Utilities.PATCH(ApiPaths.PatchTask + id, body);
      return result;
    };

    const deleteTask = async (id: string): Promise<any> => {
      const result = await Utilities.DELETE(ApiPaths.PatchTask + id);
      return result;
    };
    ///////////////////////////////////////////////////////////////////////////////
    // Imperative Handle for accessing the child methods from parent using ref
    ///////////////////////////////////////////////////////////////////
    useImperativeHandle(ref, () => ({
      async updateTask(
        id: string,
        title?: string,
        dueDate?: Date,
        description?: string
      ): Promise<any> {
        setIsBusy(true);
        return Promise.all([updateTask(id, title, dueDate, description)])
          .then((results) => {
            return results;
          })
          .finally(() => setIsBusy(false));
      },
      async deleteTask(id: string): Promise<any> {
        setIsBusy(true);
        return Promise.all([deleteTask(id)])
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

export default DrawerApi;
