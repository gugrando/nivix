import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './app/pages/Home.jsx'
import About from './app/pages/About.jsx'
import Cases from './app/pages/Cases.jsx'
import Header from './app/pages/sections/Header.jsx'
import CaseInfo from './app/Utils/CaseInfo.jsx'
import Footer from './app/pages/sections/Footer.jsx'
import TermosDeUso from './app/pages/sections/TermosDeUso.jsx'
import PoliticaDePrivacidade from './app/pages/sections/PoliticaDePrivacidade.jsx'

function App() {
  return (
    <> 
      <Router> 
      <Header id="top"/>  
        <Routes>
          <Route exact path='/' element={<Home />} ></Route>
          <Route path='/sobre' element={<About />}></Route>
          <Route path='/projetos' element={<Cases />}></Route>
          <Route path='/metodologia' element={<Cases /> }></Route>
          <Route path='/caseInfo' element={<CaseInfo/>} ></Route>
          <Route path='/termos-de-uso' element={<TermosDeUso />}></Route>
          <Route path='/politica-de-privacidade' element={<PoliticaDePrivacidade />}></Route>
        </Routes>
        <Footer />
      </Router> 
    </>
  )
}

export default App