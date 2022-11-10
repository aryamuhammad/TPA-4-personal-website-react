import { useState } from "react";
import bmicalc from "../asset/bmicalc.jpeg";
import movieapp from "../asset/movieapp.jpeg";
import html from "../asset/html.png";
import css from "../asset/css.png";
import js from "../asset/js.png";
import bootstrapicon from '../asset/bootstrap.png'

const CardProject = () => {
  const [project, setProject] = useState([
    {
      name: "BMI Calculator",
      thumb: bmicalc,
      desc: "Website untuk menghitung Body Mass Index dengan memasukkan berat serta tinggi",
      tech: {
        tech1: html,
        tech2: css,
        tech3: js,
      },
      link:'https://calc-your-bmi.netlify.app/'
    },
    {
      name: "Movie App",
      thumb: movieapp,
      desc: "Website yang menampilkan daftar film terbaru dan terpopuler menggunakan TMDB API.",
      tech: {
        tech1: bootstrapicon,
        tech2: js,
      },
      link : 'https://nonton-lah.netlify.app/'
    },
  ]);
  return (
    <>
      {project.map((item, index) => {
        return (
          <div key={index} className="card" style={{ width: "22rem" }}>
            <img src={item.thumb} alt="" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.desc}</p>
              <div className="tech">
                <img src={item.tech.tech1} alt="" />
                <img src={item.tech.tech2} alt="" />
                <img src={item.tech.tech3} alt="" />
              </div>
              <a href={item.link} target='_blank' className="btn btn-primary my-3 mx-auto d-block">
                See Project
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardProject;
