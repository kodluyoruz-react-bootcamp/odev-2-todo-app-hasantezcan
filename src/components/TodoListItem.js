import React from "react";

function TodoListItem({ todos, todoItem, setTodos, id }) {
	function toggleHandleCheckbox() {
		setTodos(
			todos.map((todo, i) =>
				i === id ? { ...todo, isDone: !todoItem.isDone } : todo
			)
		);
	}

	function deleteTodo() {
		setTodos(todos.filter((todo, i) => i !== id));
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
			<button
				onClick={deleteTodo}
				class="destroy"
			></button>
		</>
	);
}

export default TodoListItem;
