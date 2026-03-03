import React from 'react';
import Navbar from '../components/Navbar';
import Hero from "../components/Hero.jsx";
import AiTools from "../components/AiTools.jsx";
import Testimonial from "../components/testimoniols.jsx";
import Plan from "../components/Plans.jsx";
import Footer from "../components/Footer.jsx";
const Home = () => {
  return (
  <>
      <Navbar/>
      <Hero/>
      <AiTools/>
      <Testimonial/>
      <Plan/>
      <Footer/>
  </>
  );
}

export default Home;