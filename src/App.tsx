import React from "react"

import useStore from "./store"

import "./App.css"
import AddTodo from "./AddTodo"
import ChildrenComponent from "./ChildrenComponent"

function App() {
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
		<div className="App">
			{/** display the input field for adding todo */}
			<AddTodo />
			{/** todo list render */}
			<div>
				<h2>All todos</h2>
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

			<h2>Children component render below</h2>

			<ChildrenComponent />
		</div>
	)
}

export default App
