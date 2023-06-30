import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css'

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [errorForm, setErrorForm] = useState(false) //
    const navigate = useNavigate()

    useEffect(() => {
        setErrorForm(false)     
    }, [password])

    /**
     const [pacientes, setPacientes] = useState([])
     useEffect(() => {
        const resposta = await fetch('/pacientes')
        setPacientes(resposta.json())
     }, [])
     */

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()       
        console.log('Dados digitados:')   
        console.log('Email: ', email)
        console.log('Password: ', password)  
        if (email === 'yan.m.esteves@gmail.com' && password === '12345678') {
            navigate('/')
        } else {
            setErrorForm(true)
        }     
    }

    return (                
        <form onSubmit={handleSubmit}>

            <h4>E-mail: {email}</h4>

            <input required type="email" value={email} 
                placeholder="Digite seu e-mail"
                onChange={handleEmailChange} />

            <input required type="password" minLength="6" 
                value={password} 
                placeholder="Digite sua senha" 
                onChange={handlePasswordChange}/>
            
            {errorForm && <span>E-mail e/ou senha inválidos</span>}

            <button type="submit">Entrar</button>
        </form>
    )
}

export default Login