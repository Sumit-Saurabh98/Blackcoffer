import React from "react";
import "./App.css";
import Header from "./components/Header";
import { PieChart } from "./components/pieChat";
import { LineChart } from "./components/LineChart";
function App() {

  return (
    <div className="App">
      <Header />
      <PieChart/>
      <LineChart/>
    </div>
  );
}

export default App;
