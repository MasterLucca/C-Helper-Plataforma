# C-Helper - PROA (DemoDay)

### `Instale o Node.JS & Yarn`
[Node](https://nodejs.org/en/download/) - 
[Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)



Projeto inicializado com [Create React App](https://github.com/facebook/create-react-app).

## Packages Necessários

A autenticação com o Google é realizada via [FireBase](https://yarnpkg.com/package/firebase).
No diretório do projeto, adicione o Package do FireBase: 

### `yarn add firebase`

As importações já foram realizadas dentro do App.


Faça a instalação do SASS v5.0.0
### `yarn add node-sass@^5.0.0`

É importante que instale a versão 5, apesar de já haver a versão 6 do SASS. 
O React não suporta a versão 6 do SASS, então é realmente necessário realizar o comando dessa forma para instalar a versão 5.

`Por que o SASS?`

O SASS é um "pré-processador" CSS, onde escrevemos basicamente o CSS, tendo muita familiaridade. 
Oferece funcionalidades a mais para que possamos trabalharmos melhor. 

Saiba mais sobre [SASS](https://sass-lang.com)



Faça a instalação do Router Dom
### `yarn add @types/react-router-dom -D`

O React Router Dom, nos trás a possibilidade de utilizar o conceito de navegação.
Essa navegação citada acima seria para a navegação entre páginas, ex:
/home
/register

Por que instalamos utilizando Types e -D?
O Router Dom não é um Package desenvolvido em TypeScript, por isso necessário instalar esse pacote de terceiros, onde é incluso a tipagem do pacote.
(terceiros = comunidade);
(-D é uma indicação a dependência de desenvolvimento)

Saiba mais sobre [React Router Dom](https://reactrouter.com/).


## Saiba mais

Você pode tirar suas dúvidas na [Documentação do React-Native](https://create-react-app.dev/).

Para aprender React, veja a [Documentação React](https://reactjs.org/).
