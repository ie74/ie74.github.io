const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

document.querySelectorAll('.container-col a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    lightboxImg.src = link.href;
    lightboxCaption.textContent = link.dataset.caption || '';
    lightbox.classList.add('active');
  });
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.classList.remove('active');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') lightbox.classList.remove('active');
});