"""Regenerates every page. Edit the CONFIG block, then run: python3 build.py"""
import json, html
from pathlib import Path

R = Path(__file__).parent
M = json.loads((R / 'assets/img/images.json').read_text())

# ---------- CONFIG: edit these ----------
NAME = 'Vhenj Kirby Solas'
SITE = 'https://vhenjkirbysolas.com'   # check the domain is available before buying
GSC = ''                               # Google Search Console verification code (content of the meta tag)
HOME_T = f'{NAME} | Developer & Graphic Designer'
DESC = ('Explore the portfolio of Vhenj Kirby Solas, a Software Engineering student, web developer, '
        'fashion designer, and graphic designer showcasing software projects, digital products, and creative design work.')
CONTACT = {'Email': '', 'GitHub': '', 'LinkedIn': ''}   # full https:// links, or an email address
DETAILS = [('Education', ''), ('Skills', ''), ('Location', '')]  # leave '' to show a placeholder
CLAIM = ''   # optional line for the clothing page, e.g. a verified number of customers
# -----------------------------------------

ALT = {
 'catleya-login': 'Catleya login screen with a yellow notebook illustration and a dark sign-in form',
 'catleya-planner': 'Catleya weekly planner with sticky notes pinned to days on a brick wall',
 'ktindahan-login': 'K-Tindahan login screen with username and PIN fields',
 'ktindahan-dashboard': "K-Tindahan dashboard with today's sales, transactions, items sold and top products",
 'robuy': 'RoBuy brand set in black and gold: round logo, banner and profile art',
 'db': 'DB hexagon logo in blue and gold next to a developer marketplace banner',
 'dudrs-casino': 'Dudrs Casino logo in yellow and red lettering on a red carpet',
 'misea-shop': 'Misea Shop logo in purple with shopping carts and coins',
 'rituals-icon': 'Chrome gothic lettering logo on a dark background with gears',
 'zentra-banner': 'Zentra banner in blue with payment and crypto icons',
 'zentra-icon': 'Zentra profile icon in blue',
 'rituals-banner': 'Rituals Exploits banner in chrome gothic lettering',
 'dess-banner': 'Dess Middleman Service banner in pink with cherry blossoms',
 'sss-studios': 'SSS Studios round logo in cyan on a floating island',
 'bloxy-fruit-icon': 'Bloxy Fruit square icon with 3D lettering and fruit crates',
 'bloxy-fruit-banner': 'Bloxy Fruit banner with 3D lettering under a tree',
 'stocked': 'Stocked logo in red with a slot-machine style background',
 'hoodie-yolo': 'Black zip-up hoodie, front and back, with an all-over Seattle and YOLO print',
 'hoodie-camo': 'Camouflage zip-up hoodie, front and back, with a printed portrait on the back',
 'hoodie-red': 'Washed red hoodie, front and back, with a skull and scythe print',
}
GRAPHICS = [('robuy', 'RoBuy', 'Brand set'), ('db', 'DB', 'Logo and banner'), ('zentra-banner', 'Zentra', 'Banner'),
 ('zentra-icon', 'Zentra', 'Icon'), ('dudrs-casino', 'Dudrs Casino', 'Logo'), ('misea-shop', 'Misea Shop', 'Logo'),
 ('rituals-banner', 'Rituals Exploits', 'Banner'), ('rituals-icon', 'Rituals Exploits', 'Icon'),
 ('dess-banner', 'Dess Middleman Service', 'Banner'), ('sss-studios', 'SSS Studios', 'Logo'),
 ('bloxy-fruit-icon', 'Bloxy Fruit', 'Icon'), ('bloxy-fruit-banner', 'Bloxy Fruit', 'Banner'), ('stocked', 'Stocked', 'Logo')]
CLOTHES = [('hoodie-yolo', 'Seattle YOLO zip-up', 'All-over print, front and back'),
 ('hoodie-camo', 'Camo zip-up', 'Chest crest and back print'),
 ('hoodie-red', 'Washed red hoodie', 'Skull and scythe front print')]
