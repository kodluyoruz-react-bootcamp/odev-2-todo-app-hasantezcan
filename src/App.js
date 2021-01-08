import { useState } from "react";

import "./App.css";

import NewTodo from "./components/NewTodo";

function App() {
	const [todos, setTodos] = useState([
		{ content: "abbas" },
		{ content: "abbas2" },
	]);

	return (
		<div className="todoapp">
			<header className="header">
				<h1>TODOS</h1>
				<NewTodo todos={todos} setTodos={setTodos}></NewTodo>
			</header>

			{todos.map((todo, i) => (
				<li key={i}>{todo.content}</li>
			))}

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
