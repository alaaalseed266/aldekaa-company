const langToggle = document.getElementById('langToggle');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
let currentLang = 'ar';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.lang = lang;
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-ar][data-en]').forEach((el) => {
    el.innerHTML = el.dataset[lang];
  });
  langToggle.textContent = lang === 'ar' ? 'EN' : 'عربي';
  document.title = lang === 'ar' ? 'شركة الدقة | Aldekaa Co.' : 'Aldekaa Co. | Sliding Door Solutions';
}

langToggle.addEventListener('click', () => setLanguage(currentLang === 'ar' ? 'en' : 'ar'));
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('open')));
