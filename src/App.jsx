import './App.css'
import Home from './home'
import Header from './components/header'
import { Route, Routes } from 'react-router-dom'
import Usestate from './pages/Usestate'
import Useeffect from './pages/Useeffect'
import Usememo from './pages/Usememo'
import Useref from './pages/Useref'
import Usecontext from './pages/Usecontext'
import Usecallback from './pages/Usecallback'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usestate" element={<Usestate />} />
        <Route path="/useeffect" element={<Useeffect />} />
        <Route path="/usememo" element={<Usememo />} />
        <Route path="/useref" element={<Useref />} />
        <Route path="/usecontext" element={<Usecontext />} />
        <Route path="/usecallback" element={<Usecallback />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  )
}

export default App
