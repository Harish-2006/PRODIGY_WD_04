
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-poppins font-bold gradient-text mb-2">
              Harish Jayaguru
            </h3>
            <p className="text-foreground/60">
              Design. Develop. Disrupt. — Building smarter, sleeker digital futures.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-foreground/60 text-sm mb-4 md:mb-0">
              © 2025 Harish Jayaguru. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-foreground/60">


              <button 
                onClick={scrollToTop}
                className="p-2 glass-card glass-hover rounded-full"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
