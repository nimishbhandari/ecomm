import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-5">
        <Container>
          <h1>Welcom to ecomm</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
