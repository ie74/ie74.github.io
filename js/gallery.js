// Masonry (grid-auto-rows 1px) + filtri per album + lightbox.
// <div class="masonry" data-src="/data/photos.json" data-limit="8" data-filters="#chips"></div>
const abs = s => /^(\/|https?:)/.test(s) ? s : '/' + s;   // path root-anchored: funziona da / e da /pages

async function initGallery(grid) {
	let photos = await (await fetch(grid.dataset.src)).json();
	if (+grid.dataset.limit) photos = photos.slice(0, +grid.dataset.limit);

	photos.forEach((p, i) => {
		const t = document.createElement('button');
		t.className = 'tile';
		t.dataset.album = p.album || '';
		t.dataset.ratio = p.height / p.width;       // NOMI CAMPI DA VERIFICARE col tuo photos.json
		t._full = abs(p.full);
		t.classList.add('reveal'); t.style.setProperty('--d', (i % 8) * 40 + 'ms'); io.observe(t);
		t.innerHTML = `<img src="${abs(p.thumb)}" width="${p.width}" height="${p.height}" loading="lazy" alt="Photograph ${i + 1}">`;
		grid.append(t);
	});

	const layout = () => {
		const gap = parseFloat(getComputedStyle(grid).columnGap);       // stesso gap in orizzontale e in verticale
		const tiles = [...grid.querySelectorAll('.tile:not([hidden])')];
		const hs = tiles.map(t => t.firstElementChild.getBoundingClientRect().height); // prima leggo tutto...
		tiles.forEach((t, i) => { t.style.gridRowEnd = `span ${Math.ceil(hs[i] + gap)}`; }); // ...poi scrivo
	};
	layout();
	new ResizeObserver(layout).observe(grid);

	const box = document.querySelector(grid.dataset.filters || '#none');
	if (box) {
		const albums = [...new Set(photos.map(p => p.album).filter(Boolean))];
		const n = a => photos.filter(p => !a || p.album === a).length;
		const chip = (label, v, on) => `<button class="chip" data-album="${v}" aria-pressed="${on}">${label}</button>`;
		box.innerHTML = chip(`All [${n()}]`, '', true) + albums.map(a => chip(`${a} [${n(a)}]`, a, false)).join('');
		box.addEventListener('click', e => {
			const c = e.target.closest('.chip'); if (!c) return;
			box.querySelectorAll('.chip').forEach(x => x.setAttribute('aria-pressed', x === c));
			grid.querySelectorAll('.tile').forEach(t => t.hidden = !!c.dataset.album && t.dataset.album !== c.dataset.album);
			layout();
		});
	}
	initLightbox(grid);
}

function initLightbox(grid) {
	const lb = document.createElement('div');
	lb.className = 'lb'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true');
	lb.innerHTML = `<div class="lb-bar"><span class="mono lb-count"></span><button class="lb-close">Close</button></div>
    <button class="lb-prev" aria-label="Previous">←</button><img alt=""><button class="lb-next" aria-label="Next">→</button>`;
	document.body.append(lb);
	const img = lb.querySelector('img'), count = lb.querySelector('.lb-count');
	let list = [], idx = 0;

	const show = i => {
		idx = (i + list.length) % list.length;
		img.classList.add('is-swapping');
		const next = new Image();                    // preload: niente flash della foto precedente
		next.onload = () => { img.src = next.src; img.classList.remove('is-swapping'); };
		next.src = list[idx]._full;
		count.textContent = `${String(idx + 1).padStart(2, '0')} / ${String(list.length).padStart(2, '0')}`;
	};
	const close = () => { lb.classList.remove('is-open'); document.body.style.overflow = ''; };

	grid.addEventListener('click', e => {
		const t = e.target.closest('.tile'); if (!t) return;
		list = [...grid.querySelectorAll('.tile:not([hidden])')];   // naviga solo nell'album filtrato
		lb.classList.add('is-open'); document.body.style.overflow = 'hidden';
		show(list.indexOf(t));
	});
	lb.querySelector('.lb-close').onclick = close;
	lb.querySelector('.lb-prev').onclick = () => show(idx - 1);
	lb.querySelector('.lb-next').onclick = () => show(idx + 1);
	let tx = 0, ty = 0;                                  // swipe orizzontale su touch
	lb.addEventListener('touchstart', e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
	lb.addEventListener('touchend', e => {
		const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
		if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) show(idx + (dx < 0 ? 1 : -1));
	}, { passive: true });
	lb.addEventListener('click', e => { if (e.target === lb) close(); });
	document.addEventListener('keydown', e => {
		if (!lb.classList.contains('is-open')) return;
		if (e.key === 'Escape') close();
		if (e.key === 'ArrowLeft') show(idx - 1);
		if (e.key === 'ArrowRight') show(idx + 1);
	});
}

(() => {  // header: via in scroll-down, torna in scroll-up; hamburger sotto i 768px
	const h = document.querySelector('.site-header'), tog = h.querySelector('.nav-toggle'); let y = 0;
	const setMenu = o => { h.classList.toggle('menu-open', o); tog.setAttribute('aria-expanded', o); };
	tog.addEventListener('click', () => setMenu(!h.classList.contains('menu-open')));
	h.querySelectorAll('.nav a').forEach(l => l.addEventListener('click', () => setMenu(false)));
	document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
	addEventListener('scroll', () => {
		h.classList.toggle('is-hidden', scrollY > y && scrollY > 120 && !h.classList.contains('menu-open')); y = scrollY;
	}, { passive: true });
})();

// --- movimento ---
// hero: le parole salgono da una maschera
document.querySelectorAll('.hero h1').forEach(h => {
	if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	const txt = h.textContent; h.setAttribute('aria-label', txt);
	h.innerHTML = txt.split(' ').map((w, i) => `<span class="w" aria-hidden="true"><span style="--i:${i}">${w}</span></span>`).join(' ');
});
// reveal allo scroll
const io = new IntersectionObserver(es => es.forEach(e => {
	if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { rootMargin: '0px 0px -8% 0px', threshold: .08 });
const reveal = (els, stagger) => [...els].forEach((el, i) => {
	el.classList.add('reveal'); if (stagger) el.style.setProperty('--d', Math.min(i, 6) * 70 + 'ms'); io.observe(el);
});
reveal(document.querySelectorAll('.section-head, .chips, .pindex'));
['.ledger', '.project', '.about', '.contact', '.foot'].forEach(sel =>
	document.querySelectorAll(sel).forEach(g => reveal(g.children, true)));

document.querySelectorAll('.masonry').forEach(initGallery);