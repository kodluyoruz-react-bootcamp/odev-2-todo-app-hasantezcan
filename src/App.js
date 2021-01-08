import { useState } from "react";

import "./App.css";

import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

function App() {
	const [todos, setTodos] = useState([
		{ content: "abbas", isDone: false },
		{ content: "abbas2", isDone: false },
	]);

	return (
		<div className="todoapp">
			<header className="header">
				<h1>TODOS</h1>
				<NewTodo todos={todos} setTodos={setTodos}></NewTodo>
			</header>

			<TodoList todos={todos} setTodos={setTodos}></TodoList>

			<footer class="info">
				<p>Click to edit a todo</p>
				<p>
					Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
				</p>
				<p>
					Part of <a href="http://todomvc.com">TodoMVC</a>
				</p>
			</footer>
		</div>
	);
}

export default App;
