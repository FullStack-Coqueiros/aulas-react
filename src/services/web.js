const URL_API = 'http://localhost:3000'

export async function getAll() {
    const response = await fetch(`${URL_API}/noticias`)
    const formatado = await response.json()
    return formatado
}