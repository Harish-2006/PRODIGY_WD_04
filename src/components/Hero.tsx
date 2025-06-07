
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [displayText2, setDisplayText2] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const fullText = "Python Full Stack Developer | AI & Web Enthusiast"
  const fullText2 = "Code with purpose. Design with flair. Deploy with confidence.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (!showSecondLine) {
      // Start second line after first line is complete
      setTimeout(() => setShowSecondLine(true), 500);
    }
  }, [currentIndex, fullText, showSecondLine]);

  useEffect(() => {
    if (showSecondLine && currentIndex2 < fullText2.length) {
      const timeout = setTimeout(() => {
        setDisplayText2(prev => prev + fullText2[currentIndex2]);
        setCurrentIndex2(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex2, fullText2, showSecondLine]);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
      </div>

       <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6">
            Hi, I'm <span className="gradient-text">Harish Jayaguru</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-foreground/80 mb-2 h-8">
            <span className={`${currentIndex >= fullText.length ? '' : 'border-r-2 border-primary animate-blink'}`}>
              {displayText}
            </span>
          </div>

          <div className="text-lg md:text-xl text-foreground/70 mb-8 h-8">
            {showSecondLine && (
              <span className={`${currentIndex2 >= fullText2.length ? '' : 'border-r-2 border-primary animate-blink'}`}>
                {displayText2}
              </span>
            )}
          </div>

          <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            A creator who codes, designs, and learns with intention. Blending clean visuals with smart logic, he's crafting experiences that are as thoughtful as they are functional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
<a href="/Harish_Resume.pdf" download target="_blank" rel="noopener noreferrer">
  <Button 
    size="lg" 
    variant="outline"
    className="border-accent text-accent hover:bg-accent hover:text-background px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-48"
  >
    Download Resume
  </Button>
</a>

            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#projects')}
              className="border-accent text-accent hover:bg-accent hover:text-background px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-48"
            >
              View Projects
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#contact')}
              className="border-accent text-accent hover:bg-accent hover:text-background px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-48"
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll Indicator - moved further down */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-foreground/60" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
