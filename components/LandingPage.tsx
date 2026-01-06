import React from 'react';
import { ArrowRight, Menu, MapPin, Phone, CheckCircle, Scale, Building2, TrendingUp, FileText, Shield } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-gray overflow-x-hidden">
      
      {/* Top Bar / Header */}
      <header className="bg-white pt-8 pb-6 px-6 md:px-12 lg:px-24 w-full">
        <div className="flex justify-between items-start md:items-center max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-center gap-6 w-full">
            {/* Logo Placeholder */}
            <div className="bg-brand-dark w-16 h-16 flex items-center justify-center shadow-sm shrink-0">
               <span className="text-brand-gold text-2xl font-serif font-light">H</span>
            </div>

            {/* Mobile/Tablet Layout Adjustment */}
            <div className="hidden md:flex flex-col items-end ml-auto text-xs text-gray-500 font-light gap-1">
               <div className="flex items-center gap-4">
                  <span>(48) 99847-5599</span>
                  <span>Florianópolis - SC</span>
               </div>
               <div className="text-[10px] mt-1 text-gray-400">05/01/2026, 21:45 • Advocacia Conectada</div>
            </div>
            
            {/* Hamburger for Mobile */}
            <button className="md:hidden absolute top-8 right-6 text-brand-dark">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-12 pb-24 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
           <span className="text-brand-gold text-sm">✦</span>
           <span className="text-gray-500 text-sm tracking-wide uppercase">Advocacia de Excelência</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-400 mb-2">
           Soluções Jurídicas Integradas para
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-800 mb-8">
           Proteger e Valorizar seu Patrimônio
        </h1>

        <p className="text-gray-400 font-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
          Advocacia especializada em Direito Imobiliário, Tributário, Empresarial e
          Sucessório. Atuação estratégica para empresas, investidores e famílias de todo o Brasil.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-brand-light hover:bg-white border border-gray-100 shadow-sm text-gray-600 px-8 py-3 rounded-sm font-medium transition-colors">
            Fale com um Especialista
          </button>
          <button className="text-gray-500 hover:text-brand-dark px-8 py-3 font-medium transition-colors">
            Conheça o Escritório
          </button>
        </div>
      </section>

      {/* Areas of Practice */}
      <section className="bg-brand-light/30 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">Áreas de Atuação</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Consultoria jurídica completa nas principais áreas do direito empresarial e patrimonial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-2 border-transparent hover:border-brand-gold group">
              <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-dark/5 transition-colors">
                <Building2 className="text-brand-dark w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Direito Imobiliário</h3>
              <p className="text-gray-500 font-light leading-relaxed mb-6">
                Assessoria completa em operações imobiliárias, desde due diligence até regularizações e estruturação de negócios.
              </p>
              <a href="#" className="inline-flex items-center text-brand-gold font-medium text-sm hover:underline gap-1">
                Saiba mais <ArrowRight size={14} />
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-2 border-transparent hover:border-brand-gold group">
               <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-dark/5 transition-colors">
                <Scale className="text-brand-dark w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Direito Tributário</h3>
              <p className="text-gray-500 font-light leading-relaxed mb-6">
                Planejamento tributário estratégico, recuperação de créditos e defesas fiscais para otimizar a carga tributária.
              </p>
              <a href="#" className="inline-flex items-center text-brand-gold font-medium text-sm hover:underline gap-1">
                Saiba mais <ArrowRight size={14} />
              </a>
            </div>

             {/* Card 3 */}
             <div className="bg-white p-10 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-2 border-transparent hover:border-brand-gold group">
               <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-dark/5 transition-colors">
                <FileText className="text-brand-dark w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Direito Empresarial</h3>
              <p className="text-gray-500 font-light leading-relaxed mb-6">
                 Consultoria jurídica para o crescimento seguro do seu negócio, incluindo contratos, M&A e compliance corporativo.
              </p>
              <a href="#" className="inline-flex items-center text-brand-gold font-medium text-sm hover:underline gap-1">
                Saiba mais <ArrowRight size={14} />
              </a>
            </div>

             {/* Card 4 */}
             <div className="bg-white p-10 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-2 border-transparent hover:border-brand-gold group">
               <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-dark/5 transition-colors">
                <Shield className="text-brand-dark w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Direito Sucessório</h3>
              <p className="text-gray-500 font-light leading-relaxed mb-6">
                Planejamento sucessório personalizado para proteger seu patrimônio e garantir a tranquilidade da sua família.
              </p>
              <a href="#" className="inline-flex items-center text-brand-gold font-medium text-sm hover:underline gap-1">
                Saiba mais <ArrowRight size={14} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">Por que Escolher Este Escritório?</h2>
            <p className="text-gray-500 mb-16 font-light">
              Diferenciais que fazem da nossa advocacia a escolha certa para seu negócio
            </p>

            <div className="space-y-16">
              {/* Feature 1 */}
              <div>
                <div className="w-16 h-16 bg-white border border-brand-gold/20 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-gold">
                  <CheckCircle size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Advocacia Personalizada</h3>
                <p className="text-gray-500 font-light max-w-md mx-auto">
                  Cada cliente recebe atenção exclusiva e soluções sob medida para suas necessidades específicas.
                </p>
              </div>

               {/* Feature 2 */}
               <div>
                <div className="w-16 h-16 bg-white border border-brand-gold/20 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-gold">
                  <TrendingUp size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Visão Estratégica de Negócios</h3>
                <p className="text-gray-500 font-light max-w-md mx-auto">
                  Combinamos expertise jurídica com profundo conhecimento empresarial para maximizar resultados.
                </p>
              </div>

               {/* Feature 3 */}
               <div>
                <div className="w-16 h-16 bg-white border border-brand-gold/20 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-gold">
                  <Shield size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Compromisso com a Excelência</h3>
                <p className="text-gray-500 font-light max-w-md mx-auto">
                  Atuação dedicada em casos complexos, com histórico de sucesso e foco em resultados concretos.
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-brand-light/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-400 mb-6">Pronto para Proteger seus Interesses?</h2>
          <p className="text-gray-400 font-light mb-10 text-lg">
             Entre em contato hoje mesmo e descubra como podemos ajudar a alcançar seus objetivos com segurança jurídica
          </p>
          <button className="bg-white hover:bg-gray-50 text-brand-dark border border-gray-100 shadow-md px-10 py-4 rounded-sm font-medium transition-all transform hover:-translate-y-1">
             Agendar Consulta
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
           <div className="max-w-sm">
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                Excelência jurídica com foco em resultados. Protegemos e valorizamos seu patrimônio.
              </p>
              <div className="bg-brand-dark/20 w-12 h-12 flex items-center justify-center text-brand-dark font-serif text-lg">H</div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-gray-500 font-light">
              <div>
                <h4 className="text-brand-dark font-bold text-lg font-serif mb-6">Áreas de Atuação</h4>
                <ul className="space-y-3">
                  <li>Direito Imobiliário</li>
                  <li>Direito Tributário</li>
                  <li>Direito Empresarial</li>
                  <li>Direito Sucessório</li>
                  <li>Recuperação de Ativos</li>
                </ul>
              </div>

              <div>
                <h4 className="text-brand-dark font-bold text-lg font-serif mb-6">Contato</h4>
                <ul className="space-y-3">
                   <li className="flex gap-2">
                     <MapPin size={16} className="shrink-0 mt-1" />
                     <span>Rua Álvaro de Carvalho, 123<br/>Centro, Florianópolis/SC<br/>CEP 88010-280</span>
                   </li>
                   <li className="flex gap-2 items-center">
                     <Phone size={16} className="shrink-0" />
                     <span>(48) 99847-5599</span>
                   </li>
                   <li className="mt-4">adv.herrmann@gmail.com</li>
                </ul>
              </div>
           </div>
        </div>
        
        <div className="text-center mt-20 text-xs text-gray-300 font-light">
          © 2026 Moacyr Herrmann Advocacia. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;