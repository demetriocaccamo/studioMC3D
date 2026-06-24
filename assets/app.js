/* ── DATA ── */
const OBJECTS = [
  { id:'o7', badge:'new', cat:'decorativo', ta:'ta-3',
    imgs:['img/torre-f1-1.jpg','img/torre-f1-2.jpg','img/torre-f1-3.jpg'], imgfit:'contain',
    title:'Torre di Controllo F1 Vintage',
    sub:'Motorsport Collection',
    short:'Torre box anni \'70 in scala 1:32 con livree Goodyear, Champion, Castrol e Martini.',
    desc:'Replica della torre di controllo dei box di un circuito F1 degli anni \'70, in scala 1:32. Struttura a tre livelli con texture mattoni stampata direttamente nel PLA. I vari elementi sono stampati in PLA di diversi colori. Le livree vintage (Goodyear, Champion, Castrol, Martini) sono applicate con decalcomanie a immersione. Compatibile con i principali tracciati slot car in scala 1:32.',
    specs:{ Materiale:'PLA', Scala:'1:32', Finitura:'Decalcomanie', Altezza:'~28 cm' }
  },
  { id:'o8', badge:'new', cat:'decorativo', ta:'ta-3',
    imgs:['img/tribuna-f1-1.jpg','img/tribuna-f1-2.jpg','img/tribuna-f1-3.jpg','img/tribuna-f1-4.jpg'], imgfit:'cover',
    title:'Tribuna da Circuito F1',
    sub:'Motorsport Collection',
    short:'Tribuna 3 settori in scala 1:32 con sedute in legno, struttura metallica e cartelloni sponsor.',
    desc:'Tribuna da circuito F1 in scala 1:32 con tre settori indipendenti da 10 gradoni ciascuno. La struttura portante in acciaio verniciato grigio e i gradoni in finitura legno sono stampati separatamente e assemblati. I cartelloni pubblicitari (Firestone, Agip, Jack Daniels) sono stampati in 3D e i banner Ferrari sono applicati con decalcomanie a immersione. La base nera include il logo bandiera a scacchi. Compatibile con tracciati slot car standard in scala 1:32.',
    specs:{ Materiale:'PLA', Scala:'1:32', Finitura:'Decalcomanie', Dimensioni:'45x17x25,5 cm' }
  },
  { id:'o9', badge:'new', cat:'decorativo', ta:'ta-5',
    imgs:['img/tribuna2-f1-1.jpg','img/tribuna2-f1-2.jpg','img/trib_6.jpg'], imgfit:'cover',
    title:'Tribuna Compatta Marlboro / Gulf',
    sub:'Motorsport Collection',
    short:'Tribuna 2 settori in scala 1:32 con cartelloni Marlboro World Championship Team e Gulf.',
    desc:'Versione compatta a due settori della tribuna da circuito, in scala 1:32. Stessa costruzione della versione maggiore: struttura portante grigia, gradoni con finitura legno e base nera. I due maxi-cartelloni (Marlboro World Championship Team e Gulf) sono applicati con decalcomanie a immersione su supporto stampato separatamente. Dimensioni ridotte la rendono ideale per angoli stretti del tracciato o come complemento alla tribuna grande.',
    specs:{ Materiale:'PLA', Scala:'1:32', Finitura:'Verniciata + decalcomanie', Dimensioni:'~25x18 cm' }
  },
  { id:'o11', badge:'new', cat:'decorativo', ta:'ta-4',
    imgs:['img/orologio_space_invaders.jpg'], imgfit:'cover',
    title:'Orologio Space Invaders',
    sub:'Arcade Collection',
    short:'Orologio da parete circolare Ø 20 cm ispirato al classico arcade degli anni \'70, stampato in PLA nero e giallo.',
    desc:'Orologio da parete dal diametro di 20 cm dedicato al celebre gioco arcade Space Invaders, nato nel 1978. Il disco circolare in PLA nero ospita il pixelato alieno giallo al centro del quadrante, con i numeri 12, 3, 6 e 9 in carattere pixel-font a tutto rilievo. La scritta "SPACE INVADERS" campeggia nella metà inferiore in stile retro-gaming. Le lancette grigie completano l\'oggetto, trasformando un\'icona della cultura pop videoludica in un pezzo d\'arredo funzionale. Stampato in PLA bicolore, non richiede verniciatura aggiuntiva.',
    specs:{ Materiale:'PLA', Diametro:'20 cm', Finitura:'Bicolore nero/giallo', Tema:'Arcade anni \'70' }
  },
  { id:'o10', badge:'new', cat:'decorativo', ta:'ta-2',
    imgs:['img/barriere-1.jpg','img/barriere-2.jpg','img/barriere-3.jpg','img/barriere-4.jpg','img/barriere-5.jpg','img/barriere-6.jpg'], imgfit:'cover',
    title:'Barriere da Circuito con Reti',
    sub:'Motorsport Collection',
    short:'Set di barriere modulari in scala 1:32 con reti di protezione e livree Motul, Dunlop e Bridgestone.',
    desc:'Set modulare di barriere da bordo pista in scala 1:32, composte da una base bianca con livree sponsor e una rete di protezione stampata in PLA bianco. I moduli sono intercambiabili e componibili per coprire qualsiasi lunghezza di rettilineo o curva. Le decalcomanie riproducono le livree originali di Motul Motor Oil, Dunlop Sport e Bridgestone. Il sistema include anche moduli singoli con unico sponsor per personalizzare la composizione.',
    specs:{ Materiale:'PLA', Scala:'1:32', Dimensioni:'93x80x3,5 mm', Moduli:'6 intercambiabili' }
  },
];

