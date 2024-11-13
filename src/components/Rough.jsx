// src/App.js
import React from "react";
import './App.css';

// Hero Section Component
function Hero() {
  return (
    <section
      className="hero w-full min-h-screen flex items-center justify-center text-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?tech,developer')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 px-6 md:px-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-shadow-md">Hello, I'm Anshul Singh</h1>
        <p className="text-xl md:text-2xl font-light mb-6">A passionate Full-Stack Developer</p>
        <a
          href="#contact"
          className="px-8 py-3 bg-indigo-900 hover:bg-indigo-800 text-xl font-semibold rounded-full shadow-lg transition duration-300 ease-in-out"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}

// About Me Section
function About() {
  return (
    <section id="about" className="py-20 px-6 text-center bg-gray-800">
      <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
      <p className="text-lg max-w-2xl mx-auto text-white">
        I am a full-stack developer who specializes in creating modern, efficient, and user-friendly applications. I have a passion for coding and always strive to learn new technologies to improve my skills.
      </p>
    </section>
  );
}

// Skills Section
function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-indigo-400">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="skill-card p-8 bg-indigo-800 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-4 text-white">React</h3>
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React"
                className="w-8 h-8"
              />
            </div>
          </div>
          <div className="skill-card p-8 bg-indigo-800 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-4 text-white">Node.js</h3>
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/64/Node.js_logo_2015.svg"
                alt="Node.js"
                className="w-8 h-8"
              />
            </div>
          </div>
          {/* Add more skill cards here */}
        </div>
      </div>
    </section>
  );
}

// Projects Section
function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-400">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="project-card bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Project 1"
            className="w-full h-40 object-cover rounded-lg mb-6"
          />
          <h3 className="text-xl font-semibold mb-3">Project Title 1</h3>
          <p className="text-gray-600 mb-4">
            A brief description of the project. It solves a specific problem and is built with modern technologies.
          </p>
          <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold">
            View Project
          </a>
        </div>
        <div className="project-card bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Project 2"
            className="w-full h-40 object-cover rounded-lg mb-6"
          />
          <h3 className="text-xl font-semibold mb-3">Project Title 2</h3>
          <p className="text-gray-600 mb-4">
            A brief description of the project. It uses a clean design and integrates with APIs to provide real-time data.
          </p>
          <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold">
            View Project
          </a>
        </div>
        {/* Add more projects here */}
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-lg mb-12">Feel free to reach out if you want to collaborate or just say hello!</p>
      <form className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-4 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button type="submit" className="w-full p-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">
          Send Message
        </button>
      </form>
    </section>
  );
}

// Main App Component
function App() {
  return (
    <div className="body bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-700 text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
