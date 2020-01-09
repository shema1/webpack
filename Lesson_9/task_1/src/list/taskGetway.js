const baseUrl = 'https://crudcrud.com/api/ba35df2b7b054e84b67696352e9434db/tasks';

const mapTasks = (tasks) => tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id }));

export const getTasksList = () => fetch(baseUrl)
  .then((response) => response.json())
  .then((tasks) => mapTasks(tasks));

export const creatTask = (taskData) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(taskData),
});


export const updateTask = (taskId, updateTaskData) => fetch(`${baseUrl}/${taskId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(updateTaskData),
});

export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, {
  method: 'DELETE',
});
