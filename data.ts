// EDIT HERE. Empty values render [Add ...] placeholders.
import media from './content/media.json'
export const MEDIA=media as Record<string,number[]>
export const NAME='Vhenj Kirby Solas'
export const SITE='https://vhenjkirbysolas.com'
export const IDENTITY='Software Engineering Student, Web Developer, Graphic Designer & Video Editor'
export const TITLE=`${NAME} | Developer, Graphic Designer & Video Editor`
export const DESC='Explore the portfolio of Vhenj Kirby Solas, a Software Engineering student, web developer, fashion designer, graphic designer, and video editor showcasing software projects, digital products, and creative design work.'
export const CONTACT={Email:'solasvhenjkirby@gmail.com',GitHub:'https://github.com/NixbyKirbz'}
export const DETAILS:[string,string][]=[['Education',''],['Skills',''],['Location',''],['Video editing','']]
export const ABOUT="I'm Vhenj Kirby Solas, a Software Engineering student, aspiring full-stack developer, graphic designer, and video editor. I enjoy building web applications, designing user interfaces, creating visual identities, and turning ideas into functional digital experiences."
export const WORK=[
 {title:'Catleya',text:'An educational productivity platform featuring notebooks, file organization, schedules, and planners.',k:'catleya-planner',w:1600,h:751,link:'https://catleya.vercel.app'},
 {title:'K-Tindahan',text:'A store management application concept focused on inventory, sales recording, reporting, and cashier management.',k:'ktindahan-dashboard',w:1600,h:764,link:'https://k-tindahan.vercel.app'}]
// Only technologies you listed. Add React etc. here once you confirm them. Logos: devicon (cdn.jsdelivr.net)
export const TECH:[string,string,boolean?][]=[['Python','python'],['HTML5','html5'],['CSS3','css3'],['JavaScript','javascript'],['Git','git'],['GitHub','github',true]]
export const LOOK=[{k:'look-yolo',t:'YOLO zip-up hoodie'},{k:'look-camo',t:'Camouflage zip-up hoodie'},{k:'look-burgundy',t:'Burgundy distressed hoodie'},{k:'look-offwhite',t:'Off-white graphic sweatshirt'}]
export const GRAPHICS = [
 { k: 'robuy', w: 854, h: 480, t: 'RoBuy', s: 'Full Brand Set & Identity', accent: '#d4af37' },
 { k: 'zentra-banner', w: 500, h: 281, t: 'Zentra', s: 'Banner & Community Branding', accent: '#2563eb' },
 { k: 'dudrs-casino', w: 384, h: 384, t: 'Dudrs Casino', s: 'Logo & Emblem Design', accent: '#ef4444' },
 { k: 'db', w: 854, h: 480, t: 'DB Marketplace', s: 'Developer Platform Brand Set', accent: '#3b82f6' },
 { k: 'bloxy-fruit-banner', w: 480, h: 270, t: 'Bloxy Fruit', s: 'Animated Gaming Banner', accent: '#22c55e' },
 { k: 'bloxy-fruit-icon', w: 512, h: 512, t: 'Bloxy Fruit', s: 'Community Brand Icon', accent: '#16a34a' },
 { k: 'dess-banner', w: 500, h: 281, t: 'Dess Middleman', s: 'Service Banner Design', accent: '#d946ef' },
 { k: 'rituals-banner', w: 500, h: 281, t: 'Rivals Exploits', s: 'Cyberpunk Banner & Logo', accent: '#64748b' },
 { k: 'misea-shop', w: 600, h: 338, t: 'Misea Shop', s: 'E-commerce Brand Identity', accent: '#f59e0b' },
 { k: 'sss-studios', w: 512, h: 512, t: 'SSS Studios', s: 'Studio Monogram & Icon', accent: '#a855f7' },
 { k: 'zentra-icon', w: 384, h: 384, t: 'Zentra Icon', s: 'Geometric Brand Symbol', accent: '#3b82f6' },
 { k: 'stocked', w: 512, h: 512, t: 'Stocked', s: 'Typography & Brand Mark', accent: '#10b981' }
]

