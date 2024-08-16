"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/material";
import Link from "next/link";
import CheckLoginStatus from "./CheckLoginStatus";
import { useRouter } from "next/navigation";
import { postRequest } from "@/app/RequestsAPI/RequestsApi";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function ForgotPasword() {
  const [first, setfirst] = React.useState(false);
  const router = useRouter();
  function setLoginStatus() {
    // Set the login status to true
    localStorage.setItem("login", true);

    // Set the expiration time to 24 hours from now
    const expiryTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    localStorage.setItem("expir", expiryTime);
    router.push("/admin/dashboard");
  }

  const login = async (email, password) => {
    const data = await postRequest("/api/admin", {
      email: email,
      password: password,
    });
    console.log("abc",data);
    if (data.status == 200) {
      setLoginStatus();
    } else {
      setfirst(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    login(data.get("email"), data.get("password"));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={{ marginBottom: "55px" }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography
            variant="h6"
            sx={{
              color: "#1D2F6F",
              fontWeight: 700,
            }}
          >
            Login to dashboard
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            {first == true ? (
              <Typography
                variant="h6"
                sx={{
                  color: "#FF0000",
                  fontWeight: 700,
                }}
              >
                Email or password is wrong
              </Typography>
            ) : null}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
