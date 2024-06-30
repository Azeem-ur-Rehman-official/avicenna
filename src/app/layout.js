
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Box } from "@mui/material";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
    
      <body className={inter.className}>
      <Box sx={{ display: 'flex', flexDirection:"column",justifyContent:"stretch" }}>
     <Header/>
      
     <Box>{children}</Box>
      <Box>
      <Footer/>
      </Box>
      
      </Box>
      
      
      </body>
    </html>
  );
}
