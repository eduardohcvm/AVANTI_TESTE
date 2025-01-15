# Cadastro com React

Este projeto foi criado com o Create React App e apresenta uma tela de cadastro funcional. O design é simples, com validação básica de campos e um plano de fundo interativo com o texto "AVATI".

## Funcionalidades da Tela

- **Campos para Cadastro:**
    - Nome de usuário (e-mail).
    - Senha.
- **Validação:**
    - O campo de e-mail aceita apenas endereços válidos.
    - A senha deve conter pelo menos 6 caracteres.
- **Mensagens Dinâmicas:**
    - Exibe mensagens de erro para campos inválidos.
    - Exibe mensagem de sucesso ao completar o cadastro.
- **Estilo:**
    - Bloco centralizado com a cor principal `#e9f035` e sombras complementares.
    - Todo o estilo do site foi feito com tailwindcss 

## Como Executar o Projeto

1. Certifique-se de ter o Node.js instalado.
2. Instale as dependências do projeto:
   ```bash
   npm install


#explicação do diretório
1. projeto feito em create-react-app 
2. a tela de login fica em src->componentes->cadastro-> index.jsx
3. o arquivo "App.js" serve para manipular os arquivos em react que serão exibidos e controlar as bibliotecas