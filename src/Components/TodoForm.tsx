import { useState } from 'react'
import TodoItem from './TodoItem'

function TodoForm() {
    const [inputValue, setInputValue] = useState('')
    const handleChange = (event: any) => {
        setInputValue(event.target.value)
    }

    const [todosAdd, setTodosAdd] = useState([''])
    const handleAdd = (event: any) => {
        if (inputValue.trim() !== '') {
            event.preventDefault()
            setTodosAdd([...todosAdd, inputValue])
            setInputValue('')
        } else {
            event.preventDefault()
        }
    }

    const deleteItem = (task: any) => {
        setTodosAdd(todosAdd.filter((items) => items !== task))
    }

    return (
        <div className="font-Itim" >
            <h1 className="text-3xl font-bold underline text-center ">
                Todo List Sim&Aem
            </h1>
            <form className='text-center'>
                <input className='text-xl border rounded focus:outline-none focus:border-darkgreen pl-2'
                    type="text" 
                    autoComplete='off' 
                    value={inputValue} 
                    placeholder=' Add Todo List' 
                    onChange={handleChange}/>
                <button className='rounded-full bg-lightgreen m-2 py-1 px-4 text-white text-xl hover:bg-darkgreen'
                onClick={handleAdd}>
                    Add
                </button>
            </form>

            {todosAdd.map((items, index) => (
                <TodoItem key={index} task={items} deleteItem={deleteItem} />
            ))}


        </div>
    )
}

export default TodoForm