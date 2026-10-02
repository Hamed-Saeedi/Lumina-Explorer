import { useState } from "react";

const planets = [
  {
    name: "Earth",
    type: "Terrestrial Planet",
    description:
      "Our home planet, rich with oceans, life and an atmosphere unlike any other.",
    distance: "149.6M km",
    moons: 1,
    color: "blue",
  },
  {
    name: "Mars",
    type: "Terrestrial Planet",
    description:
      "The red planet with ancient valleys, enormous volcanoes and frozen polar caps.",
    distance: "225M km",
    moons: 2,
    color: "red",
  },
  {
    name: "Jupiter",
    type: "Gas Giant",
    description:
      "The largest planet in our solar system, famous for its massive storms.",
    distance: "778M km",
    moons: 95,
    color: "orange",
  },
];

const missions = [
  {
    year: "1969",
    title: "Apollo 11",
    text: "Humanity takes its first historic steps on the Moon.",
  },
  {
    year: "1990",
    title: "Hubble",
    text: "A new eye in space begins revealing the hidden universe.",
  },
  {
    year: "2021",
    title: "James Webb",
    text: "The most powerful space telescope begins exploring deep space.",
  },
];

function App() {
  const [activePlanet, setActivePlanet] = useState(0);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          LUMINA<span>•</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#planets">Planets</a>
          <a href="#missions">Missions</a>
          <a href="#about">About</a>
        </div>

        <button className="explore-btn">Explore Space ↗</button>
      </nav>

      {/* Hero */}
      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">THE UNIVERSE IS WAITING</p>

            <h1>
              Discover the
              <br />
              <span>infinite.</span>
            </h1>

            <p className="hero-text">
              Explore distant worlds, remarkable missions and the mysteries
              hiding beyond our atmosphere.
            </p>

            <div className="hero-actions">
              <a href="#planets" className="primary-btn">
                Start Exploring →
              </a>

              <a href="#missions" className="secondary-btn">
                View Missions
              </a>
            </div>
          </div>

          <div className="planet-orbit">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="planet">
              <div className="planet-light"></div>
            </div>
          </div>

          <div className="hero-card">
            <span>01</span>
            <div>
              <strong>Explore beyond</strong>
              <p>Earth is only the beginning.</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="stats">
          <div>
            <strong>8</strong>
            <span>Planets</span>
          </div>

          <div>
            <strong>200B+</strong>
            <span>Galaxies</span>
          </div>

          <div>
            <strong>13.8B</strong>
            <span>Years old</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>Possibilities</span>
          </div>
        </section>

        {/* Planets */}
        <section className="planets-section" id="planets">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 — WORLDS</p>
              <h2>Meet our neighbors.</h2>
            </div>

            <p>
              Every planet tells a different story. Choose a world and discover
              what makes it unique.
            </p>
          </div>

          <div className="planet-layout">
            <div className="planet-menu">
              {planets.map((planet, index) => (
                <button
                  key={planet.name}
                  className={
                    activePlanet === index
                      ? "planet-item active"
                      : "planet-item"
                  }
                  onClick={() => setActivePlanet(index)}
                >
                  <span className={`mini-planet ${planet.color}`}></span>

                  <span className="planet-name">
                    <small>0{index + 1}</small>
                    {planet.name}
                  </span>

                  <span>↗</span>
                </button>
              ))}
            </div>

            <div className="planet-info">
              <div className={`large-planet ${planets[activePlanet].color}`}>
                <div className="planet-ring"></div>
              </div>

              <div className="planet-details">
                <p className="eyebrow">{planets[activePlanet].type}</p>

                <h3>{planets[activePlanet].name}</h3>

                <p>{planets[activePlanet].description}</p>

                <div className="planet-data">
                  <div>
                    <span>Distance</span>
                    <strong>{planets[activePlanet].distance}</strong>
                  </div>

                  <div>
                    <span>Moons</span>
                    <strong>{planets[activePlanet].moons}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Missions */}
        <section className="missions-section" id="missions">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 — HUMANITY</p>
              <h2>Moments that changed everything.</h2>
            </div>

            <p>
              From the first footsteps on the Moon to looking deeper into the
              universe.
            </p>
          </div>

          <div className="mission-list">
            {missions.map((mission, index) => (
              <article className="mission-card" key={mission.title}>
                <span className="mission-number">0{index + 1}</span>

                <span className="mission-year">{mission.year}</span>

                <div>
                  <h3>{mission.title}</h3>
                  <p>{mission.text}</p>
                </div>

                <span className="mission-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="cta" id="about">
          <p className="eyebrow">THERE IS ALWAYS MORE</p>

          <h2>
            The universe is
            <br />
            <span>far bigger</span> than we imagine.
          </h2>

          <p>Keep looking up. Every discovery begins with curiosity.</p>

          <button className="primary-btn">Begin Your Journey →</button>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="logo">
          LUMINA<span>•</span>
        </div>

        <p>Exploring the universe, one discovery at a time.</p>

        <span>© 2026 LUMINA</span>
      </footer>
    </div>
  );
}

export default App;
