import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.intranet.title'),
      description: t('projects.intranet.description'),
      image: '/img/intranet.png',
      demoUrl: 'https://intranetplatefrom.netlify.app/login',
      githubUrl: 'https://github.com/username/intranet-platform',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      title: t('projects.pokedex.title'),
      description: t('projects.pokedex.description'),
      image: '/img/pokedex.png',
      demoUrl: 'https://mypokemonx.netlify.app/',
      githubUrl: 'https://github.com/wadhah01/Pokemons',
      techStack: ['React', 'JavaScript', 'PokéAPI', 'Vite'],
    },
    {
      title: t('projects.coffeeshop.title'),
      description: t('projects.coffeeshop.description'),
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=60',
      demoUrl: 'https://coffeeshop-site.demo',
      githubUrl: 'https://github.com/wadhah01/CoffeeShop',
      techStack: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],
    },
    {
      title: t('projects.sortlist.title'),
      description: t('projects.sortlist.description'),
      image: '/img/sortlist.png',
      demoUrl: 'https://sortlist-scraper.demo',
      githubUrl: 'https://github.com/username/sortlist-scraper',
      techStack: ['JavaScript', 'Chrome Extension APIs'],
    },
    {
      title: t('projects.weather.title'),
      description: t('projects.weather.description'),
      image: 'https://images.unsplash.com/photo-1534081333815-ae5019106622?w=800&auto=format&fit=crop&q=60',
      demoUrl: 'https://github.com/wadhah01/WeatherApp',
      githubUrl: 'https://github.com/wadhah01/WeatherApp',
      techStack: ['React', 'OpenWeatherMap API'],
    },
    {
      title: t('projects.crypto.title'),
      description: t('projects.crypto.description'),
      image: '/img/pancakeswap.png',
      demoUrl: 'https://wadhah01.github.io/pcs.github.io/#/swap',
      githubUrl: 'https://github.com/wadhah01/pcs.github.io',
      techStack: ['React', 'Web3.js', 'Solidity', 'Binance Smart Chain'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-navy via-navy/95 to-navy">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gold">
          {t('projects.sectionTitle')}
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