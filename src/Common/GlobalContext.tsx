import { createContext } from "react";
import { GlobalContextModel } from "../Models/GlobalContextModel";

export const GlobalContext = createContext<GlobalContextModel>({
  setIsBusy(show, message?) {},
});
