import { useState } from "react"

function Formulario({ handleSubmit }) {

    const [form, setForm] = useState()

    const handleChange = (event) => {
        setForm(event.target.value)
    }

    const criarTarefa = (event) => {
        event.preventDefault()
        handleSubmit(form)
    }

    return (
        <form onSubmit={criarTarefa}>
            <input value={form} 
                onChange={handleChange}
                placeholder="Digite uma nova tarefa" 
                type="text"/>

            <button type="submit">Criar Tarefa</button>
        </form>
    )
}

export default Formulario