import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuração do Vite
// A propriedade 'base' definida como './' é CRUCIAL para o funcionamento em ambientes de preview (proxies).
// Ela garante que os assets (JS/CSS) sejam referenciados relativamente, evitando erros 404
// quando a aplicação não está servida na raiz do domínio.
export default defineConfig({
  plugins: [react()],
  base: './', 
});