import './js/header.js';
import './js/footer.js';
import './js/hero.js';
import './js/search-list.js';
import './js/my-movies.js';
import './js/up-coming.js';
import './js/weekly-trends.js';


/* GitHub Pages için link düzeltmesi */
const isGitHubPages = window.location.hostname.includes('github.io');
const basePath = isGitHubPages ? '/cinemania-project' : '';

document.querySelectorAll('a[href^="/"]').forEach(link => {
  const href = link.getAttribute('href');
  link.setAttribute('href', basePath + href);
});

document.querySelectorAll('object[data^="/"]').forEach(obj => {
  const data = obj.getAttribute('data');
  obj.setAttribute('data', basePath + data);
});