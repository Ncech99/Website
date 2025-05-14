import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>Nathan Cech</h1>
        <p>Developer</p>
      </header>

      <main>
        <section className="about">
          <h2>About Me</h2>
          <p>
            Hi, I'm Nathan Cech.
          </p>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <div className="project-cards">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>Desc</p>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>Desc</p>
            </div>
            <div className="project-card">
              <h3>Project 3</h3>
              <p>Desc</p>
            </div>
          </div>
        </section>

        <section className="contact">
          <h2>Contact</h2>
          <p>Email: ncech1110@gmail.com</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Nathan Cech</p>
      </footer>
    </div>
  );
}
