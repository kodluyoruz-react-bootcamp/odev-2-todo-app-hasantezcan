import React from "react";

function TodoListItem({ todoItem }) {
	return (
		<>
			<input property="done" class="toggle" type="checkbox" />
			<label property="text">{todoItem.content}</label>
			<button class="destroy" mv-action="delete(todo)"></button>
		</>
	);
}

export default TodoListItem;
