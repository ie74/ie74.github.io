// ########## Masonry ##########
function getGapInPx(gridEl) {
  const gap = getComputedStyle(gridEl).gap;
  return parseFloat(gap);
}

function calculateColumns(containerWidth, minColumnWidth, gapPx) {
  const columns = Math.floor((containerWidth + gapPx) / (minColumnWidth + gapPx));
  return Math.max(1, columns);
}

function renderGrid(gridEl, photos, minColumnWidth) {
  const containerWidth = gridEl.offsetWidth;
  const gapPx = getGapInPx(gridEl);
  const rowHeightPx = 8;

  const columns = calculateColumns(containerWidth, minColumnWidth, gapPx);
  gridEl.style.setProperty('--columns', columns);

  const columnWidth = (containerWidth - gapPx * (columns - 1)) / columns;

  gridEl.innerHTML = '';

  photos.forEach((photo, index) => {
    const item = document.createElement('div');
    item.className = 'masonry-item';

    const renderedHeight = (columnWidth / photo.width) * photo.height;
    const rowSpan = Math.ceil((renderedHeight + gapPx) / (rowHeightPx + gapPx));
    item.style.gridRowEnd = `span ${rowSpan}`;

    const img = document.createElement('img');
    img.src = `/${photo.thumb}`;
    img.alt = photo.caption || '';
    img.loading = 'lazy';
    img.style.aspectRatio = `${photo.width} / ${photo.height}`;

    item.appendChild(img);
    item.addEventListener('click', () => openLightbox(photos, index));

    gridEl.appendChild(item);
  });
}

function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

function getMinColumnWidth(gridEl) {
  const desktopWidth = parseInt(gridEl.dataset.minColWidth, 10) || 280;
  const mobileWidth = gridEl.dataset.minColWidthMobile
    ? parseInt(gridEl.dataset.minColWidthMobile, 10)
    : desktopWidth;

  const breakpoint = 700; // Same as the CSS breakpoint
  return window.innerWidth <= breakpoint ? mobileWidth : desktopWidth;
}

async function initMasonryGallery(gridEl) {
  const dataSource = gridEl.dataset.source;
  const maxItems = gridEl.dataset.maxItems ? parseInt(gridEl.dataset.maxItems, 10) : null;

  const response = await fetch(dataSource);
  const allPhotos = await response.json();
  const photos = maxItems ? allPhotos.slice(0, maxItems) : allPhotos;

  const render = () => renderGrid(gridEl, photos, getMinColumnWidth(gridEl));
  render();

  window.addEventListener('resize', debounce(render, 150));
}

document.querySelectorAll('.masonry-grid').forEach(initMasonryGallery);

// ########## Lightbox ##########
// Open lightbox
function openLightbox(photosArray, startIndex) {
  currentPhotos = photosArray;
  currentIndex = startIndex;

  const lightbox = document.getElementById('lightbox');
  const img = lightbox.querySelector('.lightbox-image');

  img.src = currentPhotos[currentIndex].full;
  lightbox.classList.add('is-open');
}

// Buttons
let currentIndex = 0;
let currentPhotos = [];

function changeImage(direction) {
  const lightbox = document.getElementById('lightbox');
  const img = lightbox.querySelector('.lightbox-image');

  const outClass = direction === 'next' ? 'slide-out-left' : 'slide-out-right';
  const inStartX = direction === 'next' ? 60 : -60;

  img.classList.add(outClass);

  img.addEventListener('transitionend', function handler() {
    img.removeEventListener('transitionend', handler);

    currentIndex = direction === 'next'
      ? (currentIndex + 1) % currentPhotos.length
      : (currentIndex - 1 + currentPhotos.length) % currentPhotos.length;

    const nextSrc = currentPhotos[currentIndex].full;

    const preloader = new Image();
    preloader.onload = () => {
      img.src = nextSrc;
      img.classList.remove(outClass);

      img.style.transition = 'none';
      img.style.transform = `translateX(${inStartX}px)`;
      img.offsetHeight;
      img.style.transition = '';
      img.style.transform = 'translateX(0)';
      img.style.opacity = '1';

      img.addEventListener('transitionend', () => {
        img.style.transform = '';
        img.style.opacity = '';
        img.style.transition = '';
      }, { once: true });
    };
    preloader.src = nextSrc;
  }, { once: true });
}

document.querySelector('.lightbox-next').addEventListener('click', () => changeImage('next'));
document.querySelector('.lightbox-prev').addEventListener('click', () => changeImage('prev'));
document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('is-open');
}