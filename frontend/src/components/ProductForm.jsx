// ProductForm.jsx
import { TextField, Button, MenuItem } from "@mui/material";
import { useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

export default function ProductForm() {
  const [form, setForm] = useState({ name: "", description: "", price: "", category: "" });

  const handleSubmit = async () => {
    try {
        const payload = {
          ...form,
          price: parseFloat(form.price), // ensure number
        };
        await API.post("products/", payload);
        toast.success("✅ Product created successfully!");
        setForm({ name: "", description: "", price: "", category: "" }); 
    } catch (err) {
        console.error("Submit Error:", err.response?.data);
        toast.error(
          err.response?.data?.detail ||
            "❌ Failed to create product. Check required fields."
        );
    }
  
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <TextField
        label="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <TextField
        label="Description"
        multiline
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <TextField
        label="Price"
        type="number"
        value={form.price}
        onChange={(e) =>
          setForm({ ...form, price: parseFloat(e.target.value) })
        }
      />
      <TextField
        label="Category"
        select
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      >
        <MenuItem value="ELECTRONICS">Electronics</MenuItem>
        <MenuItem value="FASHION">Fashion</MenuItem>
        <MenuItem value="BOOKS">Books</MenuItem>
        <MenuItem value="HOME">Home</MenuItem>
      </TextField>
      <Button type="submit">Create Product</Button>
    </form>
  );
}
