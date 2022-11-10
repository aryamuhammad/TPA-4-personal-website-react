import instagram from "../asset/instagram.png";
import linkedin from "../asset/linkedin.png";
import twitter from "../asset/twitter.png";
import CardSkill from "../components/CardSkill";
import html from "../asset/html.png";
import css from "../asset/css.png";
import js from "../asset/js.png";
import figma from "../asset/figma.png"; 


const AboutPage = () => {
  return (
    <>
      <section id="about" className="container">
        <p>About Me</p>
        <div className="container-about">
          <div className="copywriting">
            <h1>
              I am <span>Junior Front End Web Developer</span>
              <br className="br" />
              and
              <span> Digital Marketing Specialist</span>
            </h1>
            <p>
              I’m a third year collage student at Universitas Singaperbangsa
              Karawang in major Management. I have interest in programming
              field. I’m a curious person who loves to learn and to explore
              something new
            </p>
          </div>
          <div className="socmed">
            <h1>Let's Connect!</h1>
            <ul>
              <li className="socmed-icon">
                <a
                  href="https://www.linkedin.com/in/muhammad-arya-wirawan-a3b499152"
                  target="_blank"
                >
                  <img src={linkedin} alt="" />
                </a>
              </li>
              <li className="socmed-icon">
                <a href="https://twitter.com/aryamuhammaddd" target="_blank">
                  <img src={twitter} alt="" />
                </a>
              </li>
              <li className="socmed-icon">
                <a
                  href="https://www.instagram.com/aryawirawannn/"
                  target="_blank"
                >
                  <img src={instagram} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <section id="skills">
          <p>Skills</p>
          <div className="container-card">
            <CardSkill skillName="HTML5" skillImage={html} />
            <CardSkill skillName="CSS3" skillImage={css} />
            <CardSkill skillName="Javascript" skillImage={js} />
            <CardSkill skillName="Figma" skillImage={figma} />
          </div>
        </section>
      </section>
    </>
  );
};

export default AboutPage;
