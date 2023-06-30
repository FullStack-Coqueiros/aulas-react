import { useEffect } from "react"

function Noticias() {

    useEffect(() => {
        console.log('useEffect executado.')
    }, [])

    return (
        <h1>Notícias</h1>
    )
}

export default Noticias