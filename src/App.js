import { useState } from "react";

import "./App.css";

import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import FooterBar from "./components/FooterBar";
import Title from "./components/Title";

function App() {
	const [filter, setFilter] = useState(0);

	const [todos, setTodos] = useState([
		{ content: "camasirlari as", isDone: false },
		{ content: "yemek yap", isDone: true },
		{ content: "kahve yap", isDone: true },
	]);

	return (
		<>
			<div className="todoapp">
				<header className="header">
					<Title />
					<NewTodo todos={todos} setTodos={setTodos}></NewTodo>
				</header>

				<TodoList filter={filter} todos={todos} setTodos={setTodos}></TodoList>

				<FooterBar filter={filter} setFilter={setFilter} todos={todos} />
			</div>

			<footer class="info">
				<p>Click to edit a todo</p>
				<p>
					Created by <a href="https://hasantezcan.dev/">Hasan Tezcan</a>
				</p>
				<p>
					Part of 
					<a href="https://github.com/hasantezcan/kodluyoruz-react-bootcamp">
						Kodluyoruz React Bootcamp
					</a>
				</p>
			</footer>
		</>
	);
}

export default App;
