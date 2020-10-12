import React from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Nav from "./nav";
import Footer from "./footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Hello CodeSandbox</h1>
      <Button variant="success">Submit</Button>
      <div className="row">
        <Alert variant="danger">What is going on?!</Alert>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <Footer />
    </div>
  );
}
