# 🎬 Catálogo Marvel (MCU)

[![Catálogo Marvel (MCU) Workflow](https://github.com/marianaviana/daily/actions/workflows/daily-commit.yml/badge.svg)](https://github.com/marianaviana/daily/actions/workflows/diversability-modulo-01-projeto-final.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Este projeto foi desenvolvido como parte das atividades da disciplina da trilha de Front-end Javascript no Módulo 01 (Nivelamento de Lógica de Programação e OO) do programa DiversAbility.

O objetivo é concluir o desafio do professor e demonstrar o domínio das habilidades apresentadas.

Um sistema completo para gerenciamento de catálogo de filmes e séries do Universo Cinematográfico Marvel, desenvolvido com HTML, CSS e JavaScript puro seguindo princípios de Clean Code e Programação Orientada a Objetos.

<img width="874" height="504" alt="image" src="https://github.com/user-attachments/assets/e4ba7e95-b061-4535-8ea2-06830642e1e6" />

### [Preview do projeto](https://mariviana.dev/diversability-modulo-01-projeto-final/) 👀

## ✨ Funcionalidades

- **📋 CRUD Completo** - Create, Read, Update e Delete de filmes/séries
- **🔍 Sistema de Busca** - Busca por título em todas as páginas com listas
- **📊 Estatísticas** - Dashboard com algumas métricas do catálogo
- **🎨 Interface Dark** - Design moderno com tema escuro inspirado na plataforma do curso
- **📱 Responsivo** - Adaptado para todos os dispositivos
- **💾 Persistência** - Dados salvos localmente no navegador

## 🚀 Como Executar

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd mcu-catalog

2. Abra o projeto

    Abra o arquivo index.html em qualquer navegador moderno comm  Live Server ou via servidor local de sua preferencia:

# Execute com Live Server  (recomendado)
- Instale a extensão "Live Server" se ainda não tiver
- Clique direito no `index.html`
- Selecione `Open with Live Server`

# Alternativa com Fire Server
- Usar a extensão "Five Server" (suporta hot reload)

Ou executar via terminal:

# Alternativa com Python 3
    `python -m http.server 8000`

# Alternativa com Node.js
    `npx serve`

# Alternativa com PHP
    `php -S localhost:8000`

- Abra localhost no navegador com a porta da alternativa escolhida

## 📋 Estrutura de Dados

Cada filme/série possui os seguintes campos:

```bash
{
  id: Number,                 // Identificador único
  title: String,              // Nome do filme/série
  tipo: String,               // "Filme" ou "Serie"
  diretores: Array,           // Lista de diretores
  avaliacao: Number,          // Avaliação de 0 a 10
  lancamento: String,         // Data no formato DD/MM/AAAA
  duracao: Number,            // Duração em minutos
  streaming: Boolean,         // Disponível em streaming
  imgLink: String             // URL da imagem do poster
}
```

## 🎯 Funcionalidades Detalhadas
Páginas Disponíveis

1. Principal
    - Listagem em cards de todos os filmes/séries
    - Campo de busca por título
    - Estatísticas do catálogo
    - Ações rápidas (editar/excluir)

2. Cadastrar
    - Formulário completo com validações

3. Atualizar
    - Busca por título para localizar item
    - Formulário de edição com dados pré-preenchidos
    - Validações consistentes

4. Excluir
    - Busca por título
    - Confirmação de exclusão com modal
    - Prevenção de exclusão acidental

5. Sobre
    - Informações sobre o projeto
    - Tecnologias utilizadas
    - Funcionalidades principais

### Validações Implementadas
   - ✅ Campos obrigatórios
   - ✅ Formato de data (DD/MM/AAAA)
   - ✅ Avaliação entre 0 e 10
   - ✅ Duração positiva
   - ✅ URL de imagem co validação básica
   - ✅ Prevenção de IDs duplicados

### 🛠️ Tecnologias Utilizadas
   - HTML5 - Estrutura semântica
   - CSS3 - Estilos com variáveis CSS e design responsivo
   - JavaScript ES6+ - Programação orientada a objetos
   - LocalStorage - Persistência de dados
   - Google Fonts - Tipografia Ubuntu

### 📊 Estatísticas e Filtros
   - Total de itens no catálogo
   - Média de avaliações
   - Quantidade de itens com avaliação > 6
   - Disponibilidade em streaming
   - Maior e menor duração

### 🎨 Design Responsivo
   - O projeto foi desenvolvido com mobile-first approach:
   - Desktop: Layout com grid de cards
   - Tablet: Adaptação de colunas
   - Mobile: Stack vertical e menus compactos

### 🔧 Princípios de Desenvolvimento
   - Clean Code - Código limpo e legível
   - POO - Programação Orientada a Objetos
   - DRY - Don't Repeat Yourself
   - Separation of Concerns - Separação de responsabilidades
   - CamelCase - Padronização de nomenclatura

### 📝 Scripts de Desenvolvimento

   - O projeto não requer build ou transpilação. Para desenvolvimento:
   - Edite os arquivos na pasta principal e subpastas
   - Teste diretamente no navegador
   - Sugestão simples para debugs: use console.log ou DevTools

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para detalhes.

## 👥 Autores
   - Mariana Viana - Desenvolvimento e implementação
   - Ada Tech & Cognizant - Programa DiversAbility

## 🙋‍♂️ Suporte

Para dúvidas ou problemas:
   - Verifique se todos os arquivos estão na estrutura correta
   - Confirme que o navegador suporta JavaScript ES6+
   - Verifique o console do navegador para erros

______________________

> **Nota:** Este projeto foi desenvolvido para fins educacionais como parte do programa DiversAbility da Ada Tech em parceria com a Cognizant.

______________________
<img alt="image" src="https://github.com/user-attachments/assets/19ddebe0-8700-4e99-a110-b5f8d8308c7b" />

