import { useState, useEffect } from "react";

function TodoListItem({ todos, todoItem, setTodos, id }) {
	const [newTodo, setNewTodo] = useState(todoItem.content);
	const [editButtonIsVisable, setEditButtonIsVisable] = useState(false);

	useEffect(() => {
		setNewTodo(todoItem.content);
	}, [todoItem]);

	function toggleHandleCheckbox() {
		setTodos(
			todos.map((todo, i) =>
				i === id ? { ...todo, isDone: !todoItem.isDone } : todo
			)
		);
		setEditButtonIsVisable(false);
	}

	function deleteTodo() {
		setTodos(todos.filter((todo, i) => i !== id));
	}

	// -----

	function handleNewTodo(event) {
		setNewTodo(event.target.value);
	}

	function handleTodos(event) {
		if (event.charCode === 13) {
			event.preventDefault();

			setTodos(
				todos.map((todo, i) =>
					i === id ? { ...todo, content: newTodo } : todo
				)
			);
		}
	}

	function handleEdit() {
		setEditButtonIsVisable(!editButtonIsVisable);
	}

	return (
		<>
			<input
				onClick={toggleHandleCheckbox}
				property="done"
				class="toggle"
				type="checkbox"
			/>
			<label property="text">
				{todoItem.content}{" "}
				<span
					class="edit-button"
					onClick={() => {
						handleEdit();
					}}
				>
					(edit)
				</span>
			</label>
			{editButtonIsVisable && (
				<input
					className="edit-input"
					onChange={handleNewTodo}
					onKeyPress={handleTodos}
					value={newTodo}
					type="text"
				></input>
			)}
			<button onClick={deleteTodo} class="destroy"></button>
		</>
	);
}

export default TodoListItem;
