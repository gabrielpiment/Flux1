import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Search, Star, Users, Check, BadgeCheck, ChevronRight, X, Bot, Target, Zap, BarChart3, Share2, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from "react";

const features = [
  {
    icon: Search,
    title: "Busca Poderosa",
    description: "Encontre o que precisa instantaneamente com nossas capacidades avançadas de busca.",
  },
  {
    icon: Star,
    title: "Recursos de Ponta",
    description: "Ferramentas líderes de mercado que te ajudam a alcançar mais.",
  },
  {
    icon: Users,
    title: "Colaboração em Equipe",
    description: "Trabalhe em conjunto perfeitamente com sua equipe em tempo real.",
  },
];

const testimonials = [
  {
    quote: "O sistema é muito intuitivo e fácil de usar. As automações nos fizeram ganhar tempo e conseguimos focar no que realmente importa: vender.",
    author: "Marcos Almeida",
    role: "CEO da VivaMais Imóveis"
  },
  {
    quote: "Com o CRM, conseguimos enxergar onde estávamos perdendo oportunidades e ajustar nossa abordagem. O suporte também é muito atencioso.",
    author: "Fernanda Costa",
    role: "Gerente de Relacionamento na EduMais Cursos"
  },
  {
    quote: "Já testei vários CRMs, mas nenhum foi tão completo e simples ao mesmo tempo. A integração com WhatsApp e e-mail salvou nossa operação.",
    author: "Ricardo Menezes",
    role: "Sócio da MobiAuto Veículos"
  },
  {
    quote: "Acompanhamos todos os leads em tempo real e isso fez toda a diferença no nosso atendimento. A equipe comercial ficou muito mais engajada!",
    author: "Carla Nunes",
    role: "Supervisora de Atendimento na Clínica Vida Plena"
  },
  {
    quote: "Antes era tudo no Excel, uma confusão danada. Agora com o CRM, temos dashboards, metas e alertas automáticos. Parece que tiraram um peso das nossas costas.",
    author: "Júlio Bastos",
    role: "Diretor Comercial da Construtora Bastos & Lima"
  },
  {
    quote: "O sistema ajudou muito nossa imobiliária. Agora, cada corretor sabe exatamente o que precisa fazer no dia. E o melhor: as vendas aumentaram!",
    author: "Tatiane Oliveira",
    role: "Gestora na Imobiliária Terra Sul"
  },
  {
    quote: "Nosso time estava sobrecarregado com tarefas repetitivas. As automações resolveram isso. Nunca foi tão fácil acompanhar a jornada do cliente.",
    author: "Douglas Freitas",
    role: "Gerente de Projetos na NexOne Tecnologia"
  },
  {
    quote: "O CRM nos ajudou até na retenção dos nossos alunos. Conseguimos segmentar e personalizar os contatos, e isso refletiu direto na taxa de renovação.",
    author: "Isabela Martins",
    role: "Coordenadora de Relacionamento na UniFácil EAD"
  },
  {
    quote: "Logo na primeira semana já conseguimos ver diferença nos processos. Tudo mais fluido, sem ruído entre os setores. A plataforma é muito bem pensada!",
    author: "Felipe Sanches",
    role: "Analista de Marketing no Grupo CarFlex"
  }
];

