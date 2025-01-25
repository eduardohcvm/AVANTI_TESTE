# Cadastro com React

Este projeto foi criado com o Create React App e apresenta uma tela de cadastro funcional. O design é simples, com validação básica de campos e um plano de fundo interativo com o texto "AVATI".

### README.md

# Mibe Soluções - Página Home

Este projeto é a implementação de uma página inicial responsiva para o site da **Mibe Soluções**, destacando serviços, categorias, e feedback de clientes de forma dinâmica e atraente. 

O design utiliza **React**, **Tailwind CSS**, e a biblioteca **react-responsive-carousel** para criar uma experiência moderna e interativa.

---

## **Funcionalidades**

- **Carousel Dinâmico**: Apresenta soluções com imagens, texto e cartões informativos.
- **Categorias de Serviços**: Divisão clara dos serviços oferecidos, como TI, proteção de dados, cibersegurança e comunicação.
- **Feedback de Clientes**: Exibição de estatísticas de satisfação dos clientes de forma visual e atrativa.
- **Totalmente Responsivo**: Layout adaptável a diversos tamanhos de tela.

---

## **Tecnologias Utilizadas**

- **React**: Para construção da interface.
- **Tailwind CSS**: Para estilização rápida e eficiente.
- **React Responsive Carousel**: Para o componente de carrossel.
- **HTML/CSS**: Suporte básico de estrutura e estilo.
- **JavaScript (ES6+)**: Para lógica e interatividade.

---

## **Instalação**

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seuusuario/mibe-solucoes-home.git
   cd mibe-solucoes-home
   ```

2. **Instale as dependências**:
   Certifique-se de que o Node.js está instalado em sua máquina.
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm start
   ```

4. Abra o navegador em [http://localhost:3000](http://localhost:3000) para visualizar o projeto.

---

## **Estrutura do Projeto**

```plaintext
src/
├── components/
│   ├── Home.jsx            # Componente principal da página inicial
├── styles/
│   ├── tailwind.css        # Configuração do Tailwind CSS
├── assets/
│   ├── icons/              # Ícones usados no projeto
│   ├── images/             # Imagens usadas no carrossel
├── App.jsx                 # Configuração principal do aplicativo
├── index.js                # Entrada do aplicativo React
```

---

## **Customização**

### Adicionar novos itens ao carrossel
No estado `carouselItems` do componente `Home.jsx`, adicione novos objetos com o formato:
```javascript
{
    id: 3,
    image: "/caminho/para/imagem.jpg",
    cards: [
        { id: 9, title: "Novo Card", description: "Descrição do novo card" }
    ],
    text: "Texto descritivo da solução"
}
```

### Atualizar categorias de serviços
No array `serviceCategories`, adicione ou edite as categorias e recursos associados:
```javascript
{
    title: "Nova Categoria",
    resources: [
        "Novo Serviço 1",
        "Novo Serviço 2",
    ]
}
```

---

## **Pré-visualização**

### **Seções principais**:

1. **Carrossel de Destaques**
   - Apresentação visual dos serviços oferecidos.
2. **Categorias de Serviços**
   - Destaque das principais áreas de atuação da empresa.
3. **Feedback de Clientes**
   - Estatísticas e depoimentos dos clientes satisfeitos.

---

## **Licença**

Este projeto é distribuído sob a licença **MIT**. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.

---




Deploy
O projeto está disponível online através da Vercel. Você pode acessá-lo diretamente [clicando aqui (https://avanti-teste-hbhzfo399-eduardohcvms-projects.vercel.app/)].

Tecnologias Utilizadas
React: Framework principal para criação da interface.
TailwindCSS: Biblioteca para estilização de componentes.
Vercel: Plataforma utilizada para deploy do projeto.
Observações
Este é um projeto simples com validação básica. Ele não possui integração com back-end, mas pode ser facilmente expandido para incluir funcionalidades mais avançadas.
