import { action } from "easy-peasy";


export default {
  todos: [
    {
      id: 1,
      title: "Take out the trash",
      completed: true,
    },
    {
      id: 2,
      title: "Grocery shopping",
      completed: false,
    },
    {
      id: 3,
      title: "Clean gecko tank",
      completed: false,
    },
  ],

  //actions
  toggle: action((state, id) => {
    state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
  }),
  remove: action((state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  })
};
