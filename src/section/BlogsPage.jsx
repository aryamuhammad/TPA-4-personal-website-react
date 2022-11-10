import CardBlog from "../components/CardBlog";
const BlogsPage = () => {
  return (
    <>
      <section id="blog" className="my-5 container ">
        <h1 className="fw-bold text-center main-color heading-size py-3">
          Blog
        </h1>
        <div className="row d-flex justify-content-center gap-5">
          <CardBlog/>
        </div>
      </section>

    </>
  );
};

export default BlogsPage;