const DIORAMAS = [
  { id:'d12', badge:'new', cat:'storico', imgs:['img/pullman1-1.jpg','img/pullman1-2.jpg','img/pullman1-3.jpg','img/pullman1-4.jpg','img/pullman1-5.jpg'], imgfit:'cover', landscape:true,
    title:'Autostazione anni \'70 — Binari 6 e 7',
    sub:'Diorama storico in scala 1:43',
    short:'Un terminal autobus italiano come se ne vedevano negli anni \'70. Tettoia in lamiera ondulata, due pullman d\'epoca, orologio Mondaine, manifesti d\'epoca e figuranti in scala.',
    desc:'Diorama storico in scala 1:43. Un terminal autobus italiano come se ne vedevano negli anni \'70. Sotto la tettoia in lamiera ondulata che copre i binari 6 e 7, due pullman d\'epoca si fronteggiano: il Fiat/SITA in livrea blu e gialla diretto a Salerno e il Fiat 309 Menarini bianco e azzurro. Sul marciapiede in sampietrini, un palo centrale regge l\'orologio a doppia faccia in stile Mondaine e una bacheca di manifesti d\'epoca — dal rabarbaro Zucco alle réclame del periodo. Intorno, i figuranti animano la scena: passeggeri in attesa, un viaggiatore seduto, il personale di stazione. Sotto la tettoia, una fila di LED a luce calda restituisce l\'illuminazione dei terminal di allora. Strutture e pavimentazione dipinte a mano, con weathering e invecchiamento.',
    specs:{ Scala:'1:43', Tecnica:'Stampa 3D + modelli diecast', Finitura:'Dipinto a mano + LED + weathering', Ambientazione:'Autostazione italiana, anni \'70' }
  },
  { id:'d13', badge:'new', cat:'shadow-box', imgs:['img/burano-1.jpg','img/burano-2.jpg','img/burano-3.jpg','img/burano-4.jpg'], imgfit:'contain', landscape:true,
    title:'Burano: Forme e Colori',
    sub:'Shadow Box Pop Art',
    short:'Le casette colorate di Burano reinterpretate in stile pop art e paper craft — shadow box 50×50 cm, stampa 3D.',
    desc:'Shadow box in cornice nera 50×50 cm che cattura l\'essenza cromatica di Burano, l\'isola veneziana celebre per le sue facciate dipinte con colori primari squillanti. La composizione affianca quattro case contigue — blu, giallo, verde, rosso — reinterpretate in chiave pop art e paper craft: volumi netti, palette ipersatura, dettagli stilizzati. Persiane in legno scuro, comignoli slanciati, antenne TV, cactus in vaso, tende a strisce e sedie da esterno animano la scena con la stessa vivacità pittoresca del borgo lagunare. Il cielo azzurro con nuvole sagomate a strati completa l\'effetto di profondità tipico del shadow box. Un omaggio all\'architettura popolare veneziana tradotto nel linguaggio grafico del paper craft tridimensionale.',
    specs:{ Formato:'Shadow box 50×50 cm', Tecnica:'Stampa 3D, PLA multicolore', Finitura:'Verniciato a mano', Ispirazione:'Burano, Venezia' }
  },
  { id:'d11', badge:'new', cat:'shadow-box', imgs:['img/reina_roja.jpg'], imgfit:'contain', landscape:true,
    title:'Edificio Reina — Facciata Urbana',
    sub:'Architettura in Cornice',
    short:'Facciata multipiano con Hostal Orca e pannello ornamentale — shadow box 50×50 cm, ispirazione: Felix Diaz Escauriaza.',
    desc:'Shadow box in cornice nera 50×50 cm che riproduce la facciata di un palazzo urbano spagnolo con iscrizione "EDIFICIO REINA ROJA MMXIV". Il lato sinistro restituisce l\'architettura classica del centro storico: cinque piani con persiane in legno marrone, balconi in ferro battuto, vasi fioriti e segnaletica verticale rossa dell\'Hostal Ubeda. Il coronamento superiore è scandito da una terrazza con balaustrata, vasi ornamentali e timpano in mattoni. Il lato destro costituisce un pannello decorativo autonomo: colonne bianche con cornici dorate separano specchi ornamentali ricamati con figure di animali in bordeaux scuro — gatti, uccelli, lucertole, mani — secondo il vocabolario visivo dell\'illustratore Felix Diaz Escauriaza. La composizione dialoga tra rigore architettonico e ornamento tribale, creando un oggetto al confine tra diorama e arte murale tridimensionale.',
    specs:{ Formato:'Shadow box 50×50 cm', Tecnica:'Stampa 3D, PLA di vari colori', Finitura:'Vasi con rametti veri', Ispirazione:'<a href="https://www.felixdiazescauriaza.com/#/mural-illustration/" target="_blank" rel="noopener" style="color:var(--amber);text-decoration:underline">Felix Diaz Escauriaza</a>' }
  },
  { id:'d10', badge:'new', cat:'shadow-box', imgs:['img/farmacia1.jpg'], imgfit:'contain', landscape:true,
    title:'Farmacia — Palazzo Urbano anni \'60',
    sub:'Diorama Urbano',
    short:'Facciata di palazzo italiano con farmacia al piano terra e autobus SGEA — shadow box 25×25 cm, stampa 3D dipinta a mano.',
    desc:'Diorama urbano in cornice bianca 25×25 cm che riproduce un angolo di città italiana degli anni \'60. La facciata del palazzo in intonaco ocra è scandita da persiane in legno verde scuro e cornici bianche; al piano terra campeggia l\'insegna "FARMACIA" su vetrina scura con allestimento interno visibile. Sul lato destro, balconi in ferro battuto su sei livelli ospitano vasi fioriti e piantine — dettaglio che restituisce la vivacità del quotidiano. Sulla strada, un autobus SGEA blu e bianco — modello diecast selezionato — completa la scena di quartiere. Pittura a mano con washing su intonaco, dry-brushing sulle persiane e invecchiamento delle facciate con polveri pigmentate.',
    specs:{ Formato:'Shadow box 25×25 cm', Tecnica:'FDM + modello diecast', Finitura:'Dipinto a mano + weathering', Ambientazione:'Città italiana, anni \'60' }
  },
  { id:'d5', badge:'new', cat:'shadow-box', imgs:['img/venezia-1.jpg'], imgfit:'contain', landscape:true,
    title:'Palazzo Veneziano con Motoscafo',
    sub:'Diorama Veneziano',
    short:'Quadretto in cornice: facciata veneziana e motoscafo in latta anni \'50 — stampa 3D dipinta e modificata a mano.',
    desc:'Diorama a cornice che riproduce la facciata di un palazzo veneziano affacciato sul canale. La struttura è stampata in 3D con dettagli architettonici accurati: finestre con persiane, balconi in ferro battuto, portale ad arco con lunetta decorativa e rivestimento in mattoni con effetto intonaco invecchiato. Il motoscafo in latta degli anni \'50 — pezzo vintage selezionato e integrato nella composizione — galleggia sull\'acqua del rio realizzata in resina. Le bricole in legno completano l\'ambientazione lagunare. Pittura a mano con tecniche di washing e dry-brushing per restituire il caratteristico degrado elegante dell\'architettura veneziana.',
    specs:{ Formato:'Quadretto 30×30 cm', Tecnica:'FDM + Latta vintage', Finitura:'Dipinto a mano + weathering', Ambientazione:'Venezia, anni \'50' }
  },
  { id:'d7', badge:'new', cat:'storico', imgs:['img/strada-1.jpg','img/strada-2.jpg'], imgfit:'contain', landscape:true,
    title:'Casa della Gomma — Borgo anni \'60',
    sub:'Diorama Stradale',
    short:'Angolo di paese toscano in scala: pneumatici Pirelli e Michelin, sei auto d\'epoca e sfondo collinare dipinto a mano.',
    desc:'Diorama stradale che riproduce un angolo di borgo italiano degli anni \'60. La "Casa della Gomma" campeggia con le insegne Pirelli, Michelin, Gulf, Castrol, Texaco e Champion. Sul selciato sfilano sei modelli in scala: Fiat 600 celeste, Fiat 850 Spider bianca, spider bordeaux, berlina grigia, Renault Dauphine blu e il furgone Fiat 238 giallo con livrea a strisce. Lo sfondo riproduce la campagna toscana con cipressi, casolare e strade bianche. Sul lato, un manifesto elettorale del PCI e una bacheca con avvisi di paese completano l\'atmosfera d\'epoca. Albero in resina e panchine in legno arredano il marciapiede in sampietrini.',
    specs:{ Formato:'Diorama stradale', Tecnica:'FDM + modelli diecast', Finitura:'Dipinto a mano + weathering', Ambientazione:'Borgo toscano, anni \'60' }
  },
  { id:'d9', badge:'new', cat:'shadow-box', imgs:['img/calciobalilla-1.jpeg'], imgfit:'contain', landscape:true,
    title:'Calciatori da Balilla — Shadow Box anni \'40',
    sub:'Quadretto da Collezione',
    short:'Tre figurine lignee da calcio balilla anni \'40 su campo da gioco stampato — cornice 23×28 cm con vetro.',
    desc:'Shadow box in cornice nera 23×28 cm che valorizza tre figurine originali da calcio balilla degli anni \'40. Le statuette in legno intagliato e dipinto a mano — due giocatori in maglia a strisce bianche e nere e uno in maglia rossa, tutti con pantaloncini scuri e calzettoni — sono montate sulla barra metallica originale con i giunti a vite d\'epoca. Il pallone in resina completa la scena. Lo sfondo riproduce grafica di un campo da calcio con linee d\'area su fondo verde, creando profondità e contesto sportivo. Tecnica mista: oggetti vintage originali su stampa fotografica incorniciata.',
    specs:{ Formato:'Cornice 23×28 cm', Tecnica:'Figurine vintage + sfondo stampato', Finitura:'Shadow box con vetro', Ambientazione:'Campo da calcio, anni \'40' }
  },
  { id:'d8', badge:'new', cat:'shadow-box', imgs:['img/fantino-1.png'], imgfit:'contain', landscape:true,
    title:'Il Fantino Dick — Shadow Box anni \'50',
    sub:'Quadretto da Collezione',
    short:'Giocattolo in latta anni \'50 su fotografia vintage in cornice A4 — cavallo e fantino "Dick" in livrea gialla su ippodromo in bianco e nero.',
    desc:'Shadow box in cornice nera formato A4 (21×29.7 cm) che unisce un oggetto d\'epoca a una fotografia storica. Il cavallo con fantino in livrea gialla — un giocattolo in latta degli anni \'50 con il nome "Dick" impresso sul fianco — è montato in rilievo davanti a una fotografia d\'archivio in bianco e nero che ritrae un ippodromo anni \'30 affollato di spettatori. Il contrasto tra il colore vivace del giocattolo e la fotografia in scala di grigi crea una composizione sospesa nel tempo. Tecnica mista: oggetto vintage originale su stampa fotografica in vetrina con profondità.',
    specs:{ Formato:'Cornice A4 — 21×29.7 cm', Tecnica:'Oggetto vintage + fotografia d\'archivio', Finitura:'Shadow box con vetro', Ambientazione:'Ippodromo, anni \'30–\'50' }
  },
  { id:'d6', badge:'new', cat:'storico', imgs:['img/autosalone-fiat-1.jpg'], imgfit:'contain', landscape:true,
    title:'Autosalone Fiat anni \'80',
    sub:'Diorama Automobilistico',
    short:'Concessionaria Fiat in miniatura: quattro modelli iconici in vetrina — Panda, 127, 1300 e Ferrari 456 — con insegna luminosa e manifesti d\'epoca.',
    desc:'Diorama architettonico che riproduce un autosalone Fiat degli anni \'80 in piena attività. La facciata a vetrine con insegna "F|I|A|T" e scritta "AUTOSALONE" inquadra un interno accuratamente allestito: quattro modelli in scala — Fiat Panda azzurra, Fiat 127 gialla, berlina anni \'60 bianca e Ferrari 456 verde scuro — su pavimento in cemento levigato. Le pareti ospitano manifesti pubblicitari originali: Fiat 500, Fiat Panda, Fiat 127 e una locandina del Gran Premio di Monaco. Scrivania verde con sedute rosse per l\'accoglienza clienti. Serranda rossa sul fondo e illuminazione al neon completano l\'atmosfera della concessionaria d\'epoca.',
    specs:{ Formato:'Diorama panoramico', Tecnica:'FDM + modelli diecast', Finitura:'Dipinto a mano + manifesti stampati', Ambientazione:'Concessionaria Fiat, anni \'80' }
  },
];

