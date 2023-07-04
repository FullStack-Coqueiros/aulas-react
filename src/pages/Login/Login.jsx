import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css'

function Login() {

    const passwordRef = useRef(null)
    
    const inputRefs = useRef({});

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const [errorForm, setErrorForm] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setErrorForm(false)
        // passwordRef.current.style.borderColor = 'black'
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
            inputRefs.current.email.style.backgroundColor = 'red';
            setErrorForm(true)
        }
    }

    const changeColor = () => {
        console.log('MUDAR COR')
        console.log(inputRefs)
        inputRefs.current.email.style.borderColor = 'red'
        inputRefs.current.password.style.borderColor = 'red'
        // inputRefs.current.email.style.borderColor = 'red';
        // console.log(passwordRef)
    }

    return (
        <>
            <form style={{ 'maxWidth': '320px' }} onSubmit={handleSubmit}>

                <input required type="email" value={email}
                    ref={(el) => (inputRefs.current.email = el)}
                    placeholder="Digite seu e-mail"
                    onChange={handleEmailChange} />

                <input required type="password" minLength="6"
                    ref={(el) => (inputRefs.current.password = el)}
                    value={password} placeholder="Digite sua senha"
                    onChange={handlePasswordChange} />

                {errorForm && <span>E-mail e/ou senha inválidos</span>}

                <button type="submit">Entrar</button>
            </form>

            <button onClick={changeColor}>Mudar cor</button>
        </>
    )
}

export default Login