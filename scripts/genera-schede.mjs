// Genera una pagina per ogni scheda: /oggetti-design/<slug>/ e /diorami/<slug>/
// Ogni pagina è una copia della pagina di sezione con titolo, descrizione e
// anteprima social della scheda, e apre subito il dettaglio.
// Aggiorna anche sitemap.xml.
//
// Da rilanciare ogni volta che si aggiunge o modifica una scheda in assets/app.js:
//   node scripts/genera-schede.mjs

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://www.studiomc3d.it';
const MARKER = '<!-- scheda generata da scripts/genera-schede.mjs: non modificare a mano -->';

// ── Legge OBJECTS e DIORAMAS da assets/app.js ──
const app = fs.readFileSync(path.join(ROOT, 'assets/app.js'), 'utf8');
const start = app.indexOf('const OBJECTS');
const end = app.indexOf('const ALL_ITEMS');
if (start < 0 || end < 0) throw new Error('OBJECTS / ALL_ITEMS non trovati in assets/app.js');
const ctx = {};
vm.runInNewContext(app.slice(start, end) + '\nthis.OBJECTS = OBJECTS; this.DIORAMAS = DIORAMAS;', ctx);

const sections = [
  { dir: 'oggetti-design', items: ctx.OBJECTS },
  { dir: 'diorami',        items: ctx.DIORAMAS },
];

const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const setMeta = (html, re, value) => {
  if (!re.test(html)) throw new Error('Meta non trovato: ' + re);
  return html.replace(re, (_m, a, b) => a + value + b);
};

const seen = new Set();
const sitemapUrls = [];

for (const { dir, items } of sections) {
  const tplPath = path.join(ROOT, dir, 'index.html');
  const tpl = fs.readFileSync(tplPath, 'utf8');
  const sectionTitle = tpl.match(/<title>([^<]*)<\/title>/)[1];

  // Rimuove le pagine generate in precedenza (anche di schede eliminate)
  for (const d of fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true })) {
    const f = path.join(ROOT, dir, d.name, 'index.html');
    if (d.isDirectory() && fs.existsSync(f) && fs.readFileSync(f, 'utf8').includes(MARKER)) {
      fs.rmSync(path.join(ROOT, dir, d.name), { recursive: true });
    }
  }

  for (const item of items) {
    if (!item.slug) throw new Error(`La scheda ${item.id} non ha lo slug`);
    if (seen.has(item.slug)) throw new Error(`Slug duplicato: ${item.slug}`);
    seen.add(item.slug);

    const url = `${SITE}/${dir}/${item.slug}/`;
    const title = `${item.title} — MC3D Studio`;
    const desc = item.short;
    const img = item.imgs && item.imgs.length ? `${SITE}/${item.imgs[0]}` : null;

    let html = tpl;
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
    html = setMeta(html, /(<meta name="description" content=")[^"]*(")/, esc(desc));
    html = setMeta(html, /(<link rel="canonical" href=")[^"]*(")/, url);
    html = setMeta(html, /(<meta property="og:type"\s+content=")[^"]*(")/, 'article');
    html = setMeta(html, /(<meta property="og:url"\s+content=")[^"]*(")/, url);
    html = setMeta(html, /(<meta property="og:title"\s+content=")[^"]*(")/, esc(title));
    html = setMeta(html, /(<meta property="og:description"\s+content=")[^"]*(")/, esc(desc));
    if (img) html = setMeta(html, /(<meta property="og:image"\s+content=")[^"]*(")/, img);

    const boot = `<script>window.__openItem = ${JSON.stringify(item.id)}; window.__sectionTitle = ${JSON.stringify(sectionTitle)};</script>`;
    if (!/<script>\s*window\.__initialPage/.test(html)) throw new Error(`__initialPage non trovato in ${dir}/index.html`);
    html = html.replace(/(<script>\s*window\.__initialPage)/, `${MARKER}\n${boot}\n$1`);

    const outDir = path.join(ROOT, dir, item.slug);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    sitemapUrls.push(url);
  }
}

// ── sitemap.xml: le pagine di sezione restano, le schede vengono rigenerate ──
const smPath = path.join(ROOT, 'sitemap.xml');
let sm = fs.readFileSync(smPath, 'utf8');
sm = sm.replace(/\s*<!-- schede -->[\s\S]*?<!-- \/schede -->/, '');
const block = sitemapUrls.map(u => `  <url>\n    <loc>${u}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`).join('\n');
sm = sm.replace('</urlset>', `  <!-- schede -->\n${block}\n  <!-- /schede -->\n</urlset>`);
fs.writeFileSync(smPath, sm);

console.log(`${sitemapUrls.length} pagine scheda generate:`);
sitemapUrls.forEach(u => console.log('  ' + u));
