/* eslint-disable react/prop-types */
// Exercício 2

function ToDo({ tarefas }) { // Exercício 4 (props)
    
    return (
        // Exercício 3
        <div>
            <ul>
                {/* <li>Tarefa 1</li>
                <li>Tarefa 2</li> */}
                {/* Exercío 5 */}
                {tarefas.map(item => {
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default ToDo