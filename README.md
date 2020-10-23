<h1>Capital-Empreendedor-Frontend</h1>

<h2>Descrição/Description</h2>

Esta aplicação foi desenvolvida em React (create-react-app).
Para executar as requisições http, necessárias para acessar o backend da aplicação, usamos o pacote axios. As vantagens dessa biblioteca são: 
possibilidade de fazer requisições http, transformar as respostas em JSON de forma automática, criar instâncias e ter suporte para requisições assíncronas. 
Com o "axios.create" criamos a "api" que permite a integração com o backend, é por meio dela que todas as requisições http desse projeto são feitas.

Os projetos feitos com React normalmente são baseados na estruturação de uma SPA (Single Page Application), assim evitamos aquele comportamento desnecessário de carregar muitos arquivos repetitivos para a estrutura de um site, tendo uma experiência do usuário muito mais fluida. Para termos uma navegação mais rápida escolhemos a biblioteca "react-router-dom", dela importamos o Switch e o Route (import { Switch, Route } from 'react-router-dom';).


<i>This application was developed in React (create-react-app).
To execute the http requests, necessary to access the application backend, we use the axios package. The advantages of this library are:
possibility to make http requests, transform responses into JSON automatically, create instances and have support for asynchronous requests.
With "axios.create" we create the "api" that allows integration with the backend, it is through it that all http requests for this project are made.

Projects made with React are usually based on the structuring of a SPA (Single Page Application), so we avoid that unnecessary behavior of loading many repetitive files into the structure of a website, having a much more fluid user experience. To have a faster navigation we chose the library "react-router-dom", from it we import the Switch and the Route (import {Switch, Route} from 'react-router-dom';).</i>


<h2>Páginas/Pages</h2>

<h3>Dashboard</h3>

A Dashboard é a página principal desta aplicação, logo ao ser carregada ela exibe a listagem de todos os clientes e suas respectivas informações. Isso é realizado pela função loadAll chamada pelo useEffect.
<strong>No campo de listagem de clientes, a coluna da esquerda com o nome dos clientes é um botão, que ao ser clicado nos direciona para a página "Opportunities"</strong> que exibe as oportunidades do cliente alvo desse click. Além da listagem de clientes a página Dashboard conta com dois componentes, um Header personalizado com um comentário sobre a empresa "Capital Empreendedor" feito pela "InfoMoney", e um Footer.

<i>The Dashboard is the main page of this application, so when loaded it displays the list of all customers and their respective information. This is accomplished by the loadAll function called by useEffect. In the customer list field, the left column with the customers name is a button, which when clicked takes us to the "Opportunities" page that displays the opportunities of the customer targeted by that click. In addition to the customer list, the Dashboard page has two components, a personalized Header with a comment about the company "Capital Empreendedor" made by "InfoMoney", and a Footer.</i>

<h3>Opportunities</h3>

A página "Opportunities" é chamada quando um botão, na coluna da esquerda com os nomes dos clientes na "Dashboard" é clicado. Ao se realizar essa ação é disparada uma requisição que busca no arquivo "data-json", no backend, os dados das oportunidades do cliente específico alvo do click. Essa página, "Opportunities", exibe os campos "Nome", "Limite", "Interesse", "Prazo", "Ativo/Inativo" e "Deletar".
A coluna "Ativo/Inativo" é composta por um botão que permite editar o 'status' da oportunidade. Ao ser acionado ele faz uma requisição 'Put' e altera o respectivo campo no arquivo que simula o banco de dados. Imediatamente a aplicação é renderizada exibindo o novo 'status'. 
Por fim, na coluna da direita há um botão para deletar a oportunidade. Para que isso ocorra, o botão dispara uma nova requisição para o backend, em seguida a página é atualizada. 
A página também conta com dois componentes. Um "Header" com um link exclusivo de "Voltar" que a direciona novamente para a "Dashboard", e um "FormContainer" que exibe um formulário para criação de novas oportunidades.


<i>The "Opportunities" page is called when a button, in the left column with the customers' names on the "Dashboard" is clicked. When this action is performed, a request is triggered that searches in the file "data-json", in the backend, the data of the opportunities of the specific customer targeted by the click. This page, "Opportunities", displays the fields "Name", "Limit", "Interest", "Term", "Active / Inactive" and "Delete".
The "Active / Inactive" column is made up of a button that allows you to edit the 'status' of the opportunity. When triggered, it makes a 'Put' request and changes the respective field in the file that simulates the database. The application is immediately rendered showing the new 'status'.
Finally, in the right column there is a button to delete the opportunity. For this to happen, the button triggers a new request for the backend, then the page is updated.
The page also has two components. A "Header" with a unique "Back" link that takes you back to the "Dashboard", and a "FormContainer" that displays a form for creating new opportunities.</i>

<h2>Componentes/Components</h2>

Esta aplicação possúi três componentes, sendo o principal deles o "FormContainer".


<i>This application has three components, the main one being "FormContainer".</i>

<h3>FormContainer</h3>

Componente "FormContainer" de uso exclusivo da página "Opportunities". Ele exibe um formulário para a criação de uma nova oportunidade para o cliente. Assim que o formulário é preenchido e submetido a função "handleAddOpportunity" dispara uma requisição "post" criando no arquivo "data-json", no backend, essa nova "opportunity"


<i>"FormContainer" component for exclusive use of the "Opportunities" page. It displays a form for creating a new opportunity for the customer. As soon as the form is filled out and submitted to the "handleAddOpportunity" function, it triggers a "post" request creating in the file "data-json", on the backend, this new "opportunity"</i>

<h2>Inicialização/To start</h2>

Para abrir a aplicação no navegador vá para o terminal na pasta do projeto e digite o comando "yarn start"

<i>In the project directory, you can run: "yarn start"</i>

<h2>Navegação/Navigation</h2>

<h3>Dashboard para Opportunities</h3>

Para navegar da página Dashboar para a página Opportunities basta acessar a coluna da direita na listagem de clientes com o nome de cada cliente. Ao clicar em cima do nome você será direcionado para a página de oportunidades onde será exibida as oportunidades disponíveis para o cliente alvo da ação.

<i>To navigate from the Dashboar page to the Opportunities page, simply access the right column in the customer list with the name of each customer. By clicking on the name you will be directed to the opportunities page where the opportunities available to the target client of the action will be displayed.</i>

<h3>Opportunities para Dashboard</h3>

Para voltar à página Dashboard basta clicar em cima da palavra voltar no canto superior direito da aplicação na página Opportunities.


<i>To return to the Dashboard page, just click on the word back in the upper right corner of the application on the Opportunities page.</i>

