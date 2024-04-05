import { Routes, Route, Navigate } from 'react-router-dom'
import Chat from './pages/chat'
import Register from './pages/register'
import Login from './pages/login'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap'
import NavBar from './components/NavBar'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'


function App() {
  const { user } = useContext(AuthContext)
  return (
    <>
      <NavBar / >
    
    <Container className='text-secondary'>
    <Routes>
      <Route path='/' element = {user ? <Chat /> : <Login/> }/>
      <Route path='/register' element = {user ? <Chat /> : <Register/>}/>
      <Route path='/login' element = {user ? <Chat /> : <Login/>}/>
      <Route path='*' element = {<Navigate to='/' />}/>
    </Routes>
    </Container>
    </>
  )
}

export default App
