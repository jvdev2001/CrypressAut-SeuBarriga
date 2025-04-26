# 🧪 Automação de Testes: Cadastro de Usuário (Cypress)

Este projeto contém a automação do cenário de *Cadastro de Usuário* na aplicação **[Seu Barriga](https://seubarriga.wcaquino.me/login)**, abordando testes positivos e negativos utilizando o Cypress.

## 📋 Sobre o Projeto

Automatizamos o fluxo de cadastro de usuários no sistema *Seu Barriga*.

Essa aplicação simula um sistema de *gerenciamento financeiro*, permitindo que os usuários realizem operações como:

- Cadastro de contas
- Registro de movimentações financeiras
- Geração de relatórios

O plano contempla a validação dos seguintes pontos:

- ✅ Autenticação de usuários (login e cadastro)
- ✅ Gerenciamento de contas (criação, listagem, edição e exclusão)
- ✅ Movimentações financeiras (inserção de receitas e despesas, alteração de status pago/pendente)
- ✅ Filtragem de dados no resumo mensal (por mês e ano)
- ✅ Logout seguro

## 🧪 Cenário Automatizado

- *Cadastro de Usuário:*  
  Fluxo de registro de novos usuários na plataforma *Seu Barriga*.

## 📄 Casos de Teste Automatizados

- *Registro com sucesso:*  
  Usuário preenche nome, e-mail e senha corretamente e é cadastrado com sucesso.

- *Registro com e-mail já existente:*  
  Tentativa de cadastro com um e-mail já cadastrado retorna mensagem de erro adequada.

- *Cadastro com campo "Nome" vazio:*  
  Tentativa de cadastro sem informar o nome deve impedir o registro e exibir mensagem de erro.

- *Cadastro com campo "E-mail" vazio:*  
  Tentativa de cadastro sem informar o e-mail deve impedir o registro e exibir mensagem de erro.

- *Cadastro com todos os campos vazios:*  
  Tentativa de cadastro sem preencher nenhum campo deve impedir o registro e exibir mensagens de erro para todos os campos obrigatórios.

## 📑 Documentação do Projeto

Além da automação, este repositório também inclui os seguintes artefatos:

- 📄 [Plano de Testes](#https://drive.google.com/file/d/19q7twQ6aENJiqC_n8F91BYXkbSU4dcVb/view?usp=sharing)
https://drive.google.com/file/d/19q7twQ6aENJiqC_n8F91BYXkbSU4dcVb/view?usp=sharing
- 📄 [Especificação dos Casos de Teste](#https://drive.google.com/file/d/12mlEThn5tAwrZkwjNUrJtSSpdA5_GJtg/view?usp=sharing)
- 📄 [Relatório de Testes Executados](#https://drive.google.com/file/d/1cB2nmSg9Fby-qONU0m5CErzlry5wNvrg/view?usp=sharing)
- 📄 [Especificação de Bugs Encontrados](#https://drive.google.com/file/d/15dqkV8yRsSiAowA_j2MAxJY4ll0ZPbeA/view?usp=sharing)
