import { rederListItem } from './render.js';
import { getItem, setItem } from './storeage.js';
import { getTasksList, deleteTask } from './taskGetway.js'


export const delTask = () => {

    const deleteBtn = event.target.classList.contains('delete-btn');
    if (!deleteBtn) return;

    const taskId = event.target.parentNode.firstElementChild.dataset.id;

    deleteTask(taskId)
        .then(() => getTasksList())
        .then(newTasksList => {
            setItem('tasksList', newTasksList)
            rederListItem();
        });
};