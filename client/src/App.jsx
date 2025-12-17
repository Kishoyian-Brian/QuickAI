import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import WriteArticle from "./pages/WriteArticle";
import BlogTitle from "./pages/BlogTitle";
import RemoveBackground from "./pages/RemoveBackground.jsx";
import RemoveObject from "./pages/RemoveObject.jsx";
import GenerateImage from "./pages/GenerateImage.jsx";
import ReviewResumer from "./pages/ReviewResumer.jsx";
import Community from "./pages/Community.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='ai' element ={<Layout />}>
         <Route index element ={<Dashboard />} />
         <Route path ='write-article' element ={WriteArticle} />
         <Route path='blog-titles' element ={<BlogTitle/>} />
          <Route path='generate-images' element={<GenerateImage/>} />
          <Route path='remove-background' element={<RemoveBackground />} />
          <Route path='remove-object' element={<RemoveObject/>} />
          <Route path='review-resumer' element={<ReviewResumer/>} />
          <Route path='community' element={<Community/>} />
      </Route>
    </Routes>

  );
};

export default App;