import './js/header.js';
import './js/footer.js';
import './js/hero.js';
import './js/search-list.js';
import './js/my-movies.js';
import './js/up-coming.js';
import './js/weekly-trends.js';

// PATH LOGIC
document.querySelectorAll('a[href^="/"]').forEach(link => {
  const href = link.getAttribute('href');
  if (!href.includes('/cinemania-project/')) {
    link.setAttribute('href', '/cinemania-project' + href);
  }
});

document.querySelectorAll('object[data^="/"]').forEach(obj => {
  const data = obj.getAttribute('data');
  if (!data.includes('/cinemania-project/')) {
    obj.setAttribute('data', '/cinemania-project' + data);
  }
});