'use client'
import {motion,MotionConfig,useScroll,useTransform,useInView,useMotionValueEvent,useReducedMotion,MotionValue} from 'framer-motion'
import {useRef,useState,useEffect,ReactNode,CSSProperties} from 'react'
import {NAME,IDENTITY,WORK,TECH,LOOK,FEATURES,MORE,MEDIA,DETAILS,CONTACT,ABOUT} from '@/data'

const ph=(t:string)=><span className="ph">[{t}]</span>
const pad=(n:number)=>String(n).padStart(2,'0')
const vars=(o:Record<string,string|number>)=>o as CSSProperties
const N=FEATURES.length
function Reveal({children,d=0}:{children:ReactNode;d?:number}){return <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-10%'}} transition={{duration:.6,delay:d}}>{children}</motion.div>}

function Photo(){ // shows /public/img/portrait.webp once it exists; placeholder until then
 const [ok,setOk]=useState(false);useEffect(()=>{const i=new Image();i.onload=()=>setOk(true);i.src='/img/portrait.webp'},[])
 return <motion.div className="photo" initial={{opacity:0,clipPath:'inset(0 0 100% 0)'}} animate={{opacity:1,clipPath:'inset(0 0 0% 0)'}} transition={{delay:.6,duration:1,ease:[.2,.7,.2,1]}}>
  {ok?<img src="/img/portrait.webp" width={800} height={1000} alt={`Portrait of ${NAME}`} fetchPriority="high"/>:<div className="slot"><b>Your photo here</b><small>Save it as public/img/portrait.webp</small></div>}</motion.div>
}

function Hero(){
 const lines=['Vhenj Kirby','Solas']
 return <section className="hero"><div className="wrap"><div>
  <h1 aria-label={NAME}>{lines.map((l,i)=><span key={i} className="line" aria-hidden="true">{[...l].map((c,j)=><motion.span key={j} className="ch" initial={{y:'110%',rotate:8}} animate={{y:0,rotate:0}} transition={{delay:.05*(j+i*11),type:'spring',stiffness:140,damping:16}}>{c===' '?'\u00a0':c}</motion.span>)}</span>)}</h1>
  <motion.p className="tag" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.1}}>Engineering Ideas. Designing Experiences.</motion.p>
  <motion.p className="lead" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1.3}}>I'm a Software Engineering student, web developer, graphic designer, and video editor passionate about building useful digital products and creating meaningful visual experiences. I combine code and creativity to bring ideas to life.</motion.p>
  <motion.div className="btns" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}}><a className="btn gold" href="#work">See the projects</a><a className="btn" href="#designs">See the designs</a></motion.div></div><Photo/></div></section>
}

function Project({w,i}:{w:typeof WORK[number];i:number}){
 const ref=useRef(null);const {scrollYProgress:p}=useScroll({target:ref,offset:['start end','end start']});const s=i%2?-1:1
 const scale=useTransform(p,[0,.45],[.85,1]),rot=useTransform(p,[0,.5,1],[2*s,0,-2*s]),y=useTransform(p,[0,1],[60,-60])
 return <section ref={ref} className={`proj ${i%2?'rev':''}`}>
  <motion.div className="pic" style={{scale,rotate:rot,y}}><img src={`/img/${w.k}.webp`} width={w.w} height={w.h} alt={`${w.title} screenshot`} loading="lazy"/></motion.div>
  <motion.div initial={{opacity:0,x:40*s}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:'-20%'}} transition={{duration:.7}}>
   <h2>{w.title}</h2><p>{w.text}</p><a className="btn gold" href={w.link} target="_blank" rel="noopener noreferrer">Live Demo<span className="sr"> of {w.title} (opens in a new tab)</span></a></motion.div></section>
}

