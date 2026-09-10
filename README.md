# Full Stack

Projeto em desenvolvimento criado com o objetivo de colocar em prática conceitos de desenvolvimento web Full Stack, trabalhando principalmente com **Node.js, Express e MySQL**.

> 🚧 **Status:** Em desenvolvimento

Este projeto faz parte da minha evolução nos estudos de desenvolvimento de software. A proposta é construir a aplicação gradualmente, implementando novas funcionalidades e aprimorando a estrutura do projeto conforme avanço nos estudos.

## 🛠️ Tecnologias

* **Node.js**
* **Express**
* **MySQL**
* **MySQL2**
* **JavaScript**

## 📌 Estrutura inicial

O projeto possui um servidor responsável por iniciar a aplicação e disponibilizá-la localmente na porta `3000`.

O arquivo principal do servidor realiza a inicialização da aplicação a partir de `src/app`:

```javascript
const server = require('./src/app')
const port = 3000
```

## ▶️ Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/Gabrielrlp/fullstack.git
```

### 2. Acesse a pasta do projeto

```bash
cd fullstack
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor

```bash
node server.js
```

Após iniciar, a aplicação será disponibilizada em:

```text
http://localhost:3000
```

## 🗄️ Banco de dados

O projeto utiliza **MySQL** para trabalhar com dados da aplicação, com integração realizada através do pacote `mysql2`.

> ⚠️ As configurações de conexão com o banco devem ser definidas de acordo com o ambiente utilizado.

## 🚧 Próximos passos

Este projeto está em evolução e receberá novas implementações ao longo do desenvolvimento.

Alguns dos objetivos futuros incluem:

* Evoluir a estrutura da aplicação;
* Ampliar a integração com o banco de dados;
* Implementar e aprimorar funcionalidades da aplicação;
* Melhorar a organização e manutenção do código;
* Continuar aplicando conceitos de arquitetura e desenvolvimento Full Stack.

## 📚 Objetivo de aprendizado

Mais do que desenvolver uma aplicação funcional, este projeto está sendo utilizado como uma forma prática de compreender o funcionamento de uma aplicação Full Stack, desde o servidor e as rotas até a comunicação com o banco de dados.

O projeto está sendo desenvolvido como parte da minha evolução na programação, com implementação gradual de novos conhecimentos.

## 👨‍💻 Desenvolvimento

Projeto desenvolvido individualmente como parte dos meus estudos e prática em desenvolvimento Full Stack.

O código está em constante evolução conforme novos conceitos são estudados e aplicados ao projeto.

---

⭐ Este repositório será atualizado conforme o projeto avançar.
