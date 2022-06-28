import React from "react"

import useStore from "./store"
const AddTodo = () => {
	const addTodo = useStore((state) => state.addTodo)

	//todo state for input value
	const [name, setName] = React.useState("")

	const handleAddTodo = () => {
		let _tempTodo = {
			id: Math.ceil(Math.random() * 10000),
			name: name,
			completed: false,
		}
		addTodo(_tempTodo)
	}

	return (
		<div>
			<input
				placeholder="writing a book.."
				type="text"
				name="todo"
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={handleAddTodo}>Add todo</button>
		</div>
	)
}

export default AddTodo
