import { atom } from "recoil"

export const todoListState = atom({
    key: 'todoListState',
    default: [
        { name: 'Apple', isCompleted: false },
        { name: 'Egg', isCompleted: false },
        { name: 'Butter', isCompleted: false },
    ]
})

export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All',
})