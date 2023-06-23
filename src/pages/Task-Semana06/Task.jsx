import ToDo from "../../components/TasksComponents/ToDo/ToDo"

function Task() {

    const tarefas = [
        'Tarefa 1',
        'Tarefa 2',
        'Tarefa 3',
        'Tarefa 4'
    ]

    return (
        <>
            <h2>Tarefas</h2>
            <ToDo tarefas={tarefas}/>
        </>
    )
}

export default Task