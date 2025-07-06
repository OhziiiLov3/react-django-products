import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductForm from './components/ProductForm'
import ProductTable from './components/ProductTable'

function App() {
  

  return (
    <div>
      <h1>React-Django Product Management System</h1>
      <ProductForm/>
      <ProductTable/>
    </div>
  )
}

export default App