const ALL_ITEMS = [...OBJECTS, ...DIORAMAS];

/* ── Active filters ── */
let activeFilter = { objects:'all', dioramas:'all' };

/* ── Mobile nav ── */
function toggleMobileNav() {
  const nav = document.getElementById('mobileNav');
  const btn = document.getElementById('hamburgerBtn');
  nav.classList.toggle('open');
  btn.classList.toggle('open');
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
}
function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('hamburgerBtn').classList.remove('open');
  document.body.style.overflow = '';
}
function mobileGo(id) {
  closeMobileNav();
  showPage(id);
}
function mobileFilter(section, cat) {
  closeMobileNav();
  filterAndShow(section, cat);
}

/* ── Page nav ── */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
  const el = document.getElementById('nav-' + id);
  if (el) el.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterAndShow(section, cat) {
  activeFilter[section] = cat;
  showPage(section);
  // update pills
  const container = section === 'objects' ? document.getElementById('obj-filters') : document.getElementById('dio-filters');
  container.querySelectorAll('.filter-pill').forEach(p => {
    const pCat = p.getAttribute('onclick').match(/'([^']+)'\)$/)[1];
    p.classList.toggle('active', pCat === cat);
  });
  renderGrid(section);
}

/* ── Card renderer ── */
function badgeHTML(badge) {
  if (!badge) return '';
  const map = { new:'badge-new', featured:'badge-featured', soon:'badge-soon' };
  const labels = { new:'Nuovo', featured:'In Evidenza', soon:'Prossimamente' };
  return `<div class="card-badge ${map[badge]}">${labels[badge]}</div>`;
}

