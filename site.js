/* Erlauftalerhof – edit centralized image sources in PHOTO_LIBRARY below. */
const PHOTO_LIBRARY = {
  'hotel-aussenansicht': 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=2200&q=85',
  'zimmer-doppelzimmer': 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=82',
  'zimmer-einzelzimmer': 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=82',
  'zimmer-familienzimmer': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=82',
  'restaurant-innenbereich': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=82',
  'restaurant-speisen': 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=82',
  'fruehstueck': 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1400&q=82',
  'terrasse': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=82',
  'garten': 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=82',
  'pool': 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1400&q=82',
  'erlauftal-natur': 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2200&q=85',
  'erlauftal-fluss': 'https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=1800&q=82',
  'wandern': 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1500&q=82',
  'radfahren': 'https://images.unsplash.com/photo-1544191696-15693072a129?auto=format&fit=crop&w=1500&q=82',
  'motorradfahren': 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1500&q=82'
};

const navLinks = [
  ['Startseite', 'index.html'], ['Zimmer', 'zimmer.html'], ['Restaurant', 'restaurant.html'],
  ['Aktivitäten', 'aktivitaeten.html'], ['Region', 'region.html'], ['Kontakt', 'kontakt.html']
];
const currentPage = location.pathname.split('/').pop() || 'index.html';
const header = document.querySelector('#site-header');
if (header) {
  header.innerHTML = `<div class="nav-wrap"><a class="brand" href="index.html" aria-label="Erlauftalerhof – Startseite"><span class="brand-mark" aria-hidden="true">E</span><span>Erlauftalerhof<small>Kienberg · Erlauftal</small></span></a><button class="menu-toggle" aria-expanded="false" aria-controls="main-nav"><span class="menu-icon" aria-hidden="true">☰</span><span class="sr-only">Menü öffnen</span></button><nav id="main-nav" aria-label="Hauptnavigation"><ul>${navLinks.map(([label, href]) => `<li><a href="${href}"${currentPage === href ? ' aria-current="page"' : ''}>${label}</a></li>`).join('')}<li class="nav-cta"><a href="zimmer.html#zimmeranfrage">Zimmer anfragen</a></li></ul></nav></div>`;
  const toggle = header.querySelector('.menu-toggle');
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    header.querySelector('#main-nav').classList.toggle('is-open', !expanded);
    toggle.querySelector('.menu-icon').textContent = expanded ? '☰' : '×';
    toggle.querySelector('.sr-only').textContent = expanded ? 'Menü öffnen' : 'Menü schließen';
  });
}
const footer = document.querySelector('#site-footer');
if (footer) footer.innerHTML = `<div class="footer-main wrap"><div><a class="brand footer-brand" href="index.html"><span class="brand-mark" aria-hidden="true">E</span><span>Erlauftalerhof<small>Kienberg · Erlauftal</small></span></a><p>Familiäre Gastlichkeit in Kienberg/Gaming,<br>Niederösterreich.</p></div><div><h2>Kontakt</h2><p>Erlauftalstraße 109<br>A-3291 Kienberg/Gaming</p><a href="tel:+436505909803">+43 (0) 650 / 590 98 03</a><br><a href="mailto:info@erlauftalerhof.at">info@erlauftalerhof.at</a></div><div><h2>Entdecken</h2><a href="zimmer.html">Zimmer</a><a href="restaurant.html">Restaurant</a><a href="aktivitaeten.html">Freizeit & Aktivitäten</a><a href="region.html">Region & Umgebung</a><a href="kontakt.html">Kontakt & Anreise</a></div></div><div class="footer-bottom wrap"><span>© ${new Date().getFullYear()} Erlauftalerhof</span><div><a href="impressum.html">Impressum</a><a href="datenschutz.html">Datenschutz</a></div></div>`;

document.querySelectorAll('img[data-photo]').forEach((image) => {
  const url = PHOTO_LIBRARY[image.dataset.photo];
  if (url) image.src = url;
  image.addEventListener('error', () => image.classList.add('image-error'), { once: true });
});

// Mailto handoff is intentionally transparent: this static site does not pretend to send data to a backend.
document.querySelectorAll('form[data-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = form.querySelector('.form-status');
    if (!form.reportValidity()) return;
    if (form.dataset.form === 'restaurant' && !form.elements['E-Mail'].value && !form.elements.Telefon.value) {
      status.textContent = 'Bitte geben Sie mindestens eine Kontaktmöglichkeit (E-Mail oder Telefon) an.';
      form.elements.Telefon.focus(); return;
    }
    if (form.elements.Anreise && form.elements.Abreise && form.elements.Abreise.value <= form.elements.Anreise.value) {
      status.textContent = 'Das Abreisedatum muss nach dem Anreisedatum liegen.';
      form.elements.Abreise.focus(); return;
    }
    const subject = form.dataset.form === 'zimmer' ? 'Zimmeranfrage Erlauftalerhof' : form.dataset.form === 'restaurant' ? 'Tischreservierungsanfrage Erlauftalerhof' : 'Kontaktanfrage Erlauftalerhof';
    const fields = [...new FormData(form).entries()].map(([key, value]) => `${key}: ${value}`).join('\n');
    const mailto = `mailto:info@erlauftalerhof.at?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fields)}`;
    status.textContent = 'Ihr E-Mail-Programm wird geöffnet. Bitte prüfen Sie die vorbereitete Nachricht und senden Sie sie dort aktiv ab.';
    window.location.href = mailto;
  });
});

const today = new Date().toISOString().slice(0, 10);
document.querySelectorAll('input[type="date"]').forEach((input) => { input.min = today; });
const arrival = document.querySelector('input[name="Anreise"]');
const departure = document.querySelector('input[name="Abreise"]');
if (arrival && departure) arrival.addEventListener('change', () => { departure.min = arrival.value || today; });
