// import _ from "lodash";
import './style.css';
import todoArr from './modules/tasks.js';

const toDoItems = document.querySelector('.to-do-items');

todoArr.forEach((task) => {
  const { description } = task;
  toDoItems.innerHTML += `<div>
    <input type="checkbox" id="" name="" />
    <label for="" name="">${description}</label>
  </div>`;
});
