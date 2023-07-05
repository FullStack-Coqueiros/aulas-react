import {
  BrowserRouter as Router, // Apenas renomeando BrowserRouter para Router
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home.jsx'
import Empresa from './pages/Empresa/Empresa.jsx'
import Empresas from './pages/Empresas/Empresas.jsx'
import Header from './components/Header/Header.jsx'
import Login from './pages/Login/Login.jsx'
import Noticias from './pages/Noticias/Noticias.jsx'
import Task from './pages/Task-Semana06/Task.jsx'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={theme === 'light' ? 'App light-theme' : 'App dark-theme'}>
      <Router>
        <Header />

        <Routes>
          {/* localhost:port/empresa */}
          <Route path='/' exact element={<Home />} />
          <Route path='login' exact element={<Login />} />
          <Route path='noticias' element={<Noticias />} />
          <Route path='empresas' element={<Empresas />} />
          <Route path='empresa/:empresa' element={<Empresa />} />

          {/* EXERCÍCIOS */}
          <Route path='semana-06' element={<Task />} />

          {/* localhost:5137/empresas/NOME_EMPRESA */}
          {/* localhost:5137/empresas/audaces */}
          {/* const empresa = 'audaces'  */}
          {/* <Route path='empresas/:empresa' exact element={<Empresas />} /> */}

        </Routes>
      </Router>
    </div>
  )
}

export default App