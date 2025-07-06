import { AppBar, Typography, Button, Toolbar } from "@mui/material";
import {useState} from "react";
import {Link} from "react-router-dom"
import LoginModal from "./LoginModal";

const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false);
    const isLoggedIn = !!localStorage.getItem("access");

    const handleLogout = () => {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      window.location.reload();
    };
    

    return (
      <>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              React + Django Product App
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/dashboard">
              Dashboard
            </Button>
            {isLoggedIn ? (
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button color="inherit" onClick={() => setShowLogin(true)}>
                Login
              </Button>
            )}
          </Toolbar>
          <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />
        </AppBar>
      </>
    );
}
 
export default Navbar;