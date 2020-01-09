import { initTodoListHandlers } from './list/todoList.js';
import { rederListItem } from './list/render.js';
import { getTasksList } from './list/taskGetway.js';
import { setItem } from './list/storeage.js';
import './index.scss'




document.addEventListener('DOMContentLoaded', () => {
    getTasksList()
        .then(tasksList => {
            setItem('tasksList', tasksList)
            rederListItem();
        });
    // rederListItem();
    initTodoListHandlers();
});

function onStorageChange(event) {
    if (event.key === 'tasksList') rederListItem();;
};



window.addEventListener('storage', onStorageChange);