// ProductTable.jsx
import { useEffect, useState } from "react";
import API from "../services/api";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

export default function ProductTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("products/").then((res) => setProducts(res.data));
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Category</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((p) => (
          <TableRow key={p.id}>
            <TableCell>{p.name}</TableCell>
            <TableCell>{p.description}</TableCell>
            <TableCell>{p.price}</TableCell>
            <TableCell>{p.category}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
