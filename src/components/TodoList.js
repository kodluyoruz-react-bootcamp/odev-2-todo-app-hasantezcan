import TodoListItem from './TodoListItem';


import cn from "classnames";

function TodoList({ todos, setTodos }) {
	return (
		<>
			<ul class="todo-list">
				{todos.map((todo, i) => (
					<li key={i} className={cn(todo.isDone && "completed")}>
						<div class="view">
							<TodoListItem todoItem={todo} />
						</div>
					</li>
				))}
			</ul>
		</>
	);
}

export default TodoList;
