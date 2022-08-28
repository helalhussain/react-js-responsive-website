import {BrowserRouter, Routes, Route} from 'react-router-dom'
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
 import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
  import '../src/index.css'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Navbar from './pages/components/Navbar'
import Footer from './pages/components/Footer'
function App() {
  return (
   
      <BrowserRouter>
      <Navbar />
      <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/service' element={<Service/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
  
  );
}

export default App;
