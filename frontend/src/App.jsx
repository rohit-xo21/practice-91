
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductList from './pages/productList'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list' element = {<ProductList /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
