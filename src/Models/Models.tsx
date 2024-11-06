export class Task {
  _id?: string;
  title?: string;
  description?: string;
  completed?: false;
  listId?: List;
  dueDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;

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

  constructor(obj: any) {
    if (!obj) {
      return;
    }

    Object.assign(this, obj);
  }
}
