import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
<<<<<<< HEAD

=======
>>>>>>> refs/remotes/origin/main


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