WORK = [('/projects/catleya', 'Catleya', 'An educational productivity platform featuring notebooks, file organization, schedules, and planners.', 'catleya-planner'),
 ('/projects/k-tindahan', 'K-Tindahan', 'A store management application concept focused on inventory, sales recording, reporting, and cashier management.', 'ktindahan-dashboard'),
 ('/graphic-design', 'Graphic design portfolio', 'A collection of branding, logo designs, posters, digital graphics, UI/UX work, and other creative projects.', 'robuy'),
 ('/clothing-designs', 'Clothing designs', 'A collection of my clothing designs.' + (' ' + CLAIM if CLAIM else ''), 'hoodie-yolo')]
NAV = [('/', 'Home'), ('/projects/catleya', 'Catleya'), ('/projects/k-tindahan', 'K-Tindahan'),
       ('/graphic-design', 'Graphic design'), ('/clothing-designs', 'Clothing'), ('/#about', 'About'), ('/#contact', 'Contact')]

e = html.escape
def ph(t): return f'<span class="ph">[{e(t)}]</span>'
def img(k, eager=False, cls=''):
    w, h = M[k]
    return f'<img src="/assets/img/{k}.webp" alt="{e(ALT[k])}" width="{w}" height="{h}" class="{cls}"{"" if eager else " loading=lazy"} decoding=async>'
def fig(k, t, s):
    return f'<figure>{img(k)}<figcaption><b>{e(t)}</b> {e(s)}</figcaption></figure>'

