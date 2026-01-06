import React, { useMemo } from 'react';
import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Sitemap from './components/Sitemap';
import LandingPage from './components/LandingPage';

/**
 * Utilitário de Detecção de Ambiente "Agressivo"
 * Verifica se a URL atual pertence a algum provedor de ambiente de nuvem
 * conhecido que utiliza proxies complexos.
 */
const checkPreviewEnvironment = (): boolean => {
  if (typeof window === 'undefined') return false;

  const hostname = window.location.hostname;
  const href = window.location.href;

  // Lista de strings "trigger" para ambientes de preview
  const previewIndicators = [
    'googleusercontent',
    'webcontainer',
    'shim',
    '.goog',
    'scf.usercontent',
    'stackblitz',
    'codesandbox'
  ];

  return previewIndicators.some((indicator) => 
    hostname.includes(indicator) || href.includes(indicator)
  );
};

const App: React.FC = () => {
  // 1. Determina o ambiente uma única vez na inicialização
  const isPreview = useMemo(() => checkPreviewEnvironment(), []);

  // 2. Seleção de Roteador
  // HashRouter: Seguro para ambientes com proxy (IDX, Cloud Shell) pois não manipula a URL real.
  // BrowserRouter: Padrão de mercado para produção (SEO, Analytics).
  const Router = isPreview ? HashRouter : BrowserRouter;

  return (
    <Router>
      <Routes>
        {/* 
          3. Redirecionamento Inteligente 
          A rota raiz (/) atua como um despachante de tráfego.
        */}
        <Route 
          path="/" 
          element={
            <Navigate 
              to={isPreview ? "/sitemap" : "/lp-advocacia"} 
              replace 
            />
          } 
        />

        {/* Rota de Desenvolvimento / Navegação Segura */}
        <Route path="/sitemap" element={<Sitemap />} />

        {/* Rota Principal da Landing Page */}
        <Route path="/lp-advocacia" element={<LandingPage />} />

        {/* Fallback para 404 - Redireciona para home para evitar telas quebradas */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;