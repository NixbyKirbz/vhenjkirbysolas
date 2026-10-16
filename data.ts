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
export const FEATURES=[
 {id:'dudrs',t:'Dudrs Casino',cat:'Logo and banner',note:'An animated brand set.',accent:'#b3121f',items:['dudrs-banner','dudrs-logo']},
 {id:'zentra',t:'Zentra',cat:'Logo and banner',note:'An animated brand set.',accent:'#1d4ed8',items:['zentra-banner','zentra-logo']},
 {id:'coral',t:'Coral Traders',cat:'Logo and banner',note:'An animated brand set.',accent:'#0e8aa8',items:['coral-banner','coral-icon']},
 {id:'bloxy',t:'Bloxy Fruit',cat:'Logo and banner',note:'An animated brand set.',accent:'#4c8a1f',items:['bloxy-banner','bloxy-icon']},
 {id:'rivals',t:'Rivals Exploits',cat:'Logo and banner',note:'An animated brand set.',accent:'#4a4d5c',items:['rivals-banner','rivals-logo']},
 {id:'robuy',t:'RoBuy',cat:'Full brand set',note:'Logo, banner and profile art in black and gold.',accent:'#a87a00',items:['robuy']},
 {id:'db',t:'DB',cat:'Logo and banner',note:'An animated logo with a developer marketplace banner.',accent:'#1e3a8a',items:['db']},
 {id:'dess',t:'Dess Middleman Service',cat:'Banner',note:'An animated banner.',accent:'#a21caf',items:['dess-banner']},
 {id:'nxt',t:'NXT',cat:'Logo',note:'An animated logo.',accent:'#1f6feb',items:['nxt']}]
export const MORE:[string,number,number,string][]=[['misea-shop',600,338,'Misea Shop'],['sss-studios',512,512,'SSS Studios'],['stocked',512,512,'Stocked']]