function renderCard(item) {
  const scalaTag = item.specs && item.specs.Scala ? ` in scala ${item.specs.Scala}` : '';
  const altText  = `${item.title}${scalaTag} — ${item.sub || 'stampa 3D'} — MC3D Studio`;
  const thumb = item.imgs
    ? `<img src="${item.imgs[0]}" alt="${altText}" loading="lazy" style="height:100%;object-fit:${item.imgfit||'cover'};${item.imgfit==='contain'?`background:${item.imgbg||'#ffffff'};padding:8px`:''}">`
    : `<div class="thumb-art ${item.ta}" style="height:100%"><div class="ta-icon">${item.ta&&(item.ta.includes('ta-7')||item.ta.includes('ta-8')||item.ta.includes('ta-9')||item.ta.includes('ta-10')) ? '▦' : '3D'}</div></div>`;
  return `
    <div class="product-card" onclick="openItemById('${item.id}')">
      <div class="card-image">
        ${badgeHTML(item.badge)}
        ${thumb}
      </div>
      <div class="card-body">
        <div class="card-series">${item.sub}</div>
        <div class="card-title">${item.title}</div>
        <div class="card-sub">${item.short}</div>
        <div class="card-meta">
          <span class="chip">${item.cat}</span>
          <span class="chip">${Object.values(item.specs)[0]}</span>
        </div>
      </div>
    </div>`;
}

