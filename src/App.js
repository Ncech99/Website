import React from 'react';
import './App.css';
import { Typewriter } from 'react-simple-typewriter';

function App() {
  const projects = [
    {
      title: 'Website - ncech.dev',
      description: 'Put this site together as a portfolio. Decided to play with React and built this website with it.',
      link: 'https://github.com/Ncech99/Website',
    },
    {
      title: 'OfficeShortcut',
      description: 'I got tired of manually opening incognito mode and typing or clicking on a bookmark to portal.office.com, so I made a Chrome extension that does it all with one button. That’s it! Made with Manifest V3. Published on Chrome Store and MS Edge add on store.',
      link: 'https://github.com/Ncech99/OfficeShortcut',
    },
    {
      title: 'Discord Music Bot',
      description: 'I wanted to listen to music with friends on Discord. At the time, other bots were getting shut down for commercialization, so I made my own! It was JavaScript based, using Discord.js and other dependencies. Due to the constant need to update dependencies and my decreasing interest in using it, the bot has since been shut down. ',
      link: 'https://github.com/Ncech99/MusicBot',
    },
  ];

  return (
    <div>
      <header>
        <img src="/profile.jpg" alt="Nathan Cech" className="profile-pic" />

        <h1>Nathan Cech</h1>

        <h2>
          <Typewriter
            words={["Full Stack Developer", "Web Developer"]}
            loop={0}               // loop infinitely
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={3500}
          />
        </h2>

        <div className="social-links">
          <a
            href="https://github.com/Ncech99?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src="/github.png" alt="GitHub" />
          </a>
          <a
            className="linkedin-icon"
            href="https://www.linkedin.com/in/nathan-cech-7630921a3/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </header>

      <div className="container">
        <main>
          <section className="about">
            <h2>About Me</h2>
              <p className="bio-text">
                Hi, I'm Nathan Cech, a Full Stack Developer with a strong focus on web development.
                While I specialize in building web applications, I’m open to exploring new opportunities in various areas of development.
                Welcome to my portfolio! Feel free to browse through my projects, and don’t hesitate to reach out if you'd like to connect or collaborate.
              </p>
            </section>

          <section className="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
              {projects.map((proj, idx) => (
                <a
                  key={idx}
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card"
                >
                  <h3>{proj.title}</h3>
                  <p>{proj.description}</p>
                </a>
              ))}
            </div>
          </section>

          <section className="contact">
            <h2>Contact</h2>
            <p>Email: ncech1110@gmail.com</p>
          </section>
        </main>
      </div>

      <footer>
        <p>
          &copy; 2025 Nathan Cech &nbsp;|&nbsp; 
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </p>
        <p className="hosted-by">
          Hosted by <a href="https://kodysalak.com" target="_blank" rel="noopener noreferrer">Kody Salak</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
