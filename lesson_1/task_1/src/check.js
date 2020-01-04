// const chBox = document.querySelector('.list')
// const check = (event) => {
//     let target = event.target
//     if (target.tagName != 'INPUT') {
//         console.log('не туда тикнув ')
//         return
//     };

//     let element = task.find(elemId => elemId.id === +target.parentElement.id);
//     element.done = target.checked;
//     element.dataCheck = element.done ? new Date() : undefined;
//     console.log(target)

//     localStorage.setItem('items', JSON.stringify(task))

//     rederListItem(task);

// }

// chBox.addEventListener('click', check);