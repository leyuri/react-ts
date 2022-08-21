const NewTodo = () => {
  const submitHander = (event: React.FormEvent) => {
    event.preventDefault()
  }
  return (
    <form onSubmit={submitHander}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text"/>
      <button>Add Todo</button>
    </form >
  ) 
}

export default NewTodo;