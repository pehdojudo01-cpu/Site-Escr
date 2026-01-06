import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 font-sans">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full border-t-4 border-brand-dark">
        <h1 className="text-2xl font-serif font-bold text-brand-dark mb-2">Ambiente de Preview</h1>
        <p className="text-gray-600 mb-6 text-sm">
          Este menu é exibido apenas em ambientes de desenvolvimento (Cloud Shell, IDX, Stackblitz) para facilitar a navegação com HashRouting.
        </p>

        <div className="space-y-4">
          <h2 className="text-xs uppercase tracking-wider text-gray-400 font-bold">Páginas Disponíveis</h2>
          <ul className="space-y-3">
             <li>
              <Link 
                to="/lp-advocacia" 
                className="flex items-center justify-between p-3 rounded bg-brand-light border border-gray-200 hover:border-brand-gold hover:shadow-md transition-all group"
              >
                <span className="font-medium text-brand-gray group-hover:text-brand-dark">Landing Page Principal</span>
                <span className="text-brand-gold">→</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-100 text-center">
           <span className="text-xs text-gray-400">Sistema de Roteamento Híbrido Ativo</span>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;