function Formulario({ handleSubmit }) {

    const criarTarefa = () => {
        handleSubmit('Nova tarefa criada')
    }
    return (
        <form>
            <input placeholder="Digite uma nova tarefa" type="text"/>
            <button onClick={criarTarefa}>Criar Tarefa</button>
        </form>
    )
}

export default Formulario