# Unifaat 2026 — Desenvolvimento Web

## Node — Primeiro Bimestre

Exemplos práticos para rodar no terminal com `node`.

Material desenvolvido pelo professor Luan Tavares.

### Organização do repositório

Este repositório está organizado por pastas temáticas, separando os conteúdos introdutórios de Node.js ao longo do bimestre. A ideia é manter os exemplos agrupados por assunto, facilitando tanto a navegação quanto o uso em sala de aula.

Cada pasta representa um bloco de conteúdo, como fundamentos da linguagem, tipos de dados, escopo, operadores, tipos de referência, loops, funções e outros temas trabalhados na introdução ao Node.js.

Dentro de cada pasta, os arquivos são independentes entre si e podem ser executados separadamente no terminal, de acordo com o tema estudado.

### Requisitos

- Node.js >= 24
- Git

Para conferir:

    node -v
    git --version

### Passo a passo rápido no WSL / Linux

#### 01 - Instalar o Node.js 25

01.1 - Atualizar os pacotes do sistema:

    sudo apt update

01.2 - Instalar o `curl`, caso ainda não tenha:

    sudo apt install curl -y

01.3 - Adicionar o repositório do Node.js 25:

    curl -fsSL https://deb.nodesource.com/setup_25.x | sudo -E bash -

01.4 - Instalar o Node.js:

    sudo apt install -y nodejs

01.5 - Conferir a versão instalada:

    node -v

#### 02 - Instalar o Git

02.1 - Instalar o Git:

    sudo apt install git -y

02.2 - Conferir a versão instalada:

    git --version

#### 03 - Baixar este repositório

03.1 - Clonar o repositório:

    git clone https://github.com/luan-tavares/unifaat2026-dw-node-bimestre01

03.2 - Entrar na pasta do projeto:

    cd unifaat2026-dw-node-bimestre01

### Como executar

Você pode entrar no diretório desejado e executar o arquivo com `node`:

    node 01-escopo-lexico.js

Ou executar diretamente com o caminho relativo a partir da raiz do repositório:

    node 02-tipos-primitivos-escopo-lexico/01-escopo-lexico.js

### Objetivo do material

- Apresentar os fundamentos de JavaScript no contexto do Node.js
- Organizar os exemplos por temas ao longo do primeiro bimestre
- Facilitar a execução prática dos arquivos no terminal
- Servir como base de apoio para aulas introdutórias de desenvolvimento web com Node.js