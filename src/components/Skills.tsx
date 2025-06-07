
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 80 },
        { name: "C", level: 70   }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", level: 99 },
        { name: "CSS", level: 95 },
        { name: "JavaScript", level: 75 },    
        { name: "React", level: 90 },
        { name: "Node.js", level: 90 }
      ]
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "Git", level: 85 },
        { name: "Django", level: 90 },
        { name: "My SQL", level: 80 },
        { name: "My SQL Lite", level: 90 },
        { name: "PostgreSQL", level: 75 }
      ]
    },
    {
      title: "Design & UI/UX",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Adobe XD", level: 80 },
        { name: "Responsive Design", level: 80 },
        { name: "Bootstrap CSS", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6 glass-hover">
              <h3 className="text-xl font-poppins font-semibold mb-6 text-accent">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground/80">
                        {skill.name}
                      </span>
                      <span className="text-xs text-foreground/60">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
