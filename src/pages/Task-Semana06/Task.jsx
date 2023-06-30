import ToDo from "../../components/TasksComponents/ToDo/ToDo"
import Formulario from "../../components/TasksComponents/Form/Formulario"
import { useState, useEffect } from "react"

function Task() {

    const [tarefas, setTarefas] = useState([
        'Tarefa 1',
        'Tarefa 2',
        'Tarefa 3',
        'Tarefa 4'
    ])

    useEffect(() => {
        document.title = `${tarefas.length} cadastradas.`
    })

    const novaTarefaCriada = (novaTarefa) => {
        console.log(`${novaTarefa} foi criada.`)
        
        setTarefas([...tarefas, novaTarefa])
    }

    const limparTarefas = () => {
        setTarefas([])
    }

    return (
        <>
            <h2>Tarefas</h2>
            <Formulario handleSubmit={novaTarefaCriada} />
            <ToDo tarefas={tarefas}/>

            <button onClick={limparTarefas}>Limpar Tarefas</button>
        </>
    )
}

export default Task