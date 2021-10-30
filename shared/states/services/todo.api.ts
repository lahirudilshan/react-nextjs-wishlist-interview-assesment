import defaultAxios from 'axios'

const axios = defaultAxios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: { 'Content-Type': 'application/json' }
});

// Get All Todos
export const getAllTodos = async () => {
    try {
        const todos = await axios.get<any>('todos?_limit=5')

        return todos.data
    } catch (err) {
        return console.error(err)
    }
}

// Create New Todo
export const createNewTodo = async (title: string) => {
    try {
        const todo = await axios.post('todos', {
            title
        })

        return todo.data
    } catch (err) {
        return console.error(err)
    }
}

// Delete existed todo
export const deleteExistedTodo = async (id: number) => {
    try {
        await axios.delete(`todos/${id}`)

        return id
    } catch (err) {
        return console.error(err)
    }
}