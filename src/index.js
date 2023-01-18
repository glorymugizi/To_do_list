// import _ from "lodash";
import './style.css';
import todoArr from './modules/tasks.js';

const toDoItems = document.querySelector('.to-do-items');

const loadList = () => {
  const sortedArray = todoArr.sort((a, b) => a.index - b.index);
  sortedArray.forEach((task) => {
    const { description } = task;
    toDoItems.innerHTML += `<div class="checkbox-section">
      <div><input type="checkbox" id="" name="" class="checkbox"/>
      <label for="" name="">${description}</label> </div><i class="fa fa-ellipsis-v"></i>
    </div>`;
  });
};

document.addEventListener('DOMContentLoaded', loadList);
