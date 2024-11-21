import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Real-time Chat App",
    description: "A modern chat application with real-time messaging capabilities",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&auto=format&fit=crop&q=60",
    demoUrl: "https://chat-app.demo",
    githubUrl: "https://github.com/username/chat-app",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"]
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured online store with payment integration",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=60",
    demoUrl: "https://ecommerce.demo",
    githubUrl: "https://github.com/username/ecommerce",
    techStack: ["Next.js", "Stripe", "PostgreSQL", "Prisma"]
  },
  {
    title: "AI Image Generator",
    description: "Generate unique images using artificial intelligence",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
    demoUrl: "https://ai-image.demo",
    githubUrl: "https://github.com/username/ai-image",
    techStack: ["Python", "TensorFlow", "React", "FastAPI"]
  }
];

export const Projects = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-navy">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;