import { useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  )
}

export default App