function renderGrid(section) {
  const data   = section === 'objects' ? OBJECTS : DIORAMAS;
  const filter = activeFilter[section];
  const items  = filter === 'all' ? data : data.filter(i => i.cat === filter);
  document.getElementById(section + '-grid').innerHTML = items.map(renderCard).join('');
  const countEl = document.getElementById(section === 'objects' ? 'obj-count' : 'dio-count');
  if (countEl) countEl.textContent = items.length + ' ' + (items.length === 1 ? 'modello' : 'modelli');
}

function filterCards(btn, section, cat) {
  activeFilter[section] = cat;
  btn.closest('.filter-group').querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  renderGrid(section);
}

/* Home previews — show 4 items each */
function renderHomePreviews() {
  document.getElementById('home-objects').innerHTML   = OBJECTS.slice(0,4).map(renderCard).join('');
  document.getElementById('home-dioramas').innerHTML  = DIORAMAS.slice(0,4).map(renderCard).join('');
}

/* ── Modal ── */
function openModal(item) {
  document.getElementById('modal-cat').textContent   = item.sub;
  document.getElementById('modal-title').textContent = item.title;
  document.getElementById('modal-sub').textContent   = item.cat.charAt(0).toUpperCase() + item.cat.slice(1);
  document.getElementById('modal-desc').textContent  = item.desc;

  const wrap = document.getElementById('modal-img-wrap');
  if (item.imgs && item.imgs.length) {
    const isFit = item.imgfit === 'contain' && !item.landscape;
    const isDark = item.landscape;
    const galleryBg = isFit ? `background:${item.imgbg||'#ffffff'};` : '';
    wrap.innerHTML = `
      <div class="modal-gallery" id="mgallery" style="${galleryBg}" onclick="(function(){var a=document.querySelector('#mgallery img.active');if(a)openZoom(a.src,a.alt)})()">
        ${item.imgs.map((src,i) => `<img src="${src}" class="${i===0?'active':''} ${isDark?'bg-dark':''}" style="${isFit?'object-fit:contain;':''}" alt="${item.title} ${i+1}">`).join('')}
      </div>
      ${item.imgs.length > 1 ? `<div class="modal-thumbs">
        ${item.imgs.map((src,i) => `<div class="modal-thumb ${i===0?'active':''} ${isDark?'bg-dark':''}" style="${isFit?`background:${item.imgbg||'#ffffff'};`:''}" onclick="gallerySel(${i})"><img src="${src}" style="${isFit?'object-fit:contain;':''}" alt=""></div>`).join('')}
      </div>` : ''}`;
  } else {
    const ta = item.ta || 'ta-1';
    const icon = ta.match(/ta-(7|8|9|10)$/) ? '▦' : '3D';
    wrap.innerHTML = `<div class="thumb-art ${ta}" style="height:100%"><div class="ta-icon" style="font-size:64px">${icon}</div></div>`;
  }

  document.getElementById('modal-specs').innerHTML = Object.entries(item.specs).map(([k,v]) => `
    <div class="spec-box">
      <div class="spec-label">${k}</div>
      <div class="spec-val">${v}</div>
    </div>`).join('');
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';

  /* JSON-LD CreativeWork per il pezzo aperto */
  let ld = document.getElementById('modal-jsonld');
  if (!ld) { ld = document.createElement('script'); ld.type='application/ld+json'; ld.id='modal-jsonld'; document.head.appendChild(ld); }
  ld.textContent = JSON.stringify({
    '@context':'https://schema.org',
    '@type':'CreativeWork',
    'name': item.title,
    'description': item.desc,
    'creator': { '@type':'Organization', 'name':'MC3D Studio' },
    'image': item.imgs ? item.imgs.map(s => 'https://www.studiomc3d.it/' + s) : [],
    'material': item.specs?.Materiale || 'PLA'
  });
}

