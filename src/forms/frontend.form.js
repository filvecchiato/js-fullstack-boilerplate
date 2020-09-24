// Frontend form for app set up.

// version 1: react only

// Style-management

// State-management

// Testing for now single option, will be multi-option

// Routing

// React Helmet

// Storybook

// Documentation

module.exports = [
  {
    type: 'list',
    name: 'style_system',
    message: 'Select styling option: ',
    choices: ['none', 'styled-components', 'sass', 'less', 'css'],
  },
  {
    type: 'list',
    name: 'state_management',
    message: 'Select State Management Method: ',
    choices: ['react-redux', 'react-Query', 'react-context'],
  },
  {
    type: 'confirm',
    name: 'routing',
    message: 'Would you like to use Routing (Y/n)?',
    default: 'true'
  },
  {
    type: 'confirm',
    name: 'helmet',
    message: 'Would you like to use React-helmet (Y/n)?',
    default: 'true'
  },
  {
    type: 'list',
    name: 'testing',
    message: 'Testing Library?',
    choices: ['jest', 'mocha', 'cypress']
  },
  {
    type: 'confirm',
    name: 'storybook',
    message: 'Would you like to use Storybook (Y/n)?',
    default: 'true'
  },
  {
    type: 'confirm',
    name: 'documentation',
    message: 'Create App Documentation with Docz (Y/n)?',
    default: 'true'
  }
];



/*

  create-fullstack-app create container "containerA"=> index.js

    import {} from 
  styled, redux options ['redux', 'css', docz] => x.constants.js, x.reducers.js

    style.css
  docz x.documentations.js

  script => containerA {
    index.js
    index.style.js
    index.constants.js
    index.reducers.js
  }

  css redux{
    index.js
    index.style.css
    index.constants.js
    index.reducers.js
  }
*/