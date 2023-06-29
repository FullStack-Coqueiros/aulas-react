import { useLocation } from "react-router-dom"

// localhost:5137/empresas?status=ativo
function Empresas() {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)

    // Capturar um parametro
    // searchParams.get('status')

    // localhost:5137/empresas?estado=sc
    
    // Listar todos os parametros da consulta    
    searchParams.forEach((value, key) => {
        console.log(`${key} : ${value}`)
    })
    
    return (
        <>
            <h1>Empresas</h1>
        </>
    )
}

export default Empresas