const pricing = [
  {
    name: "Digital Flux",
    type: "Basic",
    price: "299",
    period: "/mês",
    features: [
      { text: "1 Conexão", included: true },
      { text: "5 usuários", included: true },
      { text: "Disparos em massa", included: false, addon: "+99,90" },
      { text: "Automações de fluxo", included: false },
      { text: "Integrações com APIs", included: false },
      { text: "Integrações com redes sociais", included: false, addon: "+99,90" },
    ],
    buttonText: "Vamos começar",
    buttonVariant: "outline" as const,
  },
  {
    name: "Growth Digital Flux",
    type: "Mais Popular",
    price: "599",
    period: "/mês",
    features: [
      { text: "2 Conexões", included: true },
      { text: "10 usuários", included: true },
      { text: "Disparos em massa", included: true },
      { text: "Automações de fluxo", included: true },
      { text: "Integrações com APIs", included: true },
      { text: "Integrações com redes sociais", included: false, addon: "+99,90" },
    ],
    buttonText: "Dê um Upgrade",
    buttonVariant: "default" as const,
    highlighted: true,
  },
  {
    name: "Pro Digital Flux",
    type: "Premium",
    price: "899",
    period: "/mês",
    features: [
      { text: "3 Conexão", included: true },
      { text: "15 usuários", included: true },
      { text: "Disparos em massa", included: true },
      { text: "Automações de fluxo", included: true },
      { text: "Integrações com APIs", included: true },
      { text: "Integrações com redes sociais", included: true },
    ],
    buttonText: "Adquirir Plano",
    buttonVariant: "outline" as const,
    enterprise: true,
  },
  {
    name: "Plano Personalizado",
    type: "Custom",
    price: "Sob consulta",
    features: [
      "Conexões ilimitadas",
      "Usuários ilimitados",
      "Disparos em massa",
      "Automações de fluxo",
      "Integrações com APIs",
      "Conecte-se facilmente com ferramentas como WhatsApp, Instagram, Facebook, Telegram e e-mail"
    ],
    buttonText: "Fale Conosco",
    buttonVariant: "outline" as const,
    isCustom: true,
    whatsappLink: "https://wa.me/+5534991557772?text=Gostaria%20de%20personalizar%20meu%20plano"
  }
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (window.innerWidth < 768) {
        setCurrentFeature((prev) => (prev + 1) % 5);
        featuresRef.current?.scrollTo({
          left: (window.innerWidth * 0.85 + 32) * ((currentFeature + 1) % 5),
          behavior: 'smooth'
        });
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentFeature]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-radial from-[#1A1A1A] via-[#4A1118] to-[#E31D3C]">
      <Navigation />
      
      {/* Seção Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in text-center">
              Transforme Relacionamentos em Resultados
            </h1>
            <p className="mt-6 text-base md:text-xl text-white/90 animate-fade-in leading-relaxed">
              Descubra uma nova forma de gerenciar seus clientes com eficiência e inteligência. Nosso CRM foi desenvolvido para simplificar processos, automatizar tarefas e proporcionar uma visão completa do seu funil de vendas. Ideal para pequenas e médias empresas que buscam crescimento sustentável.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <a href="https://crm.fluxconversa.com.br/signup" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="default" className="w-full">
                  Vamos Começar
                </Button>
              </a>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Conhecer a Plataforma
              </Button>
            </div>
            <div className="flex justify-center mt-6">
              <span className="bg-red-600 text-white py-2 px-6 rounded-full inline-block font-medium shadow-lg">
                Experimente grátis por 7 dias
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre Nós */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary hover:text-primary/80 transition-colors cursor-default group">
            <span className="inline-block transform group-hover:scale-105 transition-transform duration-300">Sobre Nós</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologia que Impulsiona Conexões Humanas
          </p>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Somos uma empresa brasileira comprometida em oferecer soluções de CRM que unem tecnologia de ponta com a simplicidade necessária para o dia a dia dos negócios. Nossa missão é empoderar equipes comerciais a atingirem seu máximo potencial, fortalecendo o relacionamento com seus clientes.
          </p>
        </div>
      </section>

      {/* Seção de Recursos */}
      <section id="features" className="py-20 px-4 bg-gray-50 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary hover:text-primary/80 transition-colors cursor-default group">
            <span className="inline-block transform group-hover:scale-105 transition-transform duration-300">
              Funcionalidades
            </span>
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600">
            Tudo o que Você Precisa em um Só Lugar
          </p>
          <div 
            ref={featuresRef}
            className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className={`w-[85vw] md:w-auto flex-shrink-0 snap-start p-6 rounded-lg border bg-white shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/20 group cursor-pointer ${currentFeature === 0 ? 'scale-[1.02]' : ''}`}>
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">Gestão de Leads</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Organize e acompanhe seus leads de forma eficiente, desde a captação até o fechamento.</p>
            </div>
            <div className={`w-[85vw] md:w-auto flex-shrink-0 snap-start p-6 rounded-lg border bg-white shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/20 group cursor-pointer ${currentFeature === 1 ? 'scale-[1.02]' : ''}`}>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">Automação de Tarefas</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Reduza o trabalho manual com automações inteligentes que economizam tempo e recursos.</p>
            </div>
            <div className={`w-[85vw] md:w-auto flex-shrink-0 snap-start p-6 rounded-lg border bg-white shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/20 group cursor-pointer ${currentFeature === 2 ? 'scale-[1.02]' : ''}`}>
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">Relatórios Personalizados</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Acesse insights valiosos sobre o desempenho da sua equipe e identifique oportunidades de melhoria.</p>
            </div>
            <div className={`w-[85vw] md:w-auto flex-shrink-0 snap-start p-6 rounded-lg border bg-white shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/20 group cursor-pointer ${currentFeature === 3 ? 'scale-[1.02]' : ''}`}>
              <div className="flex items-center gap-2 mb-2">
                <Share2 className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">Integrações</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Conecte-se facilmente com ferramentas como WhatsApp, Instagram, Facebook, Telegram e e-mail.</p>
            </div>
            <div className={`w-[85vw] md:w-auto flex-shrink-0 snap-start p-6 rounded-lg border bg-white shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/20 group cursor-pointer ${currentFeature === 4 ? 'scale-[1.02]' : ''}`}>
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">Acesso Remoto</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Gerencie suas operações de qualquer lugar, com segurança e praticidade.</p>
            </div>
            <div className={`w-[85vw] md:w-auto flex-shrink-0 snap-start p-6 rounded-lg border bg-white shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/20 group cursor-pointer ${currentFeature === 5 ? 'scale-[1.02]' : ''}`}>
              <div className="flex items-center gap-2 mb-2">
                <Bot className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">Agentes de IA</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Crie assistentes virtuais inteligentes para automatizar atendimentos e aumentar a eficiência do seu negócio.</p>
            </div>
          </div>
          {/* Indicadores de navegação */}
          <div className="flex justify-center mt-8 gap-2 md:hidden">
            {[...Array(6)].map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentFeature ? "bg-primary w-4" : "bg-gray-300"
                }`}
                onClick={() => {
                  setCurrentFeature(index);
                  featuresRef.current?.scrollTo({
                    left: (window.innerWidth * 0.85 + 32) * index,
                    behavior: 'smooth'
                  });
                }}
              />
            ))}
          </div>
          {/* Indicador de scroll */}
          <div className={`md:hidden fixed right-4 top-1/2 transform -translate-y-1/2 transition-opacity duration-500 ${showScrollHint ? 'opacity-70' : 'opacity-0'}`}>
            <div className="bg-white/90 rounded-full p-2 shadow-lg backdrop-blur-sm">
              <ChevronRight className="w-6 h-6 text-primary animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section id="testimonials" className="py-20 px-4 bg-gray-50 overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary hover:text-primary/80 transition-colors cursor-default group">
            <span className="inline-block transform group-hover:scale-105 transition-transform duration-300">
              O Que Nossos Clientes Dizem
            </span>
          </h2>
          <div className="relative mt-8">
            <div className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="bg-white p-4 rounded-xl shadow-lg max-w-2xl mx-auto transform transition-all duration-300 hover:scale-105">
                    <p className="text-lg text-gray-700 mb-2 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div>
                        <p className="font-semibold text-primary">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4 gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-primary w-4" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Preços */}
      <section id="pricing" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            Planos
          </h2>
          <div className="flex md:grid md:grid-cols-4 gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pt-6">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`w-[85vw] md:w-auto flex-shrink-0 snap-start relative flex flex-col p-8 rounded-3xl ${
                  plan.highlighted
                    ? "bg-primary border-2 border-white/10"
                    : plan.isCustom
                    ? "bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-white/10"
                    : "bg-white"
                }`}
              >
                {plan.type === "Mais Popular" && (
                  <Badge
                    className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 text-sm font-semibold shadow-lg border-2 border-white/20 rounded-full"
                  >
                    Mais Popular
                  </Badge>
                )}
                {plan.enterprise && (
                  <Badge
                    className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 text-sm font-semibold shadow-lg border-2 border-white/20 rounded-full"
                  >
                    Enterprise
                  </Badge>
                )}
                <div className={`text-lg font-medium mb-1 ${plan.highlighted || plan.isCustom ? "text-white" : "text-secondary"}`}>
                  {plan.type}
                </div>
                <h3 className={`text-2xl font-bold mb-6 ${plan.highlighted || plan.isCustom ? "text-white" : "text-secondary"}`}>
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <div className={`text-3xl font-bold ${plan.highlighted || plan.isCustom ? "text-white" : "text-secondary"}`}>
                    {plan.price}
                    {!plan.isCustom && (
                      <span 
                        className={`text-lg font-normal ml-1 ${
                          plan.highlighted 
                          ? "text-white" 
                          : "text-[#8B5CF6]"
                        }`}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>
                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      {typeof feature === 'string' ? (
                        <>
                          <Check className={`h-5 w-5 mr-2 ${plan.highlighted || plan.isCustom ? "text-white" : "text-secondary"}`} />
                          <span className={`${plan.highlighted || plan.isCustom ? "text-white" : "text-gray-600"}`}>
                            {feature}
                          </span>
                        </>
                      ) : (
                        <>
                          {feature.included ? (
                            <Check className={`h-5 w-5 mr-2 ${plan.highlighted || plan.isCustom ? "text-white" : "text-secondary"}`} />
                          ) : (
                            <X className={`h-5 w-5 mr-2 ${plan.highlighted || plan.isCustom ? "text-white" : "text-secondary"}`} />
                          )}
                          <span className={`${plan.highlighted || plan.isCustom ? "text-white" : "text-gray-600"}`}>
                            {feature.text}
                            {feature.addon && (
                              <span className="ml-1 text-red-500">{feature.addon}</span>
                            )}
                          </span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
                {plan.isCustom ? (
                  <a href={plan.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button
                      variant="secondary"
                      className="w-full bg-white text-gray-900 hover:bg-gray-200 hover:text-black transition-colors"
                    >
                      {plan.buttonText}
                    </Button>
                  </a>
                ) : (
                  <a href="https://crm.fluxconversa.com.br/signup" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button
                      variant={plan.buttonVariant}
                      className={`w-full ${
                        plan.highlighted
                          ? "bg-white text-primary hover:bg-gray-200 hover:text-primary/90 font-medium transition-colors"
                          : "border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </a>
                )}
              </div>
            ))}
          </div>
          {/* Nota sobre valores adicionais */}
          <div className="mt-8 text-center text-sm text-white/80">
            * Os valores +99,90 são adicionais para liberar as funcionalidades específicas caso haja interesse
          </div>
          {/* Botão de personalização */}
          <div className="mt-6 text-center">
            <a 
              href="https://wa.me/+5534991557772?text=Olá! Gostaria de personalizar meu plano no Flux CRM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-medium"
              >
                Quero personalizar meu plano
              </Button>
            </a>
          </div>
          {/* Indicador de scroll */}
          <div className={`md:hidden fixed right-4 top-1/2 transform -translate-y-1/2 transition-opacity duration-500 ${showScrollHint ? 'opacity-70' : 'opacity-0'}`}>
            <div className="bg-white/90 rounded-full p-2 shadow-lg backdrop-blur-sm">
              <ChevronRight className="w-6 h-6 text-primary animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA */}
      <section className="py-20 px-4 bg-primary/10 backdrop-blur-lg">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white hover:text-white/90 transition-colors cursor-default group">
            <span className="inline-block transform group-hover:scale-105 transition-transform duration-300">
              Pronto para transformar seu relacionamento com clientes?
            </span>
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Junte-se a milhares de empresas que já estão usando nossa plataforma para impulsionar seus resultados.
          </p>
          <a href="https://crm.fluxconversa.com.br/signup" target="_blank" rel="noopener noreferrer">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Abra uma Nova Conta
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
