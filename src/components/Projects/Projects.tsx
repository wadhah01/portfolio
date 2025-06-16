import { useState } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Intranet Communication Platform",
    description: "A platform for internal communication and information sharing between members of the same company.",
    image: "../img/intranet.png",
    demoUrl: "https://intranetplatefrom.netlify.app/login",
    githubUrl: "https://github.com/username/intranet-platform",
    techStack: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "Pokedex Web App",
    description: "An interactive web app displaying Pokémon data using a public API.",
    image: "../img/pokedex.png",
    demoUrl: "https://mypokemonx.netlify.app/",
    githubUrl: "https://github.com/wadhah01/Pokemons",
    techStack: ["React", "JavaScript", "PokéAPI","Vite"]
  },
  {
    title: "Coffeeshop Website",
    description: "A stylish website for a local coffee shop featuring their menu, location, and contact options.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=60",
    demoUrl: "https://coffeeshop-site.demo",
    githubUrl: "https://github.com/wadhah01/CoffeeShop",
    techStack: ["HTML", "CSS", "bootstrap","PHP","MySQL"]
  },
  {
    title: "SortList Scraper Extension",
    description: "A browser extension to scrape and export data from Sortlist listings.",
    image: "../img/sortlist.png",
    demoUrl: "https://sortlist-scraper.demo",
    githubUrl: "https://github.com/username/sortlist-scraper",
    techStack: ["JavaScript", "Chrome Extension APIs"]
  },
  {
    title: "Weather App",
    description: "A simple weather forecast application fetching real-time data from a public API.",
    image: "https://images.unsplash.com/photo-1534081333815-ae5019106622?w=800&auto=format&fit=crop&q=60",
    demoUrl: "https://github.com/wadhah01/WeatherApp",
    githubUrl: "https://github.com/wadhah01/WeatherApp",
    techStack: ["React", "OpenWeatherMap API"]
  },
  {
    title: "Crypto Swap Interface",
    description: "A decentralized PancakeSwap-style interface with real-time token swap functionalities on the Binance Smart Chain.",
    image: "../img/pancakeswap.png",
    demoUrl: "https://wadhah01.github.io/pcs.github.io/#/swap",
    githubUrl: "https://github.com/wadhah01/pcs.github.io",
    techStack: ["React", "Web3.js", "Solidity", "Binance Smart Chain"]
  }
];


const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-navy via-navy/95 to-navy">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gold">
          Personal Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;