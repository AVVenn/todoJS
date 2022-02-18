import { addTodo } from "./todo-utils.js";

const userInput = document.querySelector(`.user-input`);
const addBtn = document.querySelector(`.add`);
const container = document.querySelector(`.container-to-do`);
const todoContainer = [];

addBtn.addEventListener(`click`, (e) => addTodo(userInput, container , todoContainer));

userInput.addEventListener('keydown', ({keyCode}) => {
    if (keyCode === 13) {
        addTodo(userInput,container, todoContainer);
    }
});

container.addEventListener(`click`, ({target}) => {
	if (target.classList.contains(`fa-trash`)) {
		target.closest('.todo').remove();
	}
});

container.addEventListener(`click`, ({target}) => {
	if(target.classList.contains(`fa-check-circle`)) {
		const clickedTodo = todoContainer.find((item) => String(item.id) === String(target.closest(`.todo`).id))
		console.log(target.closest(`.todo`).id)
		console.log(clickedTodo);
		clickedTodo.done = !clickedTodo.done;

		if(clickedTodo.done) {
			target.closest(`.todo`).classList.add(`done`);
			target.classList.replace('far', 'fas');
		} else {
			target.closest(`.todo`).classList.remove('done');
			target.classList.replace('fas', 'far');
	}
	}
})












