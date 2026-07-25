import portrait from "../assets/andras-about.webp";

const technologies = [
  "JavaScript",
  "React",
  "Google Apps Script",
  "REST APIs",
  "HTML & CSS",
  "Git & GitHub",
];

function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <h2 className="section-title" id="about-title">
          / about me
        </h2>

        <div className="section-line" aria-hidden="true" />
      </div>

      <div className="about-content">
        <div className="about-copy">
          <p>
            Most of my career has been spent improving real-world operations. I
            have led tourism teams, managed partner networks, and now work
            across e-commerce, sales, and process automation.
          </p>

          <p>
            Today I build practical tools that connect APIs, spreadsheets,
            email, and online stores, turning repetitive work into more
            reliable digital systems. Alongside my work, I am developing my
            software skills and preparing for Economic Informatics studies at
            Óbuda University.
          </p>

          <p className="about-tech-intro">
            Some technologies I currently work with:
          </p>

          <ul className="about-tech-list">
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>

        <div className="about-image">
            <img
                src={portrait}
                alt="András Tóth standing beside the Danube in Budapest"
            />
        </div>
      </div>
    </section>
  );
}

export default About;