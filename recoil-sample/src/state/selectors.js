import { selector } from "recoil";
import { todoListFilterState, todoListState } from "./atoms";

export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({ get }) => {

        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case 'completed':
                return list.filter((item) => item.isCompleted);
            case 'uncompleted':
                return list.filter((item) => !item.isCompleted);
            default:
                return list;
        }
    }
})