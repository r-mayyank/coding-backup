import { selector } from "recoil";
import { filterTextAtom } from "./filterTextAtom";
import { todoListState } from "./todoListState";

export const todoFilter = selector({
    key: 'todoFilter',
    get: ({ get }) => {
        const todoList = get(todoListState)
        const filter = get(filterTextAtom).toLowerCase()

        if (!Array.isArray(todoList)) {
            return [{id:1, title:"LLLLL", description:"work"},]; // Return an empty array if not
          }
        return todoList.filter(todo => 
            todo.description.toLowerCase().includes(filter)
        );
    },
})