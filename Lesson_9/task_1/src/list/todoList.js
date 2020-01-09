import { add } from './createTask';
import { onToggleTask } from './updateTask';
import { delTask } from './deleteTask';

const initTodoListHandlers = () => {
    const btnAdd = document.querySelector('.create-task-btn');
    btnAdd.addEventListener('click', add);


    const todoListElem = document.querySelector('.list');
    todoListElem.addEventListener('click', onToggleTask);
    todoListElem.addEventListener('click', delTask);
};

export { initTodoListHandlers };