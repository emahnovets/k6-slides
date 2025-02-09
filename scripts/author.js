import packageJson from '../package.json';

const authorNameElement = document.getElementById('author-name');

authorNameElement.textContent = packageJson.author.name;
