import imgjumbotron from "../asset/imgjumbotron.png"
import Footer from "../components/Footer";
import AboutPage from "./AboutPage";
import BlogPage from "./BlogsPage";
import ProjectPage from "./ProjectPage";
const HomePage = () => {
  return (
    <>
      <section id="jumbotron" className="container">
        <div className="copywriting">
          <p className="sec-color">Hi, It's me</p>
          <h1 className="fw-bold main-color">Muhammad Arya</h1>
          <p className="sec-color">
            An enthusiastic Front-End Web Developer and Digital Marketing
            Specialist
          </p>
          <button><a href="https://wa.me/6289693210097" target="_blank">Contact Me</a></button>
        </div>
        <div className="img-jumbotron">
          <img src={imgjumbotron} alt="" />
          <div className="card-float-satu">
            <p>Front-End Web Developer</p>
          </div>
          <div className="card-float-dua">
            <p>Digital Marketing Specialist</p>
          </div>
        </div>
      </section>
      <AboutPage/>
      <ProjectPage/>
      <BlogPage/>
      <Footer/>
    </>
  );
};

export default HomePage;
