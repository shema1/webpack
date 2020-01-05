import { add } from './createTask.js';
import { onToggleTask } from './updateTask.js';
import { delTask } from './deleteTask.js';

const initTodoListHandlers = () => {
    const btnAdd = document.querySelector('.create-task-btn')
    btnAdd.addEventListener('click', add)


    const todoListElem = document.querySelector('.list');
    todoListElem.addEventListener('click', onToggleTask);
    todoListElem.addEventListener('click', delTask);
}

export { initTodoListHandlers }