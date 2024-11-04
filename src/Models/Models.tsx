// export type List = {
//   _id: string;
//   title: string;
//   icon?: string;
//   createdAt?: Date;
//   updatedAt?: Date;
// };

// export type Task = {
//   _id: string;
//   title: string;
//   description: string;
//   completed: false;
//   listId: List;
//   dueDate?: Date;
//   createdAt?: Date;
//   updatedAt?: Date;
// };

// export type ListTask = {
//   _id?: string;
//   title?: string;
//   icon?: string;
//   tasks?: Task[];
// };

export class Task {
  _id?: string;
  title?: string;
  description?: string;
  completed?: false;
  listId?: List;
  dueDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;

  // If you need to add more properties, you can add them here below:

  constructor(obj: any) {
    if (!obj) {
      return;
    }

    Object.assign(this, obj);
  }
}

export class ListTask {
  _id?: string;
  title?: string;
  icon?: string;
  tasks?: Task[];

  // If you need to add more properties, you can add them here below:

  constructor(obj: any) {
    if (!obj) {
      return;
    }

    Object.assign(this, obj);
  }
}

export class List {
  _id?: string;
  title?: string;
  icon?: string;
  createdAt?: Date;
  updatedAt?: Date;

  // If you need to add more properties, you can add them here below:

  constructor(obj: any) {
    if (!obj) {
      return;
    }

    Object.assign(this, obj);
  }
}
