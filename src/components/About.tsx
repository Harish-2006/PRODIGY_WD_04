
const About = () => {
  const highlights = [
    "Full-Stack Developer",
    "Creative Coder ",
    "Future-Ready Tech Crafter",
    "AI Enthusiast",
    "Open Source Contributor",
    "Problem Solver"
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-center lg:pl-12 order-2 lg:order-1">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 glass-card p-4 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="glass-card p-6 md:p-8 glass-hover">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
               I'm someone who’s passionate about building and designing things with tech. I enjoy coding — especially in Python — and I’ve 
               explored web development using HTML, CSS, JavaScript, and ReactJS. I’ve worked on both frontend and backend projects.
               I'm also learning Dart and Flutter to step into mobile development.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and staying at the forefront of technological advancement.
                
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="glass-card p-3 md:p-4 text-center glass-hover"
                >
                  <span className="text-xs md:text-sm font-medium text-accent">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
