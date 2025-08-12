import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import TechBackground from "@/components/TechBackground";
import AnimatedGrid from "@/components/AnimatedGrid";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-radial from-[#1A1A1A] via-[#4A1118] to-[#E31D3C] relative overflow-hidden">
      <TechBackground />
      <AnimatedGrid />
      <Navigation />
      
      <div className="pt-32 pb-20 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          {/* Botão Voltar */}
          <div className="mb-8">
            <Button 
              variant="outline" 
              className="bg-transparent border-white/20 text-white hover:bg-white/10"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </div>

          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Termos de Uso
            </h1>
            <p className="text-white/80 text-lg">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          {/* Conteúdo dos Termos */}
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 text-white/90 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">1. Aceitação dos Termos</h2>
              <p className="leading-relaxed">
                Ao acessar e utilizar a plataforma Flux Conversa, você concorda em cumprir e estar vinculado a estes Termos de Uso. 
                Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">2. Descrição do Serviço</h2>
              <p className="leading-relaxed mb-4">
                O Flux Conversa é uma plataforma de CRM (Customer Relationship Management) que oferece:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Gestão de relacionamento com clientes</li>
                <li>Automações de fluxo de trabalho</li>
                <li>Integrações com WhatsApp e outras plataformas</li>
                <li>Disparos em massa de mensagens</li>
                <li>Relatórios e análises de desempenho</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">3. Cadastro e Conta do Usuário</h2>
              <p className="leading-relaxed mb-4">
                Para utilizar nossos serviços, você deve:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fornecer informações verdadeiras, precisas e completas</li>
                <li>Manter suas informações de conta atualizadas</li>
                <li>Ser responsável pela segurança de sua senha</li>
                <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">4. Uso Aceitável</h2>
              <p className="leading-relaxed mb-4">
                Você concorda em não utilizar a plataforma para:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Enviar spam ou mensagens não solicitadas</li>
                <li>Violar leis ou regulamentos aplicáveis</li>
                <li>Infringir direitos de propriedade intelectual</li>
                <li>Transmitir conteúdo ofensivo, difamatório ou ilegal</li>
                <li>Interferir no funcionamento da plataforma</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">5. Proteção de Dados e LGPD</h2>
              <p className="leading-relaxed mb-4">
                Em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018):
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Coletamos apenas dados necessários para a prestação do serviço</li>
                <li>Você tem direito ao acesso, correção e exclusão de seus dados</li>
                <li>Implementamos medidas de segurança adequadas</li>
                <li>Não compartilhamos dados pessoais sem consentimento</li>
                <li>Você pode revogar seu consentimento a qualquer momento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">6. Planos e Pagamentos</h2>
              <p className="leading-relaxed mb-4">
                Nossos serviços são oferecidos através de planos de assinatura:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Os preços estão sujeitos a alterações mediante aviso prévio</li>
                <li>O pagamento deve ser efetuado conforme o plano escolhido</li>
                <li>Não há contratos de fidelidade obrigatórios</li>
                <li>Cancelamentos podem ser feitos a qualquer momento</li>
                <li>Reembolsos seguem nossa política específica</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">7. Propriedade Intelectual</h2>
              <p className="leading-relaxed">
                Todos os direitos de propriedade intelectual da plataforma Flux Conversa pertencem à nossa empresa. 
                Você recebe apenas uma licença limitada para uso dos serviços conforme estes termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">8. Limitação de Responsabilidade</h2>
              <p className="leading-relaxed">
                Nossa responsabilidade é limitada ao valor pago pelos serviços. Não nos responsabilizamos por danos 
                indiretos, lucros cessantes ou outras perdas decorrentes do uso da plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">9. Suspensão e Encerramento</h2>
              <p className="leading-relaxed">
                Reservamo-nos o direito de suspender ou encerrar contas que violem estes termos, 
                mediante notificação prévia quando possível.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">10. Alterações nos Termos</h2>
              <p className="leading-relaxed">
                Podemos atualizar estes termos periodicamente. As alterações serão comunicadas através da plataforma 
                e entrarão em vigor após o período de notificação adequado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">11. Lei Aplicável</h2>
              <p className="leading-relaxed">
                Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais 
                competentes do Brasil.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">12. Contato</h2>
              <p className="leading-relaxed">
                Para dúvidas sobre estes termos ou exercício de seus direitos sob a LGPD, 
                entre em contato através dos canais disponíveis em nossa plataforma.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;