import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from 'src\app\pages\Home.jsx'


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
