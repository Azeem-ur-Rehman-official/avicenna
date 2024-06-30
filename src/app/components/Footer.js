"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import logo from "../../../public/footer-logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const logoStyle = {
  width: "140px",
  height: "auto",
};

function Copyright() {
  return (
    <Typography variant="body2" color="#ffffff" mt={1}>
      {"Copyright © "}
      <Link href="https://mui.com/">Avicenna&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const [admin, setAdmin] = React.useState(false);
  React.useEffect(() => {
    if(pathname.search("dashboard")!=-1){
      setAdmin(true);
    }
  }, [pathname])
  

  return ( admin==false &&
    <Box sx={{ background: "#001e60" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "#ffffff",
          alignItems: "center",
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: "center", md: "left" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              minWidth: { xs: "100%", sm: "60%" },
            }}
          >
            <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
              <Box sx={{ ml: "-15px" }}>
                <Image src={logo} style={logoStyle} alt="logo of sitemark" />
              </Box>
              <Typography variant="body2" fontWeight={600} gutterBottom>
                Newsletter
              </Typography>
              <Typography variant="body2" color="#ffffff" mb={2}>
                Subscribe to our newsletter for weekly updates and promotions.
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap>
                <TextField
                  id="outlined-basic"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  fullWidth
                  aria-label="Enter your email address"
                  placeholder="Your email address"
                  inputProps={{
                    autocomplete: "off",
                    ariaLabel: "Enter your email address",
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      color: "white",
                    },
                    "& .MuiOutlinedInput-root": {
                      // - The Input-root, inside the TextField-root
                      "& fieldset": {
                        // - The <fieldset> inside the Input-root
                        borderColor: "#ffffff",
                        color: "#ffffff", // - Set the Input border
                      },
                      "&:hover fieldset": {
                        borderColor: "#ffffff", // - Set the Input border when parent has :hover
                      },
                      "&.Mui-focused fieldset": {
                        // - Set the Input border when parent is focused
                        borderColor: "#ffffff",
                      },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ flexShrink: 0 }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body" fontWeight={600}>
              Important Links
            </Typography>
            <Link color="#ffffff" href="#">
             Home
            </Link>
            <Link color="#ffffff" href="#">
              Student Life
            </Link>
            <Link color="#ffffff" href="#">
              Institute
            </Link>
            <Link color="#ffffff" href="#">
              About
            </Link>
            <Link color="#ffffff" href="#">
              News
            </Link>
            <Link color="#ffffff" href="#">
              Contact
            </Link>
            
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body" fontWeight={600}>
              Legal
            </Typography>
            <Link color="#ffffff" href="#">
              Accademic staff
            </Link>
            <Link color="#ffffff" href="#">
              Alumni
            </Link>
            <Link color="#ffffff" href="#">
              Community & Partners
            </Link>
            
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body" fontWeight={600}>
              Short Links
            </Typography>
            <Link color="#ffffff" href="#">
              Apply Now
            </Link>
            <Link color="#ffffff" href="#">
              Prospectus
            </Link>
            
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: { xs: 4, sm: 8 },
            width: "100%",
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <div>
            <Link color="#ffffff" href="#">
              Privacy Policy
            </Link>
            <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link color="#ffffff" href="#">
              Terms of Service
            </Link>
            <Copyright />
          </div>
          <Stack
            direction="row"
            justifyContent="left"
            spacing={1}
            useFlexGap
            sx={{
              color: "#ffffff",
              color: "#ffffff",
            }}
          >
            <IconButton
              color="#ffffff"
              href="https://github.com/mui"
              aria-label="GitHub"
              sx={{ alignSelf: "center", color: "#ffffff" }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="#ffffff"
              href="https://twitter.com/MaterialUI"
              aria-label="X"
              sx={{ alignSelf: "center", color: "#ffffff" }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="#ffffff"
              href="https://www.linkedin.com/company/mui/"
              aria-label="LinkedIn"
              sx={{ alignSelf: "center", color: "#ffffff" }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
