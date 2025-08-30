
import Navbar from "@/components/Navbar";
import "./globals.css";
import Home from "./page";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
           <Navbar />
        
        {children}
      </body>
    </html>
  );
}
