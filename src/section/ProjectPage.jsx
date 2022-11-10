import CardProject from "../components/CardProject";

const ProjectPage = () => {
  return (
    <>
      <section id="project" className="my-5 container ">
        <h1 className="fw-bold text-center main-color heading-size py-3">Project</h1>
        <div className="row d-flex justify-content-center gap-5">
          <CardProject/>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
