import {BrowserRouter, Routes, Route} from 'react-router-dom'
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
 import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/service' element={<Service/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
