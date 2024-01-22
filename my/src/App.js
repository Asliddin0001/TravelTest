import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import './App.css'

export default function App() {
  return (
    <div className="font-notoSerif container mx-auto">
      <Navbar />
      <Header />
    </div>
  );
}
