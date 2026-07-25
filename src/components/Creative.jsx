function Creative() {
  return (
    <section
      className="creative"
      id="creative"
      aria-labelledby="creative-title"
    >
      <div className="section-heading">
        <h2 className="section-title" id="creative-title">
          / creative
        </h2>

        <div className="section-line" aria-hidden="true" />
      </div>

      <div className="creative-content">
        <h3 className="creative-subtitle">Music & sound design</h3>

        <p className="creative-description">
          I produce music in Logic Pro, exploring synthesis-driven sound design.
        </p>

        <div className="creative-player">
          <article className="creative-track">
            <div className="creative-track-header">
              <p className="creative-track-label">Selected track</p>
              <h4 className="creative-track-title">House Jam 02</h4>
            </div>

            <audio
              className="creative-audio"
              controls
              preload="metadata"
              aria-label="Play House Jam 02"
            >
              <source src="/audio/house-jam-02.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </article>
        </div>

        <a
          className="creative-link"
          href="https://soundcloud.com/unknownartist07"
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen on SoundCloud
        </a>
      </div>
    </section>
  );
}

export default Creative;