function gallerySel(idx) {
  document.querySelectorAll('#mgallery img').forEach((img,i) => img.classList.toggle('active', i===idx));
  document.querySelectorAll('.modal-thumbs .modal-thumb').forEach((t,i) => t.classList.toggle('active', i===idx));
}

function openItemById(id) {
  const item = ALL_ITEMS.find(i => i.id === id);
  if (item) openModal(item);
}

function handleModalClick(e) { if (e.target === document.getElementById('modal')) closeModal(); }
function closeModal() {
  const m = document.getElementById('modal');
  if (m) m.classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });


/* ── Contact form ── */
async function handleSubmit(e) {
  e.preventDefault();
  const btn  = e.target.querySelector('.btn-gold');
  const ok   = document.getElementById('formOk');
  const err  = document.getElementById('formErr');
  ok.style.display = 'none';
  err.style.display = 'none';
  btn.textContent = 'Invio in corso…'; btn.disabled = true;
  try {
    const res = await fetch('https://formspree.io/f/xlgvqerd', {
      method: 'POST',
      body: new FormData(e.target),
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      ok.style.display = 'block';
      e.target.reset();
    } else {
      err.style.display = 'block';
    }
  } catch (_) {
    err.style.display = 'block';
  }
  btn.textContent = 'Invia Messaggio'; btn.disabled = false;
}

/* ── Zoom Lightbox ── */
(function () {
  let zScale = 1, zTx = 0, zTy = 0;
  let zDrag = false, zLastX = 0, zLastY = 0;
  const MIN_S = 1, MAX_S = 6;

  const zOverlay = document.getElementById('zoomOverlay');
  const zImg     = document.getElementById('zoomImg');
  const zBadge   = document.getElementById('zoomScaleBadge');
  const zClose   = document.getElementById('zoomCloseBtn');

  if (!zOverlay || !zImg || !zBadge || !zClose) return;

  function zApply() {
    zImg.style.transform = `translate(${zTx}px,${zTy}px) scale(${zScale})`;
    zBadge.textContent   = zScale.toFixed(1) + '×';
  }
  function zClamp() {
    if (zScale <= MIN_S) { zTx = 0; zTy = 0; return; }
    const mX = window.innerWidth  * (zScale - 1) / 2;
    const mY = window.innerHeight * (zScale - 1) / 2;
    zTx = Math.max(-mX, Math.min(mX, zTx));
    zTy = Math.max(-mY, Math.min(mY, zTy));
  }

  window.openZoom = function (src, alt) {
    zImg.src = src; zImg.alt = alt || '';
    zScale = 1; zTx = 0; zTy = 0;
    zApply();
    zOverlay.classList.add('open');
  };
  function closeZoom() { zOverlay.classList.remove('open'); }
  window.closeZoom = closeZoom;

  zClose.addEventListener('click', e => { e.stopPropagation(); closeZoom(); });
  zOverlay.addEventListener('click', e => { if (e.target === zOverlay) closeZoom(); });

  /* Rotella: zoom */
  zOverlay.addEventListener('wheel', e => {
    e.preventDefault();
    zScale = Math.min(MAX_S, Math.max(MIN_S, zScale * (e.deltaY > 0 ? 0.85 : 1.18)));
    zClamp(); zApply();
  }, { passive: false });

  /* Mouse drag */
  zOverlay.addEventListener('mousedown', e => {
    if (zClose.contains(e.target)) return;
    if (zScale > 1) { zDrag = true; zLastX = e.clientX; zLastY = e.clientY; zImg.classList.add('dragging'); }
  });
  window.addEventListener('mousemove', e => {
    if (!zDrag) return;
    zTx += e.clientX - zLastX; zTy += e.clientY - zLastY;
    zLastX = e.clientX; zLastY = e.clientY;
    zClamp(); zApply();
  });
  window.addEventListener('mouseup', () => { zDrag = false; zImg.classList.remove('dragging'); });

  /* Doppio clic: zoom 2.5× / reset */
  zImg.addEventListener('dblclick', () => {
    zScale = zScale < 2 ? 2.5 : MIN_S;
    if (zScale === MIN_S) { zTx = 0; zTy = 0; } else zClamp();
    zApply();
  });

  /* Touch: drag + pinch */
  let tPinch0 = 0, tScale0 = 1, tX0 = 0, tY0 = 0, tTx0 = 0, tTy0 = 0;
  zOverlay.addEventListener('touchstart', e => {
    const t = e.touches;
    if (t.length === 2) {
      tPinch0 = Math.hypot(t[1].clientX - t[0].clientX, t[1].clientY - t[0].clientY);
      tScale0 = zScale;
    } else {
      tX0 = t[0].clientX; tY0 = t[0].clientY; tTx0 = zTx; tTy0 = zTy;
    }
  }, { passive: true });
  zOverlay.addEventListener('touchmove', e => {
    e.preventDefault();
    const t = e.touches;
    if (t.length === 2) {
      const d = Math.hypot(t[1].clientX - t[0].clientX, t[1].clientY - t[0].clientY);
      zScale = Math.min(MAX_S, Math.max(MIN_S, tScale0 * d / tPinch0));
    } else if (t.length === 1 && zScale > 1) {
      zTx = tTx0 + t[0].clientX - tX0;
      zTy = tTy0 + t[0].clientY - tY0;
    }
    zClamp(); zApply();
  }, { passive: false });

  /* ESC chiude lo zoom prima del modal (capture phase) */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && zOverlay.classList.contains('open')) {
      closeZoom(); e.stopPropagation();
    }
  }, true);
})();

