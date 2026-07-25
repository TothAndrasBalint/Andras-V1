import ExperienceTabs from "./ExperienceTabs.jsx";

function Experience() {
  return (
    <section
      className="experience"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="section-heading">
        <h2 className="section-title" id="experience-title">
          / experience
        </h2>

        <div className="section-line" aria-hidden="true" />
      </div>

      <ExperienceTabs />
    </section>
  );
}

export default Experience;
