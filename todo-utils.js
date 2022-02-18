function generateTodo (innerText) {
	let newDiv = document.createElement('div');
	newDiv.classList.add('todo');
	newDiv.insertAdjacentHTML(`afterbegin`,   
	`
	<p class="todo__text">${innerText}</p>
	<div class ="container-todo">
	<i class="fas fa-trash"></i>
	<i class="far fa-check-circle"></i>
	</div>
	`);
	return newDiv;
};



export function addTodo (userInput, container, todoContainer) {
	if(userInput.value === '') {
		return;
	}

	let newTodo = generateTodo(userInput.value);
	let id = Math.random();
	newTodo.id = id;
	let todoModel = {
		id,
		text: userInput.value,
		done: false,
		time: new Date()
	}
	todoContainer.push(todoModel);

	userInput.value = '';

	userInput.focus();

	container.append(newTodo);
}