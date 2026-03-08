# Web Automation Testing

Projeto de automação de testes end-to-end (E2E) utilizando WebdriverIO com TypeScript, aplicando o padrão Page Object Model (POM).

## Tecnologias

- [WebdriverIO](https://webdriver.io/) - Framework de automação
- [TypeScript](https://www.typescriptlang.org/) - Linguagem principal
- [Mocha](https://mochajs.org/) - Framework de testes
- [Faker.js](https://fakerjs.dev/) - Geração de dados dinâmicos
- [Allure Reporter](https://webdriver.io/docs/allure-reporter/) - Relatório de testes
- [WDIO Visual Service](https://webdriver.io/docs/visual-testing/) - Testes visuais

## Estrutura do projeto

```
web-automation-testing/
├── src/
│   ├── data/
│   │   └── form-data.json          # Dados estáticos usados nos testes
│   ├── elements/
│   │   ├── home-elements.ts        # Seletores da página Home
│   │   ├── login-elements.ts       # Seletores da página Login/Signup
│   │   ├── signup-elements.ts      # Seletores do formulário de cadastro
│   │   ├── account-created-elements.ts
│   │   └── delete-account-elements.ts
│   ├── interfaces/
│   │   ├── signup-interface.ts     # Interface SignupDetails
│   │   └── user-interface.ts       # Interface UserDetails
│   ├── pages/
│   │   ├── home/
│   │   │   └── home-page.ts        # Ações da página Home
│   │   ├── login/
│   │   │   └── login-page.ts       # Ações do formulário de Signup
│   │   ├── signup/
│   │   │   └── signup-page.ts      # Ações do formulário de cadastro
│   │   ├── account-created/
│   │   │   └── account-created-page.ts
│   │   └── delete-account/
│   │       └── delete-account-page.ts
│   └── tests/
│       └── signup.e2e.ts           # Teste E2E de cadastro de usuário
├── data/
│   └── form-data.json              # Dados do formulário
├── wdio.conf.ts                    # Configuração do WebdriverIO
├── tsconfig.json                   # Configuração do TypeScript
└── package.json
```

## Padrão utilizado: Page Object Model (POM)

O projeto segue o padrão POM dividido em três camadas:

| Camada | Responsabilidade |
|---|---|
| `elements/` | Centraliza os seletores CSS de cada página |
| `pages/` | Contém os métodos de ação de cada página |
| `tests/` | Orquestra os passos do teste usando as pages |

## Teste implementado

### Cadastro e exclusão de usuário (`signup.e2e.ts`)

Testa o fluxo completo de registro de um novo usuário no site [Automation Exercise](http://automationexercise.com).

**Passos:**
1. Acessa a página inicial
2. Clica em Signup / Login
3. Preenche nome e e-mail gerado dinamicamente pelo Faker
4. Preenche o formulário completo de cadastro
5. Verifica a mensagem "ACCOUNT CREATED!"
6. Clica em Continue
7. Acessa Delete Account
8. Verifica a mensagem "ACCOUNT DELETED!" e o botão Continue

## Como executar

**Instalar dependências:**
```bash
npm install
```

**Executar os testes:**
```bash
npm run wdio
```

**Visualizar o relatório Allure:**
```bash
allure serve allure-results
```

## Configurações do Chrome

O projeto configura o Chrome para:
- Executar em modo **headless** (sem abrir janela)
- Bloquear notificações e popups
- Desabilitar o autopreenchimento de endereços

Para executar com o browser visível, remova o argumento `--headless` em `wdio.conf.ts`.