CSS = """
:root{--ink:#15122b;--paper:#f5f3fb;--gold:#ffc72c;--mag:#c4006a;--line:#d9d4ec;color-scheme:light}
*{box-sizing:border-box}html{scroll-behavior:smooth}
body{margin:0;background:var(--paper);color:var(--ink);font:1.05rem/1.65 Figtree,system-ui,sans-serif}
h1,h2,h3{font-family:'Bricolage Grotesque',Figtree,system-ui,sans-serif;line-height:1.02;letter-spacing:-.03em;margin:0 0 .5em}
h1{font-size:clamp(3.2rem,12vw,9.5rem);font-weight:800}h2{font-size:clamp(2rem,5vw,3.4rem);font-weight:700}h3{font-size:1.5rem}
a{color:var(--mag)}img{max-width:100%;height:auto;display:block}
:focus-visible{outline:3px solid var(--mag);outline-offset:3px}
.skip{position:absolute;left:-999px;background:var(--gold);padding:.6rem 1rem;z-index:9}.skip:focus{left:1rem;top:1rem}
.wrap{width:min(1180px,100% - 2.5rem);margin-inline:auto}
header.top{border-bottom:2px solid var(--ink)}header.top .wrap{display:flex;flex-wrap:wrap;gap:.5rem 1.5rem;align-items:center;justify-content:space-between;padding:1rem 0}
.brand{font:800 1.25rem 'Bricolage Grotesque',sans-serif;color:var(--ink);text-decoration:none;letter-spacing:-.02em}
nav{display:flex;flex-wrap:wrap;gap:.2rem 1.2rem}nav a{color:var(--ink);text-decoration:none;font-weight:600;font-size:.95rem;padding:.25rem 0;border-bottom:3px solid transparent}
nav a:hover,nav a[aria-current]{border-color:var(--gold)}
.hero{display:grid;grid-template-columns:1.1fr .9fr;gap:3rem;align-items:center;padding:4rem 0 5rem}
.tag{font:700 clamp(1.3rem,2.6vw,1.9rem)/1.2 'Bricolage Grotesque',sans-serif;margin:1.5rem 0 1rem}.lead{max-width:60ch;font-size:1.15rem}
.btns{display:flex;flex-wrap:wrap;gap:.8rem;margin-top:1.8rem}
.btn{display:inline-block;padding:.85rem 1.4rem;border:2px solid var(--ink);border-radius:.4rem;font-weight:700;text-decoration:none;color:var(--ink);box-shadow:4px 4px 0 var(--ink)}
.btn.gold{background:var(--gold)}.btn:hover{transform:translate(2px,2px);box-shadow:2px 2px 0 var(--ink)}
.collage{position:relative;background:var(--gold);border:2px solid var(--ink);border-radius:.6rem;padding:2rem;display:grid;gap:1.2rem}
.collage img{border:2px solid var(--ink);border-radius:.4rem;box-shadow:5px 5px 0 var(--ink)}
.collage img:nth-child(1){transform:rotate(-2deg)}.collage img:nth-child(2){transform:rotate(1.5deg);margin-left:12%}.collage img:nth-child(3){transform:rotate(-1deg);width:70%}
section.block{padding:4.5rem 0;border-top:2px solid var(--ink)}
.row{display:grid;grid-template-columns:1fr 1fr;gap:2.5rem;align-items:center;margin-top:3rem}
.row:nth-child(even) .pic{order:2}.row .pic img{border:2px solid var(--ink);border-radius:.5rem;box-shadow:6px 6px 0 var(--ink)}
.about{display:grid;grid-template-columns:1fr 1fr;gap:3rem}dl{margin:0}dt{font-weight:700;margin-top:1rem}dd{margin:0}
.ph{background:#fff3c4;border:1px dashed var(--ink);padding:0 .35rem;border-radius:.25rem;font-size:.95em}
.contact{list-style:none;padding:0;margin:0}.contact li{padding:.7rem 0;border-bottom:1px solid var(--line)}.contact b{display:inline-block;min-width:6rem}
.page-head{padding:3.5rem 0 1.5rem}.page-head h1{font-size:clamp(2.6rem,8vw,6rem)}.crumb{font-size:.95rem;margin-bottom:1rem}
.facts{display:grid;grid-template-columns:repeat(auto-fit,minmax(14rem,1fr));gap:1rem;margin:2rem 0}.facts div{border:2px solid var(--ink);border-radius:.4rem;padding:1rem;background:#fff}
.shots{display:grid;gap:2rem;margin:2rem 0 4rem}.shots img{border:2px solid var(--ink);border-radius:.5rem}
.gallery{columns:3 260px;column-gap:1.5rem;padding-bottom:4rem}.gallery figure{break-inside:avoid;margin:0 0 1.5rem}
.gallery img,.wide img{width:100%;border:2px solid var(--ink);border-radius:.5rem;background:#fff}
figcaption{padding-top:.4rem;font-size:.95rem}.wide{display:grid;gap:2rem;padding-bottom:4rem}.wide figure{margin:0}
.more{display:flex;flex-wrap:wrap;gap:1rem;padding:2rem 0 4rem}
footer{background:var(--ink);color:var(--paper);padding:2.5rem 0}footer a{color:var(--gold)}footer p{margin:.3rem 0}
@media(max-width:820px){.hero,.row,.about{grid-template-columns:1fr}.row:nth-child(even) .pic{order:0}.hero{padding-top:2.5rem}}
@media(prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}}
"""

def page(path, title, desc, main, ld=()):
    url = SITE + ('' if path == '/' else path)
    nav = ''.join(f'<a href="{p}"{" aria-current=page" if p == path else ""}>{t}</a>' for p, t in NAV)
    g = f'<meta name="google-site-verification" content="{e(GSC)}">' if GSC else ''
    ldj = ''.join(f'<script type="application/ld+json">{json.dumps(x)}</script>' for x in ld)
    out = f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{e(title)}</title><meta name="description" content="{e(desc)}"><link rel="canonical" href="{url}">
