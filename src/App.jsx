import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './app/pages/Home.jsx'
import Header from './app/pages/sections/Header.jsx'

function App() {
  return (
    <> 
      <Header />  
      <Router> 
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App