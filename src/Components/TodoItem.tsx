
function TodoItem(task: any) {

    const handleDelete = () => {
        task.deleteItem(task.task)
    }

    if (task.task !== '') {
        return (
            <div className="flex flex-row justify-center">
                <div className="rounded-l justify-items-stretch bg-lightblue w-52 text-xl text-left p-2 mb-1">
                    {task.task}
                </div>
                <div className="bg-lightblue rounded-r mb-1">
                    <button className="rounded-full bg-lightgreen m-2 py-1 px-4 text-white text-l hover:bg-darkgreen"
                        onClick={handleDelete}>Delete</button>
                </div>
            </div>
        )
    }
}
export default TodoItem