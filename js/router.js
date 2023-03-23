const routes = {
  404: '/pages/404/404.html',
  '/': '/pages/home/index.html',
  '/about': '/pages/about/about.html',
  '/lorem': '/pages/lorem/lorem.html',
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  /* Не понимаю куда обращается фетч. В объект routes?
  И не понимаю как работает  data.text
  Попробовать tojson и stringify */
  const html = await fetch(route).then((data) => data.text());
  document.getElementById('main-page').innerHTML = html;
};

const route = (event) => {
  event.preventDefault();
  window.history.pushState({}, '', event.target.href);
  handleLocation();
};

const mainNavLinks = document.querySelectorAll('.main-nav-link');
mainNavLinks.forEach((link) => link.addEventListener('click', route));

/* Эта строка нужна чтобы работали кнопки переключения назад и вперед в браузере" */
window.onpopstate = handleLocation;
/* Добавляем в перечень свойств объекта window функцию route.
Не очень понимаю эту строчку, но без нее не работает */
window.route = route;
/* Это вообще не понимаю как работает и для чего */
handleLocation();
