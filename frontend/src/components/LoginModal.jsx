import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";

import { toast } from "react-toastify";
import { useState } from "react";
import API from "../services/api";


export default function LoginModal({ open, onClose }) {
  const [isRegistering, setIsRegistering] = useState(false); // // toggle form
  const [form, setForm] = useState({ username: "", password: "", email: "" }); // form data

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
    setForm({ username: "", password: "", email: "" }); // reset form
  };

  const handleSubmit = async () => {
    try {
        if(isRegistering){
            await API.post("user/register/",{
                username: form.username,
                password: form.password,
                email: form.email,
            });
            toast.success("Registered! Now log in.");
            setIsRegistering(false);
        }else{
            const res = await API.post("token/", {
              username: form.username,
              password: form.password,
            });
            localStorage.setItem("access", res.data.access);
            localStorage.setItem("refresh", res.data.refresh);
            toast.success("Logged in!");
        }



      onClose(); // close modal after submit
    } catch (error) {
        toast.error("Something went wrong. Check your info.");
        console.error(err); 
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{isRegistering ? "Register" : "Login"}</DialogTitle>

      <DialogContent>
        {isRegistering && (
          <TextField
            label="Email"
            fullWidth
            margin="dense"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        )}
        <TextField
          label="Username"
          fullWidth
          margin="dense"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="dense"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </DialogContent>

      <DialogActions
        sx={{ flexDirection: "column", alignItems: "stretch", px: 3 }}
      >
        <Button variant="contained" onClick={handleSubmit}>
          {isRegistering ? "Register" : "Login"}
        </Button>

        <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
          {isRegistering
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <Link component="button" onClick={toggleForm}>
            {isRegistering ? "Login" : "Register"}
          </Link>
        </Typography>
      </DialogActions>
    </Dialog>
  );
}
