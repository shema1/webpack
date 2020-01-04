import { initTodoListHandlers } from './todoList.js';
import { rederListItem } from './render.js';
import { getTasksList } from './taskGetway.js';
import { setItem } from './storeage.js';




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