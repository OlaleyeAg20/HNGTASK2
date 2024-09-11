import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./index.css";
import Footer from '../components/Footer';
import Form from "../components/Form";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Garage",
  description: "Get the best of the best sofa chairs at affordable price",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="announcementBar">Free Shipping on All Orders</div>
        <Header />
        <NavBar />
        {children}
        <Form />
        <Footer />
      </body>
    </html>
  );
}
