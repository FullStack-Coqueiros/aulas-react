import ToDo from "../../components/TasksComponents/ToDo/ToDo"
import Formulario from "../../components/TasksComponents/Form/Formulario"
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
            <Formulario />
            <ToDo tarefas={tarefas}/>
        </>
    )
}

export default Task