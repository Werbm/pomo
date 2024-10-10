import './App.css'
import { Apresentation } from './pages/Apresentation'
import { Loading } from './pages/Loading'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Loading />}/>
          <Route path='/apresentation' element={<Apresentation />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
