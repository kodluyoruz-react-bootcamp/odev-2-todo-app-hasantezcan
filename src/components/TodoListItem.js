import React from "react";

function TodoListItem({ todos, todoItem, setTodos, id }) {
	function toggleHandleCheckbox() {
		let updatedTodo = { ...todoItem, isDone: !todoItem.isDone };
		console.log("KEY", id);
		setTodos(
			todos.map((todo, i) =>
				i === id ? { ...todo, isDone: !todoItem.isDone } : todo
			)
		);
	}

	return (
		<>
			<input
				onClick={toggleHandleCheckbox}
				property="done"
				class="toggle"
				type="checkbox"
			/>
			<label property="text">{todoItem.content}</label>
			<button class="destroy" mv-action="delete(todo)"></button>
		</>
	);
}

export default TodoListItem;
