import Navbar from "./components/Navbar";
import "./style.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./section/HomePage";
import AboutPage from "./section/AboutPage";
import ProjectPage from "./section/ProjectPage";
import BlogsPage from "./section/BlogsPage";
import ArticleBlog from "./section/ArticleBlog";


function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path= '/' element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/blogs" element={<BlogsPage />}/>
        <Route path ='/blogs/blog/:id' element={<ArticleBlog/>} />
      </Routes>
    </>
  );
}

export default App;
