'use client'
import {motion,MotionConfig,useScroll,useSpring,useTransform,MotionValue} from 'framer-motion'
import {useRef,ReactNode} from 'react'
import {NAME,WORK,GRAPHICS,CLOTHES,DETAILS,CONTACT,ABOUT,CLAIM} from '@/data'

const ph=(t:string)=><span className="ph">[{t}]</span>
const Im=({k,w,h,alt,className}:{k:string;w:number;h:number;alt:string;className?:string})=><img src={`/img/${k}.webp`} width={w} height={h} alt={alt} className={className} loading="lazy"/>

function Progress(){const {scrollYProgress}=useScroll();const x=useSpring(scrollYProgress,{stiffness:120,damping:25});return <motion.div className="bar" style={{scaleX:x}}/>}

function Hero(){
 const ref=useRef(null);const {scrollYProgress:p}=useScroll({target:ref,offset:['start start','end start']})
 const y1=useTransform(p,[0,1],[0,-120]),y2=useTransform(p,[0,1],[0,-280]),y3=useTransform(p,[0,1],[0,-60]),r=useTransform(p,[0,1],[0,10]),fade=useTransform(p,[0,.7],[1,0])
 const lines=['Vhenj Kirby','Solas']
 return <section ref={ref} className="hero"><div className="wrap"><motion.div style={{opacity:fade}}>
  <h1 aria-label={NAME}>{lines.map((l,i)=><span key={i} className="line" aria-hidden="true">{[...l].map((c,j)=><motion.span key={j} className="ch" initial={{y:'110%',rotate:8}} animate={{y:0,rotate:0}} transition={{delay:.05*(j+i*11),type:'spring',stiffness:140,damping:16}}>{c===' '?'\u00a0':c}</motion.span>)}</span>)}</h1>
  <motion.p className="tag" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.1}}>Engineering Ideas. Designing Experiences.</motion.p>
  <motion.p className="lead" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1.3}}>I'm a Software Engineering student, web developer, and graphic designer passionate about building useful digital products and creating meaningful visual experiences. I combine code and creativity to bring ideas to life.</motion.p>
  <motion.div className="btns" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}}><a className="btn gold" href="#work">See the projects</a><a className="btn" href="#designs">See the designs</a></motion.div></motion.div>
  <div className="collage" aria-hidden="true">
   <motion.img src="/img/catleya-planner.webp" alt="" style={{y:y1,rotate:r}} width={1600} height={751}/>
   <motion.img src="/img/ktindahan-dashboard.webp" alt="" style={{y:y2}} width={1600} height={764}/>
   <motion.img src="/img/zentra-banner.webp" alt="" style={{y:y3}} width={500} height={281}/></div></div></section>
}

function Project({w,i}:{w:typeof WORK[number];i:number}){
 const ref=useRef(null);const {scrollYProgress:p}=useScroll({target:ref,offset:['start end','end start']});const s=i%2?-1:1
 const scale=useTransform(p,[0,.45],[.78,1]),rot=useTransform(p,[0,.5,1],[4*s,0,-4*s]),y=useTransform(p,[0,1],[80,-80])
 return <section ref={ref} className={`proj ${i%2?'rev':''}`}>
  <motion.div className="pic" style={{scale,rotate:rot,y}}><Im k={w.k} w={w.w} h={w.h} alt={`${w.title} screenshot`}/></motion.div>
  <motion.div initial={{opacity:0,x:60*s}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:'-20%'}} transition={{duration:.7}}>
   <h2>{w.title}</h2><p>{w.text}</p><p>{w.link?<a className="btn gold" href={w.link}>Visit {w.title}</a>:ph('Add live link')}</p></motion.div></section>
}

function Designs(){
 const ref=useRef(null);const {scrollYProgress:p}=useScroll({target:ref});const x=useTransform(p,[0,1],['3%','-80%'])
 return <section ref={ref} className="hscroll" id="designs"><div className="sticky"><h2>Graphic design</h2>
  <motion.div className="track" style={{x}}>{GRAPHICS.map(([k,w,h,t,s])=><motion.figure key={k} className="card" whileHover={{y:-14,rotate:-1.5}}><Im k={k} w={w} h={h} alt={`${t} ${s.toLowerCase()}`}/><figcaption><b>{t}</b> {s}</figcaption></motion.figure>)}</motion.div></div></section>
}

function Clothes(){
 return <section className="cloth" id="clothing"><div className="wrap"><h2>Clothing designs</h2>{CLAIM&&<p className="lead">{CLAIM}</p>}
  {CLOTHES.map(([k,w,h,t,s],i)=><motion.figure key={k} className="stack" style={{top:`${8+i*3}vh`}} initial={{opacity:0,scale:.92}} whileInView={{opacity:1,scale:1}} viewport={{once:true,margin:'-10%'}}><Im k={k} w={w} h={h} alt={`${t}, ${s.toLowerCase()}`}/><figcaption><b>{t}</b> {s}</figcaption></motion.figure>)}</div></section>
}

function Word({p,a,b,children}:{p:MotionValue<number>;a:number;b:number;children:ReactNode}){const o=useTransform(p,[a,b],[.15,1]);return <motion.span style={{opacity:o}}>{children} </motion.span>}
function About(){
 const ref=useRef(null);const {scrollYProgress:p}=useScroll({target:ref,offset:['start 0.9','end 0.55']});const ws=ABOUT.split(' ')
 return <section className="about" id="about"><div className="wrap"><h2>About {NAME}</h2><p ref={ref} className="words">{ws.map((w,i)=><Word key={i} p={p} a={i/ws.length} b={(i+1)/ws.length}>{w}</Word>)}</p>
  <dl>{DETAILS.map(([a,b])=><div key={a}><dt>{a}</dt><dd>{b||ph(`Add your ${a.toLowerCase()}`)}</dd></div>)}</dl></div></section>
}

function Contact(){
 return <section className="contact" id="contact"><div className="wrap"><h2>Contact {NAME}</h2><ul>{Object.entries(CONTACT).map(([k,v])=><motion.li key={k} whileHover={{x:16}}><b>{k}</b>{v?<a href={v.includes('@')&&!v.startsWith('http')?`mailto:${v}`:v} rel="me noopener">{v}</a>:ph(`Add your ${k}`)}</motion.li>)}</ul></div></section>
}

export default function Portfolio(){
 const t='Engineering Ideas. Designing Experiences. '
 return <MotionConfig reducedMotion="user"><Progress/>
  <header className="nav"><a href="#top">{NAME}</a><nav aria-label="Main"><a href="#work">Work</a><a href="#designs">Design</a><a href="#clothing">Clothing</a><a href="#about">About</a><a href="#contact">Contact</a></nav></header>
  <main id="top"><Hero/><div className="marq" aria-hidden="true"><div>{t.repeat(8)}</div></div>
   <div id="work">{WORK.map((w,i)=><Project key={w.title} w={w} i={i}/>)}</div><Designs/><Clothes/><About/><Contact/></main>
  <footer className="foot"><div className="wrap">&copy; 2026 {NAME}. Software Engineering Student, Web Developer &amp; Graphic Designer.</div></footer></MotionConfig>
}
