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
import Noticias from './pages/Noticias/Noticias'

function App() {

  return (
    <div className='App'>
      <Router>
        <Header />

        <Routes>
          {/* localhost:port/empresa */}
          <Route path='/' exact element={<Home />} />
          <Route path='login' exact element={<Login />} />
          <Route path='noticias' element={<Noticias />} />
          <Route path='empresas' element={<Empresas />} />
          <Route path='empresa/:empresa' element={<Empresa />} />

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

{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}