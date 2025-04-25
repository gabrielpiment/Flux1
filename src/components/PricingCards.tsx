import React from 'react';
import { ChevronRight, Gift } from 'lucide-react';

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
    // Adicione outros planos aqui se necessário
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
      <div className="flex overflow-x-auto gap-4 pb-6 px-4 snap-x snap-mandatory hide-scrollbar">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] bg-white rounded-lg p-6 shadow-lg snap-center relative overflow-hidden"
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

      {/* Indicadores de scroll */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white/90 to-transparent p-2 flex items-center md:hidden">
        <ChevronRight className="w-6 h-6 text-gray-400 animate-pulse" />
      </div>
    </div>
  );
};

export default PricingCards; 