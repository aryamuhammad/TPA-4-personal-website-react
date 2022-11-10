import react from "../asset/reacticon.png";
import js from "../asset/js.png";
import { useNavigate } from "react-router-dom";
const CardBlog = () => {
  const blogs = [
    {
      id: 1,
      tittle: "React JS",
      img: react,
    },
    {
      id: 2,
      tittle: "Javascript 101",
      img: js,
    },
  ];
  const navigation = useNavigate();
  const readArticle = (id) => {
    navigation(`/blogs/blog/${id}`);
  };
  return (
    <>
      {blogs.map((item, index) => {
        return (
          <div key={index} className="card" style={{ width: "22rem" }}>
            <img src={item.img} alt="" />
            <div className="card-body">
              <h5 className="card-title">{item.tittle}</h5>
              <button
                className="btn main-bg-color test w-100"
                onClick={() => readArticle(item.id)}
              >
                Read Article
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardBlog;
