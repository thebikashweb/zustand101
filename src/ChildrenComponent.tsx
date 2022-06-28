import React from "react"

import useStore from "./store"
const ChildrenComponent = () => {
	const todos = useStore((state) => state.todos)
	const delTodo = useStore((state) => state.delTodo)
	const updateTodo = useStore((state) => state.updateTodo)

	//handle update
	const handleUpdate = (id: number) => {
		let todo = todos.filter((todo) => todo.id === id)[0]
		todo.completed = !todo.completed
		updateTodo(todo)
	}

	return (
		<div>
			{todos.map((todo) => (
				<p>
					<input
						type="checkbox"
						checked={todo.completed}
						onClick={() => handleUpdate(todo.id)}
					/>{" "}
					{todo.name} <button onClick={() => delTodo(todo.id)}>Delete</button>
				</p>
			))}
		</div>
	)
}

export default ChildrenComponent
