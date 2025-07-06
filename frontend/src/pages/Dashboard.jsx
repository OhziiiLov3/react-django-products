import { Container, Typography, Box } from "@mui/material";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";

export default function Dashboard() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Box sx={{ my: 4 }}>
        <ProductForm />
      </Box>
      <ProductTable />
    </Container>
  );
}
