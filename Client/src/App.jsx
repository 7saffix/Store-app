import {Route, Routes} from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'

function App() {

  return (
    <div className="max-w-[1200px] mx-2 lg:mx-auto">
      <Navbar/>
      <Routes>
         <Route  path='/' element={<HomePage/>}/>
         <Route  path='/create' element={<CreatePage/>}/>
      </Routes>
    </div>
  )
}

export default App
