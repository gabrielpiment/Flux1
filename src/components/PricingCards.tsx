import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, Gift } from 'lucide-react';

interface PricingPlan {
  title: string;
  subtitle: string;
  price: number;
  features: {
    included: boolean;
    text: string;
    additionalPrice?: number;
  }[];
}

const PricingCards: React.FC = () => {
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    setShowLeftScroll(container.scrollLeft > 0);
    setShowRightScroll(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  const scrollToNext = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cardWidth = 300; // Largura do card + gap
      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      if (currentScroll >= maxScroll) {
        // Se estiver no final, volta para o início
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollTo({
          left: currentScroll + cardWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(scrollToNext, 3000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  const plans: PricingPlan[] = [
    {
      title: 'Basic',
      subtitle: 'Digital Flux',
      price: 299,
      features: [
        { included: true, text: '1 Conexão' },
        { included: true, text: '5 usuários' },
        { included: false, text: 'Disparos em massa', additionalPrice: 99.90 },
        { included: false, text: 'Automações de fluxo' },
        { included: false, text: 'Integrações com APIs' },
        { included: false, text: 'Integrações com redes sociais', additionalPrice: 99.90 },
      ],
    },
    {
      title: 'Pro',
      subtitle: 'Digital Flux Pro',
      price: 499,
      features: [
        { included: true, text: '3 Conexões' },
        { included: true, text: '10 usuários' },
        { included: true, text: 'Disparos em massa' },
        { included: true, text: 'Automações de fluxo' },
        { included: false, text: 'Integrações com APIs' },
        { included: true, text: 'Integrações com redes sociais' },
      ],
    },
    {
      title: 'Enterprise',
      subtitle: 'Digital Flux Enterprise',
      price: 999,
      features: [
        { included: true, text: 'Conexões ilimitadas' },
        { included: true, text: 'Usuários ilimitados' },
        { included: true, text: 'Disparos em massa' },
        { included: true, text: 'Automações de fluxo' },
        { included: true, text: 'Integrações com APIs' },
        { included: true, text: 'Integrações com redes sociais' },
      ],
    },
  ];

  return (
    <div className="relative w-full">
      {/* Banner de teste grátis */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-lg mb-6 shadow-lg mx-4">
        <div className="flex items-center justify-center gap-2">
          <Gift className="w-5 h-5 animate-bounce" />
          <span className="font-semibold">Experimente 7 dias grátis!</span>
          <Gift className="w-5 h-5 animate-bounce" />
        </div>
        <p className="text-center text-sm mt-1 text-blue-100">Sem compromisso. Cancele quando quiser.</p>
      </div>

      {/* Container dos cards com scroll horizontal */}
      <div 
        ref={containerRef}
        className="flex overflow-x-auto gap-6 pb-6 px-6 md:px-4 snap-x snap-mandatory hide-scrollbar"
        onScroll={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={handleTouchStart}
        onMouseLeave={handleTouchEnd}
      >
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[280px] bg-white rounded-lg p-6 shadow-lg snap-center relative overflow-hidden first:ml-2 last:mr-2"
          >
            {/* Tag de teste grátis no card */}
            <div className="absolute -right-8 top-6 bg-blue-600 text-white px-8 py-1 rotate-45 transform text-sm font-semibold shadow-md">
              7 dias grátis
            </div>

            <h3 className="text-lg font-semibold">{plan.title}</h3>
            <h4 className="text-2xl font-bold mt-2">{plan.subtitle}</h4>
            <div className="text-4xl font-bold mt-4">
              R$ {plan.price}
              <span className="text-lg font-normal text-gray-600">/mês</span>
            </div>
            
            <div className="mt-6 space-y-4">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  {feature.included ? (
                    <span className="text-green-500">✓</span>
                  ) : (
                    <span className="text-gray-400">×</span>
                  )}
                  <span className="flex-1">{feature.text}</span>
                  {feature.additionalPrice && (
                    <span className="text-sm text-red-500">
                      +{feature.additionalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <button className="w-full mt-6 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
              Começar teste grátis
            </button>
            <p className="text-center text-sm text-gray-500 mt-2">
              7 dias grátis, depois R$ {plan.price}/mês
            </p>
          </div>
        ))}
      </div>

      {/* Indicador de scroll esquerdo */}
      {showLeftScroll && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white/90 to-transparent p-2 flex items-center md:hidden">
          <div className="bg-white/80 rounded-full p-2 shadow-lg backdrop-blur-sm">
            <ChevronLeft className="w-6 h-6 text-gray-600 animate-pulse" />
          </div>
        </div>
      )}

      {/* Indicador de scroll direito */}
      {showRightScroll && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white/90 to-transparent p-2 flex items-center md:hidden">
          <div className="bg-white/80 rounded-full p-2 shadow-lg backdrop-blur-sm">
            <ChevronRight className="w-6 h-6 text-gray-600 animate-pulse" />
          </div>
        </div>
      )}

      {/* Indicador de texto */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-sm text-gray-500 bg-white/80 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm md:hidden">
        Arraste para ver mais planos
      </div>
    </div>
  );
};

export default PricingCards; 