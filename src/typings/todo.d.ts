type TodoInfo = {
  id: number,
  todo: string,
};

type Todo = {
  username: string,
  isDone: boolean,
  hasAttachment: boolean,
} & TodoInfo;
