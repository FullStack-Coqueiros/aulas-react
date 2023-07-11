import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

function Empresas() {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)

    const [list, setList] = useState([
        'Audaces',
        'Intelbras',
        'Senai',
        'Senior'
    ])
    const [search, setSearch] = useState('')
    const [filteredItems, setFilteredItems] = useState([])

    useEffect(() => {
        const termo = search.toLocaleLowerCase().trim()
        const result = list.filter(item => item.toLocaleLowerCase().includes(termo))
        setFilteredItems(result)
    }, [search, list])

    const vEstado = searchParams.get('estado')
    console.log('ESTADO: ', vEstado)

    searchParams.forEach((value, key) => {
        console.log(`${key} : ${value}`)
    })

    const handleSearch = (e) => {
        setSearch(e.target.value)                
    }
    
    return (
        <div>
            <h1>Empresas</h1>

            <input type="text" value={search} onChange={handleSearch} />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Empresas