import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import TechBackground from "@/components/TechBackground";
import AnimatedGrid from "@/components/AnimatedGrid";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
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
              Política de Privacidade
            </h1>
            <p className="text-white/80 text-lg">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          {/* Conteúdo da Política */}
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 text-white/90 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">1. Introdução</h2>
              <p className="leading-relaxed">
                Esta Política de Privacidade descreve como o Flux Conversa coleta, usa, armazena e protege suas informações pessoais 
                em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018) e demais regulamentações aplicáveis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">2. Controlador de Dados</h2>
              <p className="leading-relaxed">
                O Flux Conversa atua como controlador dos dados pessoais coletados através de nossa plataforma. 
                Somos responsáveis pelas decisões referentes ao tratamento de seus dados pessoais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">3. Dados Coletados</h2>
              <p className="leading-relaxed mb-4">
                Coletamos os seguintes tipos de dados pessoais:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">3.1 Dados de Identificação:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Nome completo</li>
                    <li>E-mail</li>
                    <li>Telefone</li>
                    <li>CPF/CNPJ</li>
                    <li>Endereço</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">3.2 Dados de Uso:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Logs de acesso</li>
                    <li>Endereço IP</li>
                    <li>Informações do dispositivo</li>
                    <li>Dados de navegação</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">3.3 Dados de Comunicação:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Mensagens enviadas e recebidas</li>
                    <li>Contatos importados</li>
                    <li>Histórico de conversas</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">4. Finalidades do Tratamento</h2>
              <p className="leading-relaxed mb-4">
                Utilizamos seus dados pessoais para as seguintes finalidades:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Prestação dos serviços de CRM</li>
                <li>Autenticação e segurança da conta</li>
                <li>Comunicação sobre atualizações e novidades</li>
                <li>Suporte técnico e atendimento ao cliente</li>
                <li>Análise e melhoria dos serviços</li>
                <li>Cumprimento de obrigações legais</li>
                <li>Prevenção de fraudes e atividades ilícitas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">5. Base Legal</h2>
              <p className="leading-relaxed mb-4">
                O tratamento de seus dados pessoais é baseado nas seguintes hipóteses legais:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Consentimento:</strong> Para comunicações de marketing</li>
                <li><strong>Execução de contrato:</strong> Para prestação dos serviços</li>
                <li><strong>Legítimo interesse:</strong> Para segurança e melhoria dos serviços</li>
                <li><strong>Cumprimento de obrigação legal:</strong> Para atender exigências regulatórias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">6. Compartilhamento de Dados</h2>
              <p className="leading-relaxed mb-4">
                Seus dados pessoais podem ser compartilhados nas seguintes situações:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Com prestadores de serviços terceirizados (sob contrato de confidencialidade)</li>
                <li>Para cumprimento de obrigações legais</li>
                <li>Em caso de fusão, aquisição ou venda de ativos</li>
                <li>Com seu consentimento expresso</li>
              </ul>
              <p className="leading-relaxed mt-4">
                <strong>Não vendemos, alugamos ou comercializamos seus dados pessoais.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">7. Armazenamento e Segurança</h2>
              <p className="leading-relaxed mb-4">
                Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Criptografia de dados em trânsito e em repouso</li>
                <li>Controles de acesso rigorosos</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Backups regulares e seguros</li>
                <li>Treinamento regular da equipe</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">8. Retenção de Dados</h2>
              <p className="leading-relaxed">
                Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política, 
                respeitando os prazos legais de retenção. Após esse período, os dados são excluídos de forma segura.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">9. Seus Direitos</h2>
              <p className="leading-relaxed mb-4">
                Conforme a LGPD, você possui os seguintes direitos:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Acesso:</strong> Obter informações sobre o tratamento de seus dados</li>
                <li><strong>Correção:</strong> Solicitar a correção de dados incompletos ou inexatos</li>
                <li><strong>Exclusão:</strong> Solicitar a eliminação de dados desnecessários</li>
                <li><strong>Portabilidade:</strong> Solicitar a transferência de dados para outro fornecedor</li>
                <li><strong>Oposição:</strong> Opor-se ao tratamento em certas circunstâncias</li>
                <li><strong>Revogação do consentimento:</strong> Retirar o consentimento a qualquer momento</li>
                <li><strong>Informação:</strong> Obter informações sobre compartilhamento de dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">10. Cookies e Tecnologias Similares</h2>
              <p className="leading-relaxed mb-4">
                Utilizamos cookies e tecnologias similares para:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Manter você conectado à plataforma</li>
                <li>Personalizar sua experiência</li>
                <li>Analisar o uso dos serviços</li>
                <li>Melhorar a performance da plataforma</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">11. Transferência Internacional</h2>
              <p className="leading-relaxed">
                Caso seja necessário transferir dados para outros países, garantimos que tais transferências 
                sejam realizadas com adequado nível de proteção, conforme exigido pela LGPD.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">12. Menores de Idade</h2>
              <p className="leading-relaxed">
                Nossos serviços não são direcionados a menores de 18 anos. Caso identifiquemos dados de menores 
                coletados sem o devido consentimento dos responsáveis, procederemos com a exclusão imediata.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">13. Alterações na Política</h2>
              <p className="leading-relaxed">
                Esta política pode ser atualizada periodicamente. Notificaremos sobre alterações significativas 
                através da plataforma ou por e-mail, conforme apropriado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">14. Encarregado de Dados (DPO)</h2>
              <p className="leading-relaxed">
                Designamos um Encarregado de Proteção de Dados para atuar como canal de comunicação 
                entre você, o Flux Conversa e a Autoridade Nacional de Proteção de Dados (ANPD).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-400 mb-4">15. Contato</h2>
              <p className="leading-relaxed mb-4">
                Para exercer seus direitos, esclarecer dúvidas ou reportar incidentes relacionados à proteção de dados:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Entre em contato através dos canais disponíveis na plataforma</li>
                <li>Envie um e-mail para nosso Encarregado de Dados</li>
                <li>Utilize o formulário de contato em nosso site</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Responderemos às suas solicitações no prazo máximo de 15 dias, conforme estabelecido pela LGPD.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;