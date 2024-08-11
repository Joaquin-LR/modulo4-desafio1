import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return <>
  <div className='container'>
    <div className='nav-container'>
      <Navbar 
      navtitle={'¡Pizzería Mamma Mia!'}
      home={'🍕 Home'}
      login={'🔐 Login'}
      register={'🔐 Register'}
      profile={'🔒 Profile'}
      logout={'🔒 Logout'}
      total={'🛒 Total: $'}/>
    </div>
  
    <Header 
    headerTitle={'¡Pizzería Mamma Mia!'}
    headerSubtitle={'¡Tenemos las mejores pizzas que podrás encontrar!'}/>

    <Home/> {/* ESTE COMPONENTE SERÁ EL PADRE DE "CardPizza.jsx" */}
    
    <Footer footerContent={'©2021 - Pizzería Mamma Mia! - Todos los derechos reservados'}/>
  </div>
  </>
}

export default App