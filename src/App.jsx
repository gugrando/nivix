import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
<<<<<<< HEAD
import Home from './pages/Home.jsx'
=======
import Home from './pages/Home'
>>>>>>> 218a966 (.)


function App() {

  return (
    <>

      <Router> 
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
         

        </Routes>
      </Router>
    </>
  )
}

export default App


