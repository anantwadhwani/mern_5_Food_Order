import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Meals from "./components/Meals";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./styles/global.css";
import "./styles/variables.css";

const App = () => {
  return (
    <div className="text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <Meals />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
