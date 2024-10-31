export type HomeImperativeModel = {
  loadPageData(listId: string): Promise<any>;
};

export type SideBarImperativeModel = {
  loadPageData(): Promise<any>;
};
