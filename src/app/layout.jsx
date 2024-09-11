import "./index.css";
import Footer from '../components/Footer';
import Form from "../components/Form";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import PropTypes from 'prop-types';


export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <title>The Garage</title>
      </head>
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

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
