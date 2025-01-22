import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home';
function App() {

  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  )
}

export default App
