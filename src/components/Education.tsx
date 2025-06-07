
const Education = () => {
  const educationData = [
    {
      type: "education",
      title: "Under Graduate Degree in Artificial Intelligence & Data Science",
      institution: "Panimalar Engineering College",
      year: "2023 - 2027",
      description: "Cutting-edge department driving innovation through artificial intelligence and data science research and applications.",
      logo: "education_clg.png"
    },
    {
      type: "certification",
      title: "Python Full Stack Developer",
      institution: "Hejex Technologies",
      year: "2024",
      description: "Completed a comprehensive Python Full Stack development course, mastering both backend and frontend web development skills.",
      logo: "hejex.png"
    },
    {
      type: "certification",
      title: "Data Science for beginners",
      institution: "Future Skills Prime - Nasscom",
      year: "2023",
      description: "Aligned to Competency Standards developed by IT-ITeS Sector Skills Council",
      logo: "nasscom.png"
    },
    {
      type: "certification",
      title: "Generative AI Certified",
      institution: "ORCALE University",
      year: "2024",
      description: "Certified in Generative AI through Oracle University, gaining expertise in cutting-edge AI technologies and applications.",
      logo: "oracle.png"
    },

  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 gradient-text">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div key={index} className={`flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="glass-card p-6 glass-hover">
                    <div className="flex items-center mb-3 gap-3">
                      {index % 2 === 0 ? (
                        <>
                          <div>
                            <span className={`inline-block px-3 py-1 text-xs rounded-full ${
                              item.type === 'education' 
                                ? 'bg-primary/20 text-primary' 
                                : 'bg-accent/20 text-accent'
                            }`}>
                              {item.type === 'education' ? 'Education' : 'Certification'}
                            </span>
                            <h3 className="text-xl font-poppins font-semibold mt-2">
                              {item.title}
                            </h3>
                          </div>
                          <img
                            src={item.logo}
                            alt={item.institution}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                        </>
                      ) : (
                        <>
                          <img
                            src={item.logo}
                            alt={item.institution}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <span className={`inline-block px-3 py-1 text-xs rounded-full ${
                              item.type === 'education' 
                                ? 'bg-primary/20 text-primary' 
                                : 'bg-accent/20 text-accent'
                            }`}>
                              {item.type === 'education' ? 'Education' : 'Certification'}
                            </span>
                            <h3 className="text-xl font-poppins font-semibold mt-2">
                              {item.title}
                            </h3>
                          </div>
                        </>
                      )}
                    </div>
                    
                    <p className="text-accent font-medium mb-2">
                      {item.institution}
                    </p>
                    <p className="text-foreground/60 text-sm mb-3">
                      {item.year}
                    </p>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="w-2/12 flex justify-center">
                  <div className={`w-4 h-4 rounded-full border-4 ${
                    item.type === 'education' ? 'bg-primary border-primary' : 'bg-accent border-accent'
                  } shadow-lg`}></div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
