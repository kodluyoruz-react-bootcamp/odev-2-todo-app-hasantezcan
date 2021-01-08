import TodoListItem from './TodoListItem';


import cn from "classnames";

function TodoList({ todos, setTodos }) {
	return (
		<>
			<ul class="todo-list">
				{todos.map((todo, i) => (
					<li key={i} className={cn(todo.isDone && "completed")}>
						<div class="view">
							<TodoListItem
								todos={todos}
								todoItem={todo}
								setTodos={setTodos}
								id={i}
							/>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}

export default TodoList;
