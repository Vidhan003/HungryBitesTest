AOS.init({
  duration: 1000,
  once: true
});
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('href').slice(1);
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  });
});