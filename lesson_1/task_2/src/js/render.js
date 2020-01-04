import { getItem } from './storeage.js';

const rederListItem = () => {

    const listElement = document.querySelector('.list');

    const listItem = getItem('tasksList') || [];
    listElement.innerHTML = '';
    const listItemElements = listItem
        .sort((a, b) => b.date - a.date)
        .sort((a, b) => a.done - b.done)
        .sort((a, b) => b.dataCheck - a.dataCheck)
        .map(({ id, text, done }) => {
            const listItemElem = document.createElement('li')
            listItemElem.classList.add('list__item');
            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.setAttribute('data-id', id);
            checkboxElem.checked = done;
            listItemElem.setAttribute('id', `${id}`);
            const deleteBtnElem = document.createElement('button');
            deleteBtnElem.classList.add('delete-btn')
            if (done) listItemElem.classList.add('list__item_done')
            checkboxElem.classList.add('list__item-checkbox')
            listItemElem.append(checkboxElem, text, deleteBtnElem)
            return listItemElem
        });

    listElement.append(...listItemElements)
}

export { rederListItem }