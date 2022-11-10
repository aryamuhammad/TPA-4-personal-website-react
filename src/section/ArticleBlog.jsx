import { useParams } from "react-router-dom";
import bannerreact from "../asset/bannerreact.svg";
import bannerjs from "../asset/bannerjs.svg";
const ArticleBlog = () => {
  const { id } = useParams();
  const dataArticle = [
    {
      id: 1,
      tittle: "React JS",
      img: bannerreact,
      content:
        "React JS adalah framework view library javascript untuk membuat tampilan (UI) pada website. React JS merupakan framework component based. Component Based memungkinkan kita untuk membuat secara terpisah tiap komponen dan dapat digunakan pada banyak section. React JS dapat membuat website menjadi Single Page Application (SPA). SPA hanya memiliki 1 file HTML. SPA membuat website kita tidak merefresh halamannya ketika kita berpindah halaman / merequest sesuatu. React JS Component adalah salah satu core dari react JS. Component membagi UI ke dalam satuan-satuan kecil. Artinya, dalam 1 halaman, ada beberapa component yang bisa kita buat Component dibuat jika component tersebut bersifat reusable code atau dapat digunakan berkali kali. Buatlah component jika component tersebut akan dibutuhkan pada section yang lain. State and Props. States adalah data local yang akan dikirimkan ke props. Props digunakan untuk menangkap data yang dikirimkan state untuk dapat digunakan oleh suatu component.",
    },
    {
      id: 2,
      tittle: "Javascript 101",
      img: bannerjs,
      content: `Javascript adalah bahasa pemograman yang sangat powerful yang digunakan untuk logic pada sebuah website. Javascript membuat website kita menjadi lebih interaktif
Operator Aritmatika pada javascript:
+ : Penjumlahan
- : Pengurangan
* : Perkalian
% : Sisa pembagian (modulus)
++ : increment
-- : decrement
/ : Pembagian
** : Pangkat
Tipe data pada Javascript
•	Number
•	String
•	Boolean
•	Object
•	Array
Function adalah kode yang digunakan untuk membungkus suatu proses untuk menyelesaikan suatu problem/masalah. Function dapat digunakan berulang-ulang

Conditional
Conditional Statement merupakan Statement percabangan yang menggambarkan suatu kondisi. If condition akan mengecek kondisi spesifik dan menjalankan perintah berdasarkan kondisi tersebut
Contohnya: jika cuaca hari ini hujan, maka kita membawa payung

Looping
Statement yang mengulang sebuah instruksi hingga kondisi terpenuhi

Document Object Model (DOM)
DOM adalah jembatan agar bahasa pemograman dapat berinteraksi dengan dokumen HTML. Dengan DOM, Javascript dapat memanipulasi HTML. DOM bukan milik Javascript namun milik web browser.
`,
    },
  ];
  return (
    <>
      {dataArticle
        .filter((article) => article.id === +id)
        .map((article) => {
          return (
            <section key={article.id} id="article" className="container my-5">
              <div>
                <div className="banner text-center">
                  <img src={article.img} className="img-fluid w-75 " alt="" />
                </div>
                <div className="content">
                  <h1 className="tittle fw-bold my-3">{article.tittle}</h1>
                  <p>{article.content}</p>
                </div>
              </div>
            </section>
          );
        })}
    </>
  );
};

export default ArticleBlog;
