# Mocidade Hinário

Projeto web para visualização e pesquisa de hinos, desenvolvido com Vite, React, TypeScript e TailwindCSS.

## Funcionalidades
- Busca de hinos por nome ou número
- Visualização de detalhes dos hinos
- Tema escuro/claro
- Ícone personalizado de nota musical

## Tecnologias Utilizadas
- [Vite](https://vitejs.dev/) (build e dev server)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)

## Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Build para produção

```bash
npm run build
```
Os arquivos finais estarão na pasta `dist`.

## Estrutura de pastas
```
public/        # Arquivos estáticos (favicon, PDFs, JSONs, etc)
src/           # Código-fonte React/TypeScript
  components/  # Componentes reutilizáveis
  hooks/       # Hooks customizados
  lib/         # Funções utilitárias e dados
  pages/       # Páginas principais
```

## Favicon
O projeto utiliza um favicon SVG personalizado de nota musical, localizado em `public/favicon.svg`.

## Créditos
- Ícone musical criado por [GitHub Copilot]
- Desenvolvido por Lucas Fernandes

---

> Este projeto é open-source e pode ser adaptado para outros hinários ou aplicações musicais.
