export type HomeImperativeModel = {
  loadPageData(listId: string): Promise<any>;
  updateList(listId?: string, title?: string, icon?: string): Promise<any>;
};

export type SideBarImperativeModel = {
  loadPageData(): Promise<any>;
};

export type DrawerImperativeModel = {
  updateTask(
    id: string,
    title?: string,
    dueDate?: Date,
    description?: string
  ): Promise<any>;
  deleteTask(id: string): Promise<any>;
};
