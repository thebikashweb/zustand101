

//types
type TodoType = {
  id: number
  name: string
  completed:boolean  
}
type TodosType = Array<TodoType>

export type TodosStoreType = {
  todos: TodosType
  addTodo:(todo:TodoType)=>void
  delTodo:(id:number)=>void
  updateTodo:(todo:TodoType)=>void
}
  

  

const todoStore = (set:any):TodosStoreType => ({
  todos: [{ id: 1, name: "first todo", completed: false }],
  addTodo:(todo:TodoType) => set((state:TodosStoreType) => ({todos:[todo,...state.todos]})),
  delTodo: (id: number) => set((state: TodosStoreType) => ({ todos: state.todos.filter(t => t.id !== id) })),
  updateTodo: (todo: TodoType) => set((state: TodosStoreType) => ({
    todos: state.todos.map(t => {
      let _todo=t
      if (t.id === todo.id) {
        _todo=todo
      } 
      return _todo
    })
  }))


})

export default todoStore