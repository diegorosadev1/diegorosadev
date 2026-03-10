# Diego Rosa - Software Engineer Portfolio

### Engineering Excellence & Modern Solutions

[cite_start]Este repositório contém o código-fonte do meu portfólio profissional[cite: 1, 9]. [cite_start]Desenvolvido com foco em **Engenharia de Software**, arquiteturas escaláveis e integração contínua[cite: 20, 26], o projeto funciona como um dashboard técnico que monitora deploys e performance em tempo real.

---

## 🚀 Funcionalidades Premium

### 1. Monitoramento de Deploy em Tempo Real (Vercel Integration)
O sistema utiliza a API da Vercel para buscar metadados de infraestrutura dinamicamente.
* [cite_start]**Ranking por Recência:** Projetos com deploys mais recentes aparecem automaticamente no topo da lista[cite: 149].
* [cite_start]**Status Badge:** Indicadores pulsantes em `#79D88F` mostram se o ambiente de produção está `READY`[cite: 81, 142].
* [cite_start]**Deployment Insights:** Na página de detalhes, são exibidos o **Commit Hash** atual, o ambiente (Vercel Edge) e a data exata do último build[cite: 110].

### 2. Internacionalização Inteligente (i18n)
Arquitetura preparada para detecção e adaptação automática baseada na localização do visitante.
* [cite_start]**Multi-idioma:** Suporte estruturado para Português (Brasil) e Inglês (US)[cite: 13, 85].
* **Formatação Localizada:** Datas e números adaptados automaticamente via API `Intl` nativa do JavaScript.

### 3. UI/UX de Alta Performance
* **Estética Dark Premium:** Paleta de cores baseada em `#020F3C` (Primary) e `#79D88F` (Accent).
* [cite_start]**Glassmorphism:** Interfaces com efeitos de desfoque de fundo (backdrop-blur) e bordas translúcidas[cite: 11, 29].
* [cite_start]**Framer Motion:** Transições suaves e animações de layout que garantem uma experiência fluida e refinada[cite: 39, 112].

---

## [cite_start]🛠 Stack Técnica [cite: 3, 43]

| Frontend | Backend | Infrastructure |
| :--- | :--- | :--- |
| [cite_start]**React / Next.js** [cite: 10, 35] | [cite_start]**Node.js** [cite: 10, 36] | [cite_start]**Vercel Edge Network** [cite: 10] |
| [cite_start]**TypeScript** [cite: 10, 37] | [cite_start]**REST APIs** [cite: 48] | [cite_start]**CI/CD Pipelines** [cite: 10] |
| [cite_start]**Tailwind CSS** [cite: 38] | [cite_start]**PostgreSQL** [cite: 47] | [cite_start]**Docker & Kubernetes** [cite: 50, 51] |
| [cite_start]**Framer Motion** [cite: 39] | [cite_start]**Microservices** [cite: 46] | [cite_start]**Terraform** [cite: 55] |

---

## 📁 Estrutura do Projeto

* `src/services/githubService.ts`: Lógica centralizada para consumo das APIs do GitHub e Vercel.
* [cite_start]`src/components/projects/ProjectCard.tsx`: Componente de card com indicadores dinâmicos de status[cite: 79].
* `src/pages/ProjectDetailsPage.tsx`: Página detalhada com especificações técnicas e métricas de deploy.
* `src/constants/projectsMetadata.ts`: Mapeamento de metadados customizados e destaques de arquitetura.

---

## ⚙️ Configuração Local

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/diegorosadev1/diegorosadev.git](https://github.com/diegorosadev1/diegorosadev.git)
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Configure as variáveis de ambiente (`.env`):**
    ```env
    VITE_VERCEL_TOKEN=seu_token_aqui
    GITHUB_TOKEN=seu_token_github
    ```
4.  **Inicie o ambiente de desenvolvimento:**
    ```bash
    npm run dev
    ```

---

## 📄 Licença

© 2026 Diego Rosa. [cite_start]Todos os direitos reservados[cite: 133, 175].  
[cite_start]Projeto desenvolvido com foco em **Scalable Architecture** e **User Experience**[cite: 26].

---