export type List = {
  _id: string;
  title: string;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Task = {
  _id: string;
  title: string;
  description: string;
  completed: false;
  listId: List;
  createdAt: Date;
  updatedAt: Date;
};

export type ListTask = {
  _id?: string;
  title?: string;
  icon?: string;
  tasks?: Task[];
};
