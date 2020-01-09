import { rederListItem } from './render.js';
import { getItem, setItem } from './storeage.js';
import { updateTask, getTasksList } from './taskGetway.js'

function onToggleTask(event) {

    const isCheckbox = event.target.classList.contains('list__item-checkbox');

    if (!isCheckbox) return;

    const taskId = event.target.dataset.id;

    const tasksList = getItem('tasksList');

    const { text, date } = tasksList
        .find(task => task.id === taskId);

    const done = event.target.checked;

    const updatedTask = {
        text,
        date,
        done,
    };

    updateTask(taskId, updatedTask)
        .then(() => getTasksList())
        .then(newTasksList => {
            setItem('tasksList', newTasksList)
            rederListItem();
        });
};

export { onToggleTask };