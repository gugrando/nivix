import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './app/pages/Home.jsx'
import About from './app/pages/About.jsx'
import Cases from './app/pages/Cases.jsx'
import Header from './app/pages/sections/Header.jsx'

function App() {
  return (
    <> 
      <Router> 
      <Header />  
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/sobre' element={<About />}></Route>
          <Route path='/projetos' element={<Cases />}></Route>
          <Route path='/metodologia' element={<Cases />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App