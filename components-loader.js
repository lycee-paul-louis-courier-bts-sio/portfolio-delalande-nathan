async function loadComponent(id, file, options = {}) {
  const res = await fetch(`components/${file}`);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}


loadComponent('footer', 'footer.html');
loadComponent('navbar', 'navbar.html');
loadComponent('scrollup', 'scrollup.html');
