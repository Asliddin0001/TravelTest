import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import "./App.css";
import SecondRow from "./components/secondRow";
import Tour from "./components/tour"

export default function App() {
  return (
    <div className="font-notoSerif ">
      <Navbar />
      <Header />
      <SecondRow />
      <Tour />
    </div>
  );
}