/* ── Init ── */
renderGrid('objects');
renderGrid('dioramas');
renderHomePreviews();

/* ── URL-based page & filter init ── */
(function () {
  /* Imposta link attivo nav in base all'URL */
  const path = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
  if      (path.includes('oggetti-design') || path.includes('modellismo')) document.getElementById('nav-objects')?.classList.add('active');
  else if (path.includes('diorami'))   document.getElementById('nav-dioramas')?.classList.add('active');
  else if (path.includes('contatti'))  document.getElementById('nav-contact')?.classList.add('active');
  else if (path.includes('processo'))  document.getElementById('nav-processo')?.classList.add('active');
  else                                 document.getElementById('nav-home')?.classList.add('active');

  /* Naviga alla sezione iniziale se specificata */
  if (window.__initialPage && window.__initialPage !== 'home') {
    showPage(window.__initialPage);
  }
  if (window.__initialFilter) {
    Object.entries(window.__initialFilter).forEach(([sec, cat]) => {
      activeFilter[sec] = cat;
      renderGrid(sec);
      const container = sec === 'objects' ? document.getElementById('obj-filters') : document.getElementById('dio-filters');
      container?.querySelectorAll('.filter-pill').forEach(p => {
        const m = p.getAttribute('onclick')?.match(/'([^']+)'\)$/);
        if (m) p.classList.toggle('active', m[1] === cat);
      });
    });
  }

  /* Copyright anno dinamico */
  document.querySelectorAll('.copyright-year').forEach(el => { el.textContent = new Date().getFullYear(); });
})();

