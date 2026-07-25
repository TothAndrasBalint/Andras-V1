import "./App.css";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />

      <main className="site">
        <section className="hero" id="home">
          <p className="hero-intro">Hi, my name is</p>

          <h1 className="hero-title">András Tóth.</h1>

          <h2 className="hero-subtitle">
            I build practical digital systems.
          </h2>

          <p className="hero-description">
            I work across e-commerce, operations, and automation, turning
            repetitive processes into reliable tools.
          </p>

          <a className="hero-link" href="#projects">
            View my work
          </a>
        </section>
      </main>
    </>
  );
}

export default App;
