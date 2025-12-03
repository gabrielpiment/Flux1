import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import TechBackground from "@/components/TechBackground";
import AnimatedGrid from "@/components/AnimatedGrid";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-radial from-[#1A1A1A] via-[#064E3B] to-[#22C55E] relative overflow-hidden">
      <TechBackground />
      <AnimatedGrid />
      <Navigation />
      
      <div className="pt-32 pb-20 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          {/* Botão Voltar */}
          <div className="mb-8">
          <a href="/">
            <Button 
              variant="outline" 
              className="bg-transparent border-white/20 text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            </a>
          </div>

          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Termos de Uso
            </h1>
            <p className="text-white/80 text-lg">
              Última atualização: 12/08/2025
            </p>
          </div>

          {/* Conteúdo dos Termos */}
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 text-white/90 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">1. Aceitação dos Termos</h2>
              <p className="leading-relaxed">
                Ao acessar e utilizar a plataforma Flux Conversa, você concorda em cumprir e estar vinculado a estes Termos de Uso. 
                Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">2. Descrição do Serviço</h2>
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
              <h2 className="text-2xl font-bold text-green-400 mb-4">3. Cadastro e Conta do Usuário</h2>
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
              <h2 className="text-2xl font-bold text-green-400 mb-4">4. Uso Aceitável</h2>
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
              <h2 className="text-2xl font-bold text-green-400 mb-4">5. Proteção de Dados e LGPD</h2>
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
              <h2 className="text-2xl font-bold text-green-400 mb-4">6. Planos e Pagamentos</h2>
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
              <h2 className="text-2xl font-bold text-green-400 mb-4">7. Propriedade Intelectual</h2>
              <p className="leading-relaxed">
                Todos os direitos de propriedade intelectual da plataforma Flux Conversa pertencem à nossa empresa. 
                Você recebe apenas uma licença limitada para uso dos serviços conforme estes termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">8. Limitação de Responsabilidade</h2>
              <p className="leading-relaxed">
                Nossa responsabilidade é limitada ao valor pago pelos serviços. Não nos responsabilizamos por danos 
                indiretos, lucros cessantes ou outras perdas decorrentes do uso da plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">9. Suspensão e Encerramento</h2>
              <p className="leading-relaxed">
                Reservamo-nos o direito de suspender ou encerrar contas que violem estes termos, 
                mediante notificação prévia quando possível.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">10. Alterações nos Termos</h2>
              <p className="leading-relaxed">
                Podemos atualizar estes termos periodicamente. As alterações serão comunicadas através da plataforma 
                e entrarão em vigor após o período de notificação adequado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">11. Lei Aplicável</h2>
              <p className="leading-relaxed">
                Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais 
                competentes do Brasil.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">12. Contato</h2>
              <p className="leading-relaxed">
                Para dúvidas sobre estes termos ou exercício de seus direitos sob a LGPD, 
                entre em contato através dos canais disponíveis em nossa plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">13. Serviços de Terceiros e Falhas de API</h2>
              <p className="leading-relaxed mb-4">
                O Flux Conversa integra funcionalidades que dependem de APIs e serviços de terceiros, como WhatsApp,
                Meta, provedores de mensagens, gateways e outras plataformas externas.
              </p>
              <p className="leading-relaxed mb-2">Você reconhece e concorda que:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>O funcionamento de determinadas funcionalidades depende exclusivamente da estabilidade, disponibilidade e políticas dessas plataformas externas.</li>
                <li>Não temos controle sobre mudanças técnicas, interrupções, limitações ou suspensões realizadas por terceiros.</li>
                <li>Não nos responsabilizamos por falhas, indisponibilidades, atrasos, restrições ou qualquer prejuízo decorrente de instabilidade de APIs, serviços externos ou alterações realizadas por terceiros.</li>
                <li>Continuaremos empreendendo esforços razoáveis para mitigar impactos, monitorar integrações e restabelecer o funcionamento normal sempre que possível.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">14. Estorno e Garantia em Caso de Falhas Graves</h2>
              <p className="leading-relaxed mb-4">
                Em caso de falha grave que impossibilite o uso essencial da plataforma — entendida como indisponibilidade total ou parcial que
                impeça a utilização das principais funcionalidades contratadas — e não houver correção em prazo razoável após comunicação formal do cliente,
                o Flux Conversa poderá, a seu critério, oferecer:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Crédito proporcional ao período afetado; ou</li>
                <li>Estorno do valor proporcional da mensalidade correspondente ao período de indisponibilidade efetiva.</li>
              </ul>
              <p className="leading-relaxed mb-4">
                O cliente deve comunicar a falha imediatamente pelos canais oficiais de suporte. Após validação da gravidade e confirmação de que a falha não decorre de mau uso,
                integrações mal configuradas, equipamentos do cliente ou fatores externos, o prazo razoável para correção será informado pela equipe de suporte.
              </p>
              <p className="leading-relaxed mb-2">Não haverá estorno em casos de:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Interrupções programadas para manutenção preventiva com aviso prévio;</li>
                <li>Falhas decorrentes de APIs de terceiros (conforme cláusula anterior);</li>
                <li>Problemas causados pelo próprio cliente ou por configurações externas à plataforma.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">15. Indisponibilidade Programada (Manutenção)</h2>
              <p className="leading-relaxed mb-4">
                O Flux Conversa poderá realizar manutenções programadas para garantir a estabilidade, segurança e melhorias da plataforma. Sempre que possível, tais manutenções serão comunicadas previamente aos usuários pelos canais oficiais.
              </p>
              <p className="leading-relaxed">
                Indisponibilidades decorrentes de manutenções programadas não geram direito a reembolso, créditos ou compensações, uma vez que fazem parte do processo normal de operação e evolução do serviço.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">16. Alterações Técnicas Necessárias</h2>
              <p className="leading-relaxed">
                O Flux Conversa poderá modificar, ajustar, limitar ou descontinuar funcionalidades específicas da plataforma sempre que necessário para atender a requisitos técnicos, legais, de segurança ou políticas de terceiros (como WhatsApp, Meta e demais APIs integradas).
                Alterações técnicas necessárias não caracterizam quebra contratual, sendo consideradas parte da natureza dinâmica de plataformas SaaS e ferramentas integradas a serviços externos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">17. Isenção por Configurações do Usuário</h2>
              <p className="leading-relaxed mb-4">
                O usuário é inteiramente responsável pelas configurações realizadas dentro da plataforma, incluindo fluxos de automação, integrações externas, regras de envio, mensagens criadas e demais parametrizações.
              </p>
              <p className="leading-relaxed">
                O Flux Conversa não se responsabiliza por falhas, duplicações, disparos indevidos, quedas de performance ou qualquer prejuízo decorrente de configurações incorretas feitas pelo próprio usuário ou por terceiros que ele autorize a acessar sua conta.
                Erros de operação ou parametrização inadequada não geram direito a estorno ou compensação.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">18. Responsabilidade sobre Informações Inseridas</h2>
              <p className="leading-relaxed mb-4">
                O usuário é exclusivamente responsável pela veracidade, legalidade e adequação dos dados e conteúdos inseridos na plataforma, incluindo informações de clientes, contatos, mensagens, documentos, listas de envio e demais registros.
              </p>
              <p className="leading-relaxed">
                O Flux Conversa não audita, valida ou se responsabiliza pelo conteúdo fornecido pelo usuário, tampouco por danos, prejuízos ou violações legais decorrentes do uso indevido, ilegal ou inadequado dessas informações.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">19. Política de Suporte e Níveis de Atendimento (SLA Básico)</h2>
              <p className="leading-relaxed mb-4">
                O suporte do Flux Conversa é prestado através dos canais oficiais indicados na plataforma, dentro dos horários estabelecidos e conforme a ordem de recebimento das solicitações.
                Os prazos de resposta podem variar de acordo com a complexidade da demanda, volume de atendimentos e natureza do problema.
              </p>
              <p className="leading-relaxed">
                O suporte prestado pelo Flux Conversa não caracteriza SLA de atendimento imediato, exceto quando previamente contratado em plano específico.
                Chamados relacionados a plataformas externas, integrações de terceiros ou políticas do WhatsApp/Meta podem requerer prazos adicionais, não sendo garantido tempo de solução imediato.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4">20. Rescisão por Conduta Abusiva</h2>
              <p className="leading-relaxed mb-4">
                O Flux Conversa poderá suspender ou encerrar o acesso à plataforma caso o usuário:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Adote comportamento ofensivo, agressivo ou desrespeitoso com a equipe de suporte ou demais representantes da empresa;</li>
                <li>Pratique abusos operacionais, tentativas de fraude, exploração indevida da plataforma ou ações que coloquem em risco a integridade do serviço;</li>
                <li>Descumpra de forma reiterada qualquer cláusula destes Termos de Uso.</li>
              </ul>
              <p className="leading-relaxed">
                Quando possível, o usuário será notificado previamente. A rescisão decorrente de conduta abusiva não dá direito a reembolso.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;