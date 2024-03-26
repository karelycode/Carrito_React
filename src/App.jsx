import './App.css'
import CartContent from './assets/Components/CartContent/CartContent'
import DataProvider from './assets/Components/Context/DataContext'
import Home from './assets/Components/Home/Home'
import{BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <DataProvider>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<CartContent/>} />
      </Routes>
     </BrowserRouter>
    </DataProvider>
  )
}

export default App
