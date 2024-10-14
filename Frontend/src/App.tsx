import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import TaskManagement from './components/TaskManagement'
import Dashboard from './components/Dashboard'
import Upload from './components/Upload'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
    <Routes>
      <Route path= '/register' element={<Register />} />
      <Route path= '/login' element={<Login />} />
      <Route path= '/task' element={<TaskManagement />} />
      <Route path= '/dashboard' element={<Dashboard />} />
      <Route path= '/upload' element={<Upload />} />
    </Routes>
    </>
  )
}

export default App
