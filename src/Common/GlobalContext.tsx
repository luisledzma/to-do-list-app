import { createContext } from "react";
import { GlobalContextModel } from "../Models/GlobalContextModel";

export const GlobalContext = createContext<GlobalContextModel>({
  setIsBusy(show, message?) {},
  setIsDrawerOpen(isOpen) {},
  setIsDataUpdated(isUpdated) {},
  setIsDataTaskUpdated(isUpdated) {},
  setIsSidebarOpen(isOpen) {},
  setSelectedTask(task) {},
});
