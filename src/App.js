import React from 'react';
import Jumbotron from './components/jombotron';
import Footer from "./components/footer"
import EmployeeLogic from "./components/action"
import "./boostrap/dist/css/bootstrap.min.css"
import "./App.css";

function App() {
  return (
    <div className="App">
    <Jumbotron />
    <EmployeeLogic />
    <Footer />
    </div>
  );
}

export default App;