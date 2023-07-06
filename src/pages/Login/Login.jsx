import { useState, useEffect, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css'
import { AuthContext } from '../../context/AuthContext';
import { login as LoginApi } from '../../services/web';
function Login() {

    const { login } = useContext(AuthContext)
    
    const inputRefs = useRef({});

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const [errorForm, setErrorForm] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setErrorForm(false)
        inputRefs.current.email.style.borderColor = 'black'
        inputRefs.current.password.style.borderColor = 'black'
    }, [password])

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
        const response = await LoginApi(email, password)
        if (!response) {
            setErrorForm(true)
            inputRefs.current.email.style.borderColor = 'red'
            inputRefs.current.password.style.borderColor = 'red'
            return;
        }

        login(response)
        navigate('/')
    }

    return (
        <>
            <h1>Login</h1>

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
        </>
    )
}

export default Login