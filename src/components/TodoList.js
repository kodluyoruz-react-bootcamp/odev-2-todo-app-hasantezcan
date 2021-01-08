import TodoListItem from './TodoListItem';

function TodoList({ todos, setTodos }) {
	return (
		<>
			<ul class="todo-list">
				{todos.map((todo, i) => (
					// <li key={i} className="[if(done, 'completed')]">
					<li key={i} className={todo.isDone && done}>
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
