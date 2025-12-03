import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Check, BadgeCheck, ChevronRight, X, Bot, Target, Zap, BarChart3, Share2, Globe, Headphones, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from "react";
import TechBackground from "@/components/TechBackground";
import AnimatedGrid from "@/components/AnimatedGrid";
import HolographicEffect from "@/components/HolographicEffect";
import { SignupModal } from "@/components/SignupModal";



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
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);



  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-radial from-[#1A1A1A] via-[#4A1118] to-[#E31D3C] relative overflow-hidden">
      <TechBackground />
      <AnimatedGrid />
      <Navigation />
      
      {/* Seção Hero */}
      <section className="pt-32 pb-20 px-4 relative z-10">
        <HolographicEffect />
        <div className="container mx-auto relative z-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in text-center">
              Transforme Relacionamentos em Resultados
            </h1>
            <p className="mt-6 text-base md:text-xl text-white/90 animate-fade-in leading-relaxed">
              Descubra uma nova forma de gerenciar seus clientes com eficiência e inteligência. Nosso CRM foi desenvolvido para simplificar processos, automatizar tarefas e proporcionar uma visão completa do seu funil de vendas. Ideal para pequenas e médias empresas que buscam crescimento sustentável.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                size="lg" 
                variant="default" 
                className="w-full sm:w-auto"
                onClick={() => setIsSignupModalOpen(true)}
              >
                Vamos Começar
              </Button>
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
      <section className="py-20 px-4 bg-white relative z-10">
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

      {/* Seção de Screenshots da Plataforma */}
      <section className="py-20 px-4 bg-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black to-red-900/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_70%)]" />
        </div>
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(239,68,68,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239,68,68,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'matrix-rain 20s linear infinite'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Conheça a <span className="text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">Plataforma</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Veja como nossa interface intuitiva e poderosa pode transformar a gestão do seu negócio
            </p>
          </div>
          
          {/* Screenshots Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Screenshot 1 - Chat Interface */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-1 border border-red-500/30 group-hover:border-red-500/60 transition-all duration-500">
                <div className="bg-gradient-to-br from-red-500/10 to-transparent rounded-lg p-4">
                  <div className="aspect-video bg-gray-800/50 rounded border border-red-500/20 flex items-center justify-center group-hover:border-red-500/40 transition-all duration-500">
                    <div className="text-red-400 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-white mb-2">Interface de Chat</h3>
                      <p className="text-sm text-gray-400">Atendimento integrado e intuitivo</p>
                    </div>
                  </div>
                </div>
                {/* Neon Border Effect */}
                <div className="absolute inset-0 rounded-lg border border-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              </div>
            </div>
            
            {/* Screenshot 2 - Dashboard */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-1 border border-red-500/30 group-hover:border-red-500/60 transition-all duration-500">
                <div className="bg-gradient-to-br from-red-500/10 to-transparent rounded-lg p-4">
                  <div className="aspect-video bg-gray-800/50 rounded border border-red-500/20 flex items-center justify-center group-hover:border-red-500/40 transition-all duration-500">
                    <div className="text-red-400 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                        <BarChart3 className="w-8 h-8" />
                      </div>
                      <h3 className="font-semibold text-white mb-2">Dashboard Analítico</h3>
                      <p className="text-sm text-gray-400">Métricas e insights em tempo real</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-lg border border-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              </div>
            </div>
            
            {/* Screenshot 3 - Automation */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-1 border border-red-500/30 group-hover:border-red-500/60 transition-all duration-500">
                <div className="bg-gradient-to-br from-red-500/10 to-transparent rounded-lg p-4">
                  <div className="aspect-video bg-gray-800/50 rounded border border-red-500/20 flex items-center justify-center group-hover:border-red-500/40 transition-all duration-500">
                    <div className="text-red-400 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                        <Bot className="w-8 h-8" />
                      </div>
                      <h3 className="font-semibold text-white mb-2">Automação Inteligente</h3>
                      <p className="text-sm text-gray-400">Fluxos automatizados personalizados</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-lg border border-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              </div>
            </div>
            
            {/* Screenshot 4 - CRM */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-1 border border-red-500/30 group-hover:border-red-500/60 transition-all duration-500">
                <div className="bg-gradient-to-br from-red-500/10 to-transparent rounded-lg p-4">
                  <div className="aspect-video bg-gray-800/50 rounded border border-red-500/20 flex items-center justify-center group-hover:border-red-500/40 transition-all duration-500">
                    <div className="text-red-400 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                        <Users className="w-8 h-8" />
                      </div>
                      <h3 className="font-semibold text-white mb-2">Gestão de Contatos</h3>
                      <p className="text-sm text-gray-400">CRM completo e organizado</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-lg border border-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              </div>
            </div>
            
            {/* Screenshot 5 - Reports */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-1 border border-red-500/30 group-hover:border-red-500/60 transition-all duration-500">
                <div className="bg-gradient-to-br from-red-500/10 to-transparent rounded-lg p-4">
                  <div className="aspect-video bg-gray-800/50 rounded border border-red-500/20 flex items-center justify-center group-hover:border-red-500/40 transition-all duration-500">
                    <div className="text-red-400 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                        <Target className="w-8 h-8" />
                      </div>
                      <h3 className="font-semibold text-white mb-2">Relatórios Avançados</h3>
                      <p className="text-sm text-gray-400">Análises detalhadas de performance</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-lg border border-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              </div>
            </div>
            
            {/* Screenshot 6 - Integrations */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-1 border border-red-500/30 group-hover:border-red-500/60 transition-all duration-500">
                <div className="bg-gradient-to-br from-red-500/10 to-transparent rounded-lg p-4">
                  <div className="aspect-video bg-gray-800/50 rounded border border-red-500/20 flex items-center justify-center group-hover:border-red-500/40 transition-all duration-500">
                    <div className="text-red-400 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                        <Globe className="w-8 h-8" />
                      </div>
                      <h3 className="font-semibold text-white mb-2">Integrações</h3>
                      <p className="text-sm text-gray-400">Conecte com suas ferramentas favoritas</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-lg border border-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-red-500/25 transition-all duration-300 border border-red-500/50 hover:border-red-400"
              onClick={() => setIsSignupModalOpen(true)}
            >
              Experimente Gratuitamente
            </Button>
          </div>
        </div>
        
        {/* Floating Tech Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-red-400 rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse opacity-50" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-pulse opacity-30" style={{animationDelay: '3s'}} />
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
                  <Button
                    variant={plan.buttonVariant}
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-white text-primary hover:bg-gray-200 hover:text-primary/90 font-medium transition-colors"
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                    }`}
                    onClick={() => setIsSignupModalOpen(true)}
                  >
                    {plan.buttonText}
                  </Button>
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
          {/* Indicadores de scroll melhorados para mobile */}
          <div className="md:hidden">
            {/* Indicador de scroll direito */}
            <div className={`fixed right-4 top-1/2 transform -translate-y-1/2 transition-opacity duration-500 ${showScrollHint ? 'opacity-70' : 'opacity-30'}`}>
              <div className="bg-white/90 rounded-full p-2 shadow-lg backdrop-blur-sm">
                <ChevronRight className="w-6 h-6 text-primary animate-pulse" />
              </div>
            </div>
          </div>
          
          {/* Texto indicativo e pontos logo abaixo dos cards */}
          <div className="md:hidden mt-6">
            {/* Texto indicativo permanente */}
            <div className="text-center mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
                <p className="text-white/80 text-sm font-medium flex items-center gap-2">
                  <span>←</span>
                  Deslize para ver todos os planos
                  <span>→</span>
                </p>
              </div>
            </div>
            
            {/* Indicadores de pontos */}
            <div className="flex justify-center gap-2">
              {pricing.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-white/40 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção FAQ */}
      <section className="relative py-20 px-4 bg-black overflow-hidden">
        {/* Fundo animado */}
        <div className="absolute inset-0">
          <TechBackground />
          <AnimatedGrid />
        </div>
        
        <div className="relative z-10 container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "Funciona no celular?",
                answer: "Sim, é só acessar o link do aplicativo da mesma maneira que você faz no computador, e todos os recursos estarão disponíveis para você."
              },
              {
                question: "Quantos atendentes eu posso adicionar?",
                answer: "O Flux Conversa proporciona total flexibilidade na quantidade de colaboradores que você pode incluir, oferecendo planos variados e ajustados ao tamanho da sua equipe. Fale conosco para descobrir a solução ideal para atender às necessidades da sua empresa."
              },
              {
                question: "Existe algum contrato?",
                answer: "No Flux Conversa, você tem total liberdade. Nossos serviços não exigem contratos de fidelidade nem geram preocupações com multas por cancelamento. Utilize o Flux Conversa pelo período que precisar, com toda a flexibilidade que sua empresa merece."
              },
              {
                question: "Posso testar o sistema?",
                answer: "Sim, trabalhamos com testes de até 7 dias sem pagamento prévio. Assim que você entrar em contato com nosso time de vendas, terá a oportunidade de conhecer a ferramenta em detalhes e ver como ela pode atender às necessidades do seu negócio. Nosso objetivo é garantir que você tenha todas as informações necessárias para tomar a melhor decisão."
              },
              {
                question: "Preciso deixar meu computador ligado para o chatbot funcionar?",
                answer: "Não! O chatbot do Flux Conversa opera 100% em nossos servidores, ou seja, funciona 24 horas por dia, mesmo se seu computador estiver desligado. Todas as mensagens dos seus clientes são recebidas e processadas automaticamente pela plataforma, garantindo que você nunca perca uma interação importante."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-black/60 backdrop-blur-sm rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-red-500/10 transition-colors">
                    <h3 className="text-lg font-semibold text-red-400 group-open:text-red-300">
                      {faq.question}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-white/60 transform group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="text-white/90 leading-relaxed">
                      {faq.answer}
                      {index === 4 && (
                        <div className="mt-4 space-y-2">
                          <p className="font-medium text-white">Como isso é possível?</p>
                          <ul className="space-y-2 ml-4">
                            <li className="flex items-start gap-2">
                              <span className="text-red-400 mt-1">•</span>
                              <span><strong>Hospedagem em nuvem:</strong> A plataforma está sempre online, sem depender do seu dispositivo.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-red-400 mt-1">•</span>
                              <span><strong>Processamento automático:</strong> As respostas são enviadas instantaneamente, sem intervenção manual.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-red-400 mt-1">•</span>
                              <span><strong>Segurança total:</strong> Seus dados e conversas ficam armazenados com privacidade em nossos servidores.</span>
                            </li>
                          </ul>
                          <p className="mt-3 font-medium text-white">Resultado: Atendimento contínuo, eficiência garantida e paz de espírito para você!</p>
                        </div>
                      )}
                    </div>
                  </div>
                </details>
              </div>
            ))}
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
          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => setIsSignupModalOpen(true)}
          >
            Abra uma Nova Conta
          </Button>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-white font-semibold text-lg">Flux</span>
            </div>
            
            {/* Links */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-center md:text-left">
              <a 
                href="/terms" 
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Termos de Uso
              </a>
              <a 
                href="/privacy" 
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Política de Privacidade
              </a>
              <a 
                href="https://crm.fluxconversa.com.br/login" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                Acessar Plataforma
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-white/50 text-sm">
              © 2024 Flux. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
      
      <SignupModal 
        isOpen={isSignupModalOpen} 
        onClose={() => setIsSignupModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
