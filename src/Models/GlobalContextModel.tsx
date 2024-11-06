import { Task } from "./Models";

export class GlobalContextModel {
  setIsBusy = (show: boolean, message?: string) => {};
  setIsDrawerOpen = (isOpen: boolean) => {};
  setIsDataUpdated = (isUpdated: boolean) => {};
  setIsDataTaskUpdated = (isUpdated: boolean) => {};
  setIsSidebarOpen = (isOpen: boolean) => {};
  setSelectedTask = (task: Task) => {};
}
