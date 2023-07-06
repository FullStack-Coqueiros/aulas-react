const URL_API = 'http://localhost:3000'

export async function getAll() {
    const response = await fetch(`${URL_API}/noticias`)
    const formatado = await response.json()
    return formatado
}

export async function login(email, password) {
    const response = await fetch(`${URL_API}/usuarios`)
    const usuarios = await response.json()
    const usuario = usuarios.find(usuario => 
                                    usuario.email === email 
                                    && usuario.password === password)
    
    return usuario
}