/* ══════════════════════════════════════
   WOW EFFECTS — loader, cursor, reveal, particles
══════════════════════════════════════ */

/* ── Page Loader ── */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('pageLoader').classList.add('hidden');
  }, 1100);
});


/* ── Scroll Reveal ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

function initReveal() {
  /* Section heads */
  document.querySelectorAll('.section-head').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
  /* Card grids — stagger */
  document.querySelectorAll('.product-card, .dual-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (0.08 * (i % 4)) + 's';
    revealObserver.observe(el);
  });
  /* Banner strip */
  document.querySelectorAll('.banner-strip, .dual-banner').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
  /* Stats + process strips */
  document.querySelectorAll('.stats-strip, .process-strip').forEach(el => {
    revealObserver.observe(el);
  });
}
/* Esegui dopo che le grid sono renderizzate */
setTimeout(initReveal, 200);

/* ── Particles Hero ── */
const canvas = document.getElementById('heroCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resizeCanvas() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const COLORS = ['rgba(200,136,42,', 'rgba(232,170,74,', 'rgba(248,220,140,'];
  for (let i = 0; i < 55; i++) {
    particles.push({
      x: Math.random() * (typeof W !== 'undefined' ? W : 1400),
      y: Math.random() * (typeof H !== 'undefined' ? H : 700),
      r: Math.random() * 1.8 + 0.4,
      dx: (Math.random() - 0.5) * 0.3,
      dy: -(Math.random() * 0.4 + 0.15),
      alpha: Math.random() * 0.5 + 0.15,
      color: COLORS[Math.floor(Math.random() * COLORS.length)]
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ')';
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.y < -4) { p.y = H + 4; p.x = Math.random() * W; }
      if (p.x < -4) p.x = W + 4;
      if (p.x > W + 4) p.x = -4;
    });
    requestAnimationFrame(drawParticles);
  }
  drawParticles();
}

/* ── Hero Parallax leggero ── */
const heroSlider = document.getElementById('heroSlider');
if (heroSlider && window.matchMedia('(pointer:fine)').matches) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroSlider.querySelectorAll('.slide-bg img').forEach(img => {
      img.style.transform = `scale(1.05) translateY(${y * 0.18}px)`;
    });
  }, { passive: true });
}
