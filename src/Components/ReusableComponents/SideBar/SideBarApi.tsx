import { forwardRef, useContext, useImperativeHandle } from "react";
import { GlobalContext } from "../../../Common/GlobalContext";
import Utilities from "../../../Common/Utilities";
import { ApiPaths } from "../../../Models/Enum";

const SideBarApi = forwardRef(
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

    const getLists = async (): Promise<any> => {
      const result = await Utilities.GET(ApiPaths.GetList);
      return result;
    };
    ///////////////////////////////////////////////////////////////////////////////
    // Imperative Handle for accessing the child methods from parent using ref
    ///////////////////////////////////////////////////////////////////
    useImperativeHandle(ref, () => ({
      async loadPageData(): Promise<any> {
        setIsBusy(true);
        return Promise.all([getLists()])
          .then((results) => {
            return results[0];
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

export default SideBarApi;