function Tech(){
 return <section className="tech" id="tech"><div className="wrap"><Reveal><h2>Technologies</h2></Reveal><ul className="tg">{TECH.map(([n,s,inv],i)=>
  <motion.li key={s} className="tl" tabIndex={0} initial={{opacity:0,scale:.8}} whileInView={{opacity:1,scale:1}} viewport={{once:true,margin:'-10%'}} transition={{delay:i*.08,duration:.5}} style={{animationDelay:`${-i*1.1}s`}}>
   <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${s}/${s}-original.svg`} alt={`${n} logo`} width={64} height={64} className={inv?'inv':''} loading="lazy"/><span>{n}</span></motion.li>)}</ul></div></section>
}

function Impact(){
 return <section className="impact"><div className="wrap"><Reveal><h2>Designs Made to Be Worn.</h2></Reveal><Reveal d={.1}><p className="big">Hundreds to thousands</p>
  <p className="lead">My apparel graphics have reached real-world clothing worn by hundreds to thousands of people.</p><p className="fine">An estimate of reach, not a sales or customer figure.</p></Reveal></div></section>
}

function Fade({p,i,n,children}:{p:MotionValue<number>;i:number;n:number;children:ReactNode}){
 const s=1/(n-1);const o=useTransform(p,i===0?[0,s]:i===n-1?[1-s,1]:[(i-1)*s,i*s,(i+1)*s],i===0?[1,0]:i===n-1?[0,1]:[0,1,0])
 return <motion.div className="lf" style={{opacity:o}}>{children}</motion.div>
}
function Lookbook(){
 const ref=useRef(null);const n=LOOK.length;const [a,setA]=useState(0)
 const {scrollYProgress:p}=useScroll({target:ref,offset:['start start','end end']})
 useMotionValueEvent(p,'change',v=>setA(Math.min(n-1,Math.max(0,Math.round(v*(n-1))))))
 return <section ref={ref} className="look" id="apparel" style={vars({'--n':n})}><div className="lstick">
  <p className="lcap"><small>APPAREL DESIGN / STREETWEAR</small><b>{pad(a+1)} / {pad(n)}</b><span>{LOOK[a].t}</span></p>
  <div className="lbox">{LOOK.map((l,i)=><Fade key={l.k} p={p} i={i} n={n}><img src={`/img/${l.k}.webp`} width={1000} height={1000} alt={`${l.t}, front and back on a model`} loading={i?'lazy':'eager'} fetchPriority={i?'auto':'high'}/></Fade>)}</div></div></section>
}

function Media({s,alt}:{s:string;alt:string}){ // still thumbnail until near the viewport, then the animation
 const ref=useRef<HTMLImageElement>(null);const rm=useReducedMotion();const on=useInView(ref,{margin:'300px'});const [w,h]=MEDIA[s]
 return <img ref={ref} src={`/media/${s}${on&&!rm?'':'-still'}.webp`} width={w} height={h} alt={alt} decoding="async" loading="lazy"/>
}
function Feature({f,i}:{f:typeof FEATURES[number];i:number}){
 const ref=useRef(null);const {scrollYProgress:p}=useScroll({target:ref,offset:['start end','end start']})
 const ty=useTransform(p,[.05,.25],[60,0]),to=useTransform(p,[.05,.25],[0,1]),sc=useTransform(p,[.15,.45],[.86,1]),ao=useTransform(p,[.15,.4],[0,1])
 const ay=useTransform(p,[0,1],[90,-90]),sy=useTransform(p,[0,1],[160,-160]),co=useTransform(p,[.42,.55],[0,1]);const [m,s]=f.items
 return <section ref={ref} className={`feat ${i%2?'rev':''}`} style={vars({'--a':f.accent})}><div className="wrap">
  <motion.h3 className="ft" style={{y:ty,opacity:to}}>{f.t}</motion.h3>
  <div className="fa"><motion.div className="main" style={{scale:sc,opacity:ao,y:ay}}><Media s={m} alt={`${f.t} ${f.cat.toLowerCase()}`}/></motion.div>
   {s&&<motion.div className="sub" style={{y:sy,opacity:ao}}><Media s={s} alt={`${f.t} icon`}/></motion.div>}</div>
  <motion.p className="fc" style={{opacity:co}}><b>{pad(i+1)} / {pad(N)}</b> {f.cat}. {f.note}</motion.p></div></section>
}
function Designs(){
 return <section id="designs"><div className="wrap dhead"><Reveal><h2>Graphic design</h2><p className="lead">Logos, banners and animated brand sets.</p></Reveal></div>
  {FEATURES.map((f,i)=><Feature key={f.id} f={f} i={i}/>)}
  <div className="wrap more"><h3>More logos</h3><ul>{MORE.map(([k,w,h,t])=><li key={k}><img src={`/img/${k}.webp`} width={w} height={h} alt={`${t} logo`} loading="lazy"/></li>)}</ul></div></section>
}

function Word({p,a,b,children}:{p:MotionValue<number>;a:number;b:number;children:ReactNode}){const o=useTransform(p,[a,b],[.2,1]);return <motion.span style={{opacity:o}}>{children} </motion.span>}
function About(){
 const ref=useRef(null);const {scrollYProgress:p}=useScroll({target:ref,offset:['start 0.9','end 0.55']});const ws=ABOUT.split(' ')
 return <section className="about" id="about"><div className="wrap"><Reveal><h2>About {NAME}</h2></Reveal><p ref={ref} className="words">{ws.map((w,i)=><Word key={i} p={p} a={i/ws.length} b={(i+1)/ws.length}>{w}</Word>)}</p>
  <dl>{DETAILS.map(([a,b])=><div key={a}><dt>{a}</dt><dd>{b||ph(`Add your ${a.toLowerCase()}`)}</dd></div>)}</dl></div></section>
}
function Contact(){
 return <section className="contact" id="contact"><div className="wrap"><Reveal><h2>Contact {NAME}</h2></Reveal><ul>
  <motion.li whileHover={{x:16}}><b>Email</b><a href={`mailto:${CONTACT.Email}`}>{CONTACT.Email}</a></motion.li>
  <motion.li whileHover={{x:16}}><b>GitHub</b><a href={CONTACT.GitHub} target="_blank" rel="me noopener noreferrer">{CONTACT.GitHub}</a></motion.li></ul></div></section>
}

export default function Portfolio(){
 const t='Engineering Ideas. Designing Experiences. '
 return <MotionConfig reducedMotion="user">
  <header className="nav"><a href="#top">{NAME}</a><nav aria-label="Main"><a href="#work">Work</a><a href="#tech">Tech</a><a href="#apparel">Apparel</a><a href="#designs">Design</a><a href="#about">About</a><a href="#contact">Contact</a></nav></header>
  <main id="top"><Hero/><div className="marq" aria-hidden="true"><div>{t.repeat(8)}</div></div>
   <div id="work">{WORK.map((w,i)=><Project key={w.title} w={w} i={i}/>)}</div><Tech/><Impact/><Lookbook/><Designs/><About/><Contact/></main>
  <footer className="foot"><div className="wrap">&copy; 2026 {NAME}. {IDENTITY}.</div></footer></MotionConfig>
}
