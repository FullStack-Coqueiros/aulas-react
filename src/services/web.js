const URL_API = 'http://localhost:3000'

export async function getAll() {
    const response = await fetch(`${URL_API}/noticias`)
    const formatado = await response.json()
    console.log('-- resposta --')
    console.log(formatado)
    return formatado
}