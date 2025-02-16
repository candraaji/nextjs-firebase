"use client";

import { Container, Box, Typography } from "@mui/material";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <LoginForm />
      </Box>
    </Container>
  );
};

export default LoginPage;
