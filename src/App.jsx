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
      navhome={'🍕 Home'}
      navlogin={'🔐 Login'}
      navregister={'🔐 Register'}
      navbutton={'🛒 Total: $'}/>
    </div>
  
    <Header 
    title={'¡Pizzería Mamma Mia!'}
    subtitle={'¡Tenemos las mejores pizzas que podrás encontrar!'}/>

    <Home/>
    
    <Footer footercontent={'©2021-Pizzería Mamma Mia!-Todos los derechos reservados'}/>
  </div>
  
  
  </>
}

export default App