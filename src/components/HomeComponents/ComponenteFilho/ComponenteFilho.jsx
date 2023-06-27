function ComponenteFilho({ callback }) {

    const handleClick = () => {
        callback('Mensagem do componente filho.')      
    }

    return (
        <>
            <button onClick={handleClick}>Clique Aqui</button>
        </>
    )
}

export default ComponenteFilho