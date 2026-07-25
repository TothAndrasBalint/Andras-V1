import { Carousel } from "react-bootstrap";

import { spotlightProjects } from "../data/projectData.js";

function Projects() {
  return (
    <section
      className="projects"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <h2 className="section-title" id="projects-title">
          / projects
        </h2>

        <div className="section-line" aria-hidden="true" />
      </div>

      <div className="projects-desktop">
        <Carousel className="projects-carousel" interval={null} pause={false}>
          {spotlightProjects.map((project, index) => (
            <Carousel.Item key={project.id}>
              <article className="project-slide">
                <div className="project-slide-visual">
                  {project.image ? (
                    <img
                      className="project-slide-image"
                      src={project.image}
                      alt={project.imageAlt}
                    />
                  ) : (
                    <>
                      <span className="project-slide-number" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="project-slide-placeholder">
                        Project visual
                      </span>
                    </>
                  )}
                </div>

                <div className="project-slide-content">
                  <p className="project-featured-label">Featured project</p>

                  <h3 className="project-slide-title">{project.title}</h3>

                  <p className="project-slide-status">{project.status}</p>

                  <div className="project-slide-description">
                    <p>{project.summary}</p>
                  </div>

                  <ul
                    className="project-slide-technologies"
                    aria-label={`${project.title} technologies`}
                  >
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="projects-mobile">
        {spotlightProjects.map((project, index) => (
          <article className="project-mobile-card" key={project.id}>
            <div className="project-mobile-visual">
              {project.image ? (
                <img
                  className="project-mobile-image"
                  src={project.image}
                  alt={project.imageAlt}
                />
              ) : (
                <div className="project-mobile-placeholder">
                  <span aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>Project visual</p>
                </div>
              )}
            </div>

            <div className="project-mobile-content">
              <p className="project-featured-label">Featured project</p>

              <h3 className="project-mobile-title">{project.title}</h3>

              <p className="project-slide-status">{project.status}</p>

              <div className="project-mobile-description">
                <p>{project.summary}</p>
              </div>

              <ul
                className="project-mobile-technologies"
                aria-label={`${project.title} technologies`}
              >
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
