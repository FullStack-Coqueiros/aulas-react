import { useParams } from "react-router-dom"

function Empresa() {
    const { empresa } = useParams()    

    const empresaToShow = ` (${empresa})`

    return (
        <>
            <h1>Empresa {empresa && empresaToShow}</h1>
        </>
    )
}

export default Empresa