import { Link } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Product Manager
      </Typography>
      <Button variant="contained" component={Link} to="/dashboard">
        Go to Dashboard
      </Button>
    </Container>
  );
}