<meta name="author" content="{NAME}"><meta name="robots" content="index,follow,max-image-preview:large">{g}
<meta property="og:type" content="website"><meta property="og:site_name" content="{NAME}"><meta property="og:title" content="{e(title)}">
<meta property="og:description" content="{e(desc)}"><meta property="og:url" content="{url}"><meta property="og:image" content="{SITE}/assets/img/og.png">
<meta name="twitter:card" content="summary_large_image"><meta name="theme-color" content="#15122b">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Figtree:wght@400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/style.css">{ldj}</head><body><a class="skip" href="#main">Skip to content</a>
<header class="top"><div class="wrap"><a class="brand" href="/">{NAME}</a><nav aria-label="Main">{nav}</nav></div></header>
<main id="main">{main}</main>
<footer><div class="wrap"><p><b>{NAME}</b></p><p>Software Engineering Student, Web Developer &amp; Graphic Designer</p><p>&copy; 2026 {NAME}. <a href="/">Home</a></p></div></footer></body></html>'''
    d = R / path.strip('/')
    d.mkdir(parents=True, exist_ok=True)
    (d / 'index.html').write_text(out)

def more(skip):
    return '<div class="wrap more">' + ''.join(f'<a class="btn" href="{p}">{t}</a>' for p, t, _, _ in WORK if p != skip) + '</div>'

def head(crumb, h1, lead):
    return f'<div class="wrap page-head"><p class="crumb"><a href="/">{NAME}</a> / {e(crumb)}</p><h1>{e(h1)}</h1><p class="lead">{e(lead)}</p></div>'

def project(path, name, lead, facts, notes, shots):
    f = ''.join(f'<div><b>{a}</b><br>{b or ph("Add " + a.lower())}</div>' for a, b in facts)
    s = ''.join(f'<figure>{img(k, eager=i == 0)}<figcaption>{e(c)}</figcaption></figure>' for i, (k, c) in enumerate(shots))
    page(path, f'{name} | Project by {NAME}', lead + f' A project by {NAME}.',
         head('Projects', name, lead) + f'<div class="wrap"><div class="facts">{f}</div><p class="lead">{e(notes)}</p><div class="shots">{s}</div></div>' + more(path),
         [{'@context': 'https://schema.org', '@type': 'CreativeWork', 'name': name, 'description': lead,
           'creator': {'@type': 'Person', 'name': NAME}, 'url': SITE + path}])

# ---------- pages ----------
sameas = [v for v in CONTACT.values() if v.startswith('http')]
person = {'@context': 'https://schema.org', '@type': 'Person', 'name': NAME, 'url': SITE,
          'jobTitle': 'Software Engineering Student, Web Developer & Graphic Designer', 'description': DESC, 'sameAs': sameas}
if CONTACT['Email']: person['email'] = CONTACT['Email']
site = {'@context': 'https://schema.org', '@type': 'WebSite', 'name': f'{NAME} Portfolio', 'url': SITE, 'author': {'@type': 'Person', 'name': NAME}}

rows = ''.join(f'<div class="row"><a class="pic" href="{p}" tabindex="-1" aria-hidden="true">{img(k)}</a><div><h3>{t}</h3><p>{e(d)}</p><a class="btn gold" href="{p}">View {t.lower() if p.startswith("/g") or p.startswith("/c") else t}</a></div></div>' for p, t, d, k in WORK)
det = ''.join(f'<dt>{a}</dt><dd>{e(b) if b else ph("Add your " + a.lower())}</dd>' for a, b in DETAILS)
def clink(k, v):
    if not v: return ph(f'Add your {k}')
    if '@' in v and not v.startswith('http'): return f'<a href="mailto:{e(v)}">{e(v)}</a>'
    return f'<a href="{e(v)}" rel="me noopener">{e(v)}</a>'
con = ''.join(f'<li><b>{k}</b> {clink(k, v)}</li>' for k, v in CONTACT.items())

home = f'''<div class="wrap hero"><div><h1>Vhenj Kirby<br>Solas</h1><p class="tag">Engineering Ideas. Designing Experiences.</p>
<p class="lead">I'm a Software Engineering student, web developer, and graphic designer passionate about building useful digital products and creating meaningful visual experiences. I combine code and creativity to bring ideas to life.</p>
<div class="btns"><a class="btn gold" href="#work">See the projects</a><a class="btn" href="/graphic-design">See the designs</a></div></div>
<div class="collage" aria-hidden="true">{img('catleya-planner', True)}{img('ktindahan-dashboard', True)}{img('zentra-banner', True)}</div></div>
<section class="block" id="work"><div class="wrap"><h2>Featured work</h2>{rows}</div></section>
<section class="block" id="about"><div class="wrap about"><div><h2>About {NAME}</h2>
<p>I'm {NAME}, a Software Engineering student, aspiring full-stack developer, and graphic designer. I enjoy building web applications, designing user interfaces, creating visual identities, and turning ideas into functional digital experiences.</p></div><dl>{det}</dl></div></section>
<section class="block" id="contact"><div class="wrap"><h2>Contact {NAME}</h2><ul class="contact">{con}</ul></div></section>'''
page('/', HOME_T, DESC, home, [person, site])

project('/projects/catleya', 'Catleya', 'An educational productivity platform featuring notebooks, file organization, schedules, and planners.',
        [('Role', ''), ('Status', ''), ('Live link', '')],
        'Catleya describes itself as "your notes, plans and quizzes, on every device you own." The screenshots show a login screen and a weekly planner where plans sit as sticky notes on a brick wall. The sidebar also lists Notebooks, Files, Schedule, Board, Quizzes and Links.',
        [('catleya-planner', 'The weekly planner: add a plan to a day, tick it off, or drag it to another day.'), ('catleya-login', 'The login screen.')])
project('/projects/k-tindahan', 'K-Tindahan', 'A store management application concept focused on inventory, sales recording, reporting, and cashier management.',
        [('Role', ''), ('Status', ''), ('Live link', '')],
        'K-Tindahan lets a store admin manage products and record sales, with separate cashier accounts. The screenshots show an admin dashboard with daily sales, transactions and top products, and a menu covering the cashier, products, sales history and reports, GCash, cashiers and settings.',
        [('ktindahan-dashboard', "The admin dashboard: today's sales, transactions, items sold and top products."), ('ktindahan-login', 'The login screen for admins and cashiers.')])

page('/graphic-design', f'Graphic Design Portfolio | {NAME}', f'Branding, logo designs, banners and digital graphics by {NAME}, a web developer and graphic designer.',
     head('Graphic design', 'Graphic design', 'Branding, logo designs, posters, digital graphics, UI/UX work, and other creative projects.')
     + '<div class="wrap"><div class="gallery">' + ''.join(fig(*g) for g in GRAPHICS) + '</div></div>' + more('/graphic-design'))
page('/clothing-designs', f'Clothing Designs | {NAME}', f'Clothing designs by {NAME}: zip-up hoodies, camo and washed prints.',
     head('Clothing designs', 'Clothing designs', 'A collection of my clothing designs.' + (' ' + CLAIM if CLAIM else ''))
     + '<div class="wrap wide">' + ''.join(fig(*c) for c in CLOTHES) + '</div>' + more('/clothing-designs'))

# ---------- SEO + deploy files ----------
(R / 'style.css').write_text(CSS)
(R / 'robots.txt').write_text(f'User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n')
urls = ['', '/projects/catleya', '/projects/k-tindahan', '/graphic-design', '/clothing-designs']
(R / 'sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + ''.join(f'<url><loc>{SITE}{u}</loc><lastmod>2026-10-16</lastmod><priority>{"1.0" if not u else "0.8"}</priority></url>\n' for u in urls) + '</urlset>\n')
(R / 'vercel.json').write_text(json.dumps({'cleanUrls': True, 'trailingSlash': False, 'headers': [
    {'source': '/assets/(.*)', 'headers': [{'key': 'Cache-Control', 'value': 'public, max-age=31536000, immutable'}]},
    {'source': '/(.*)', 'headers': [{'key': 'X-Content-Type-Options', 'value': 'nosniff'}, {'key': 'Referrer-Policy', 'value': 'strict-origin-when-cross-origin'}]}]}, indent=2))
print('built', len(urls), 'pages')
