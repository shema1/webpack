import { rederListItem } from './render.js';
import { getItem, setItem } from './storeage.js';
import { creatTask, getTasksList } from './taskGetway.js';

const add = () => {
    let inputValue = document.querySelector('.task-input')

    // let taskList = getItem('taskList') || [];


    const newTask = {
        text: inputValue.value,
        done: false,
        date: new Date(),
    }
    creatTask(newTask)
        .then(() => getTasksList())
        .then(newTasksList => {
            setItem('tasksList', newTasksList);
            rederListItem();
        })

    inputValue.value = '';

}



export { add }