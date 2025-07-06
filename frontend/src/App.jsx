import { useState } from 'react'

import './App.css'
import ProductForm from './components/ProductForm'
import ProductTable from './components/ProductTable'
import LoginModal from './components/LoginModal'
import { Button } from "@mui/material";
import { ToastContainer } from "react-toastify";

function App() {
  const [showLogin, setShowLogin] = useState(false);


  return (
    <div>
      <h1>React-Django Product Management System</h1>
      <Button variant="contained" onClick={() => setShowLogin(true)}>
        Login
      </Button>
      <ProductForm />
      <ProductTable />
      <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App
