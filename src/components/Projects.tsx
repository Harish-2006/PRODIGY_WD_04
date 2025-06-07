import { useState } from 'react';
import { Github, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Pink Themed Login Page",
      description: "Full-stack Login Page with modern UI and admin dashboard.",
      image: "pink_themed_login_page.png",
      tech: ["HTML", "CSS", "JavaScript", "Python", "Django", "MySQl lite"],
      category: "Software",
      github: "https://github.com/Harish-2006/Pink-themed-login_page.git",
      
    },
    {
      id: 2,
      title: "Temporary Chat Web Application",
      description: "A secure, ephemeral chat web application enabling real-time conversations that reset with each session — ideal for temporary and privacy-focused communication.",
      image: "Temporary_chat_application.png",
      tech: ["HTML", "CSS", "JavaScript", "JSON"],
      category: "Software",
      github: "https://github.com/Harish-2006/Temporary-Chat-web-Application.git",
      
    },
    {
      id: 3,
      title: "Weather App",
      description: "A real-time weather application that fetches accurate forecasts using a dynamic weather API for location-based updates.",
      image: "Weather_app.png",
      tech: ["React", "Tailwind", "TypeScript", "Framer Motion"],
      category: "Web",
      github: "https://github.com/Harish-2006/Weather-Application.git",
      demo: "https://harish-weather-app1.netlify.app/"
    },
    {
      id: 4,
      title: "Tic Tac Toe Game",
      description: "A classic Tic Tac Toe game built with HTML, CSS, and JavaScript featuring smooth interactions and responsive design.",
      image: "Tic_Tac_Toe.png",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Web",
      github: "https://github.com/Harish-2006/Tic-Tac-Toe.git",
      demo: "https://harish-tic-tac-toe.netlify.app/"
    },
    {
      id: 5,
      title: "Responsive Landing Page",
      description: "Interactive, responsive landing page crafted with HTML, CSS, and TypeScript for a smooth user experience.",
      image: "responsive_landing_page.png",
      tech: ["HTML", "CSS", "JavaScript", "TypeScript", "Tailwind"],
      category: "Design",
      github: "https://github.com/Harish-2006/Responsive-Landing-Page.git",
      
    },
    {
      id: 6,
      title: "Simple Stopwatch",
      description: "Effortless and precise stopwatch built for seamless time tracking.",
      image: "Stopwatch.png",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Web",
      github: "https://github.com/Harish-2006/Stopwatch.git",
      demo: "https://harish-stopwatch1.netlify.app/"
    }
  ];

  const categories = ['All', 'Web', 'Software', 'Design'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category 
                    ? 'bg-primary text-white' 
                    : 'border-primary/30 text-primary hover:bg-primary/10'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card overflow-hidden glass-hover group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30">
                      <Github size={16} />
                    </Button>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30">
                      <ArrowUp size={16} className="rotate-45" />
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-poppins font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span className="text-xs px-3 py-1 bg-accent/20 text-accent rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
