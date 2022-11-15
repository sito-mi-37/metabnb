import './App.css'
import Layout from './components/Layout'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import PlaceToStay from './pages/PlaceToStay'
import Nfts from './pages/Nfts'
import Community from './pages/Community'


function App() {


  return (
      <Layout>
        
        <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/placetostay' element={<PlaceToStay />}/>
            <Route path='/nfts' element={<Nfts />}/>
            <Route path='/community' element={<Community />}/>
          </Routes>
        </Router>
      </Layout>
    
  )
}

export default App
