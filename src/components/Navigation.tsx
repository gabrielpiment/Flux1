import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import { SignupModal } from "./SignupModal";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : ''
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src={logo} alt="Flux Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Navegação Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#features" className={`${
              scrolled ? 'text-gray-700' : 'text-white'
            } hover:text-primary transition-colors`}>
              Recursos
            </a>
            <a href="/#testimonials" className={`${
              scrolled ? 'text-gray-700' : 'text-white'
            } hover:text-primary transition-colors`}>
              Depoimentos
            </a>
            <a href="/#pricing" className={`${
              scrolled ? 'text-gray-700' : 'text-white'
            } hover:text-primary transition-colors`}>
              Preços
            </a>
            <div className="flex items-center space-x-4">
              <a href="https://crm.fluxconversa.com.br/login" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className={`${
                  scrolled 
                    ? "bg-transparent border-2 border-primary !text-primary font-semibold hover:bg-primary/5"
                    : "bg-transparent border-2 border-white !text-white font-semibold hover:bg-white/10"
                } transition-colors`}>
                  Login
                </Button>
              </a>
              <Button 
                variant="default" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => setIsSignupModalOpen(true)}
              >
                Criar Conta
              </Button>
            </div>
          </div>

          {/* Toggle de Navegação Mobile */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className={`${
              scrolled ? 'text-gray-700' : 'text-white'
            }`} onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Menu de Navegação Mobile */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in bg-white/10 backdrop-blur-lg rounded-lg mx-4">
            <div className="flex flex-col space-y-4 px-4">
              <a href="/#features" className={`${
                scrolled ? 'text-gray-700' : 'text-white/80'
              } hover:text-primary transition-colors`}>
                Recursos
              </a>
              <a href="/#testimonials" className={`${
                scrolled ? 'text-gray-700' : 'text-white/80'
              } hover:text-primary transition-colors`}>
                Depoimentos
              </a>
              <a href="/#pricing" className={`${
                scrolled ? 'text-gray-700' : 'text-white/80'
              } hover:text-primary transition-colors`}>
                Preços
              </a>
              <div className="flex flex-col space-y-2">
                <a href="https://crm.fluxconversa.com.br/login" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className={`w-full ${
                    scrolled 
                      ? "bg-transparent border-2 border-primary !text-primary font-semibold hover:bg-primary/5"
                      : "bg-transparent border-2 border-white !text-white font-semibold hover:bg-white/10"
                  } transition-colors`}>
                    Login
                  </Button>
                </a>
                <Button 
                  variant="default" 
                  className="w-full bg-white text-primary hover:bg-white/90"
                  onClick={() => {
                    setIsSignupModalOpen(true);
                    setIsOpen(false);
                  }}
                >
                  Criar Conta
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Modal de Cadastro */}
      <SignupModal 
        isOpen={isSignupModalOpen} 
        onClose={() => setIsSignupModalOpen(false)} 
      />
    </nav>
  );
};
