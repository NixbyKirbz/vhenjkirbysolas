'use client'
import {motion,MotionConfig,useScroll,useTransform,useInView,useMotionValueEvent,useReducedMotion,AnimatePresence,MotionValue} from 'framer-motion'
import {useRef,useState,useEffect,ReactNode,CSSProperties} from 'react'
import {NAME,IDENTITY,WORK,TECH,LOOK,FEATURES,MORE,MEDIA,DETAILS,CONTACT,ABOUT} from '@/data'

const ph=(t:string)=><span className="ph">[{t}]</span>
const pad=(n:number)=>String(n).padStart(2,'0')
const vars=(o:Record<string,string|number>)=>o as CSSProperties
const N=FEATURES.length
function Reveal({children,d=0}:{children:ReactNode;d?:number}){return <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-10%'}} transition={{duration:.6,delay:d}}>{children}</motion.div>}

/* ===== SPLASH INTRO ===== */
function Splash({onDone}:{onDone:()=>void}){
 useEffect(()=>{const t=setTimeout(onDone,2500);return ()=>clearTimeout(t)},[onDone])
 return(
  <motion.div
   className="splash"
   initial={{opacity:1}}
   exit={{opacity:0,scale:1.1}}
   transition={{duration:.5,ease:'easeInOut'}}
  >
   <motion.span
    className="splash-initials"
    initial={{scale:0.6,opacity:0,filter:'blur(12px)'}}
    animate={{scale:1,opacity:1,filter:'blur(0px)'}}
    transition={{duration:1,ease:[.22,1,.36,1]}}
   >
    VKS
   </motion.span>
  </motion.div>
 )
}

/* ===== HERO ===== */
const ORBS=[
 {size:320,bg:'radial-gradient(circle,rgba(109,40,217,.5),transparent 70%)',x:'10%',y:'20%',dx:30,dy:-25,dur:18},
 {size:260,bg:'radial-gradient(circle,rgba(255,199,44,.35),transparent 70%)',x:'70%',y:'60%',dx:-25,dy:35,dur:22},
 {size:200,bg:'radial-gradient(circle,rgba(255,79,163,.3),transparent 70%)',x:'80%',y:'15%',dx:20,dy:20,dur:15},
 {size:180,bg:'radial-gradient(circle,rgba(5,150,105,.35),transparent 70%)',x:'25%',y:'75%',dx:-15,dy:-30,dur:20},
]

function Hero(){
 const descText="I'm a Software Engineering student, web developer, graphic designer, and video editor passionate about building useful digital products and creating meaningful visual experiences. I combine code and creativity to bring ideas to life."
 const descWords=descText.split(' ')

 return <section className="hero"><div className="wrap"><div className="hero-content">
  {/* Floating orbs */}
  {ORBS.map((o,i)=>(
   <motion.div
    key={i}
    className="hero-orb"
    style={{width:o.size,height:o.size,background:o.bg,left:o.x,top:o.y}}
    animate={{x:[0,o.dx,0,-o.dx*0.6,0],y:[0,o.dy,-o.dy*0.5,0]}}
    transition={{duration:o.dur,repeat:Infinity,ease:'easeInOut'}}
   />
  ))}

  <h1 className="hero-name" aria-label={NAME}>
   {/* Pulsing glow behind name */}
   <motion.div
    className="hero-name-glow"
    animate={{opacity:[0.4,0.8,0.4],scale:[1,1.08,1]}}
    transition={{duration:4,repeat:Infinity,ease:'easeInOut'}}
   />
   <span className="word-group">
    {['Vhenj', 'Kirby'].map((w, wi) => (
     <span key={w} className="word-unit">
      {[...w].map((c, j) => (
       <motion.span
        key={j}
        className="ch"
        initial={{ y: '110%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.04 * (j + wi * 6), type: 'spring', stiffness: 140, damping: 16 }}
       >
        {c}
       </motion.span>
      ))}
      {wi === 0 && '\u00a0'}
     </span>
    ))}
   </span>
   <span className="word-group gold">
    <span className="word-unit">
     {[...'Solas'].map((c, j) => (
      <motion.span
       key={j}
       className="ch"
       initial={{ y: '110%', opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       transition={{ delay: 0.04 * (j + 12), type: 'spring', stiffness: 140, damping: 16 }}
      >
       {c}
      </motion.span>
     ))}
    </span>
   </span>
  </h1>

  <motion.p className="tag" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.85,duration:.5}}>
   Engineering Ideas. Designing Experiences.
   <motion.span
    className="tag-underline"
    initial={{scaleX:0}}
    animate={{scaleX:1}}
    transition={{delay:1.1,duration:.6,ease:'easeOut'}}
    style={{transformOrigin:'left'}}
   />
  </motion.p>

  {/* Staggered word reveal */}
  <motion.p className="lead" initial="hidden" animate="visible" variants={{hidden:{},visible:{transition:{staggerChildren:.03,delayChildren:1.05}}}}>
   {descWords.map((word,i)=>(
    <motion.span key={i} className="hero-word" variants={{hidden:{opacity:0,y:12},visible:{opacity:1,y:0,transition:{duration:.4}}}}>
     {word}
    </motion.span>
   ))}
  </motion.p>

  <motion.div className="btns" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:1.25,duration:.5}}><a className="btn gold" href="#work">See the projects</a><a className="btn" href="#designs">See the designs</a></motion.div></div></div></section>
}

/* ===== PROJECTS ===== */
function Project({w,i}:{w:typeof WORK[number];i:number}){
 const ref=useRef(null)
 const {scrollYProgress:p}=useScroll({target:ref,offset:['start end','end start']})
 const y=useTransform(p,[0,1],[40,-40])

 return(
  <motion.div
   ref={ref}
   className={`proj-card ${i%2?'rev':''}`}
   style={{'--proj-accent':w.accent} as CSSProperties}
   initial={{opacity:0,y:60}}
   whileInView={{opacity:1,y:0}}
   viewport={{once:true,margin:'-10%'}}
   transition={{duration:.7,delay:.1}}
  >
   <div className="proj-images">
    <motion.div className="proj-img-main" style={{y}}>
     <img src={`/img/${w.k}.webp`} width={w.w} height={w.h} alt={`${w.title} screenshot`} loading="lazy"/>
    </motion.div>
    <div className="proj-img-secondary">
     <img src={`/img/${w.k2}.webp`} width={w.w} height={w.h} alt={`${w.title} login page`} loading="lazy"/>
    </div>
   </div>
   <div className="proj-info">
    <div className="proj-num">{pad(i+1)}</div>
    <h2 className="proj-title">{w.title}</h2>
    <p className="proj-desc">{w.text}</p>
    <div className="proj-tags">
     {w.tags.map(tag=><span key={tag} className="proj-tag">{tag}</span>)}
    </div>
    <a className="btn gold proj-cta" href={w.link} target="_blank" rel="noopener noreferrer">
     Live Demo<span className="sr"> of {w.title} (opens in a new tab)</span>
    </a>
   </div>
  </motion.div>
 )
}

/* ===== TECHNOLOGIES ===== */
function Tech(){
 return <section className="tech" id="tech"><div className="wrap"><Reveal><h2>Technologies</h2></Reveal><ul className="tg">{TECH.map(([n,s,inv],i)=>
  <motion.li
   key={s}
   className="tl"
   tabIndex={0}
   initial={{opacity:0,y:20}}
   whileInView={{opacity:1,y:0}}
   viewport={{once:true,margin:'-10%'}}
   transition={{delay:i*.1,duration:.5}}
   animate={{y:[0,-6,0]}}
   /* continuous floating with wave delay */
   style={{animationDelay:`${-i*1.1}s`}}
  >
   <motion.div
    animate={{y:[0,-8,0]}}
    transition={{duration:3,repeat:Infinity,ease:'easeInOut',delay:i*0.4}}
   >
    <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${s}/${s}-original.svg`} alt={`${n} logo`} width={56} height={56} className={inv?'inv':''} loading="lazy"/>
   </motion.div>
   <span>{n}</span>
  </motion.li>)}</ul></div></section>
}

/* ===== UNCHANGED SECTIONS ===== */
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

/* ===== MAIN PORTFOLIO ===== */
 export default function Portfolio(){
 const t='Engineering Ideas. Designing Experiences. '
 const [showSplash,setShowSplash]=useState(true)
 const [contentReady,setContentReady]=useState(false)
 const [showEasterEgg,setShowEasterEgg]=useState(false)

 const handleSplashDone=()=>{setShowSplash(false)}

 useEffect(()=>{
  if(!showSplash){
   // Small delay so exit animation plays before content fades in
   const t=setTimeout(()=>setContentReady(true),500)
   return ()=>clearTimeout(t)
  }
 },[showSplash])

 return <MotionConfig reducedMotion="user">
  <AnimatePresence>
   {showSplash && <Splash key="splash" onDone={handleSplashDone}/>}
  </AnimatePresence>
  <motion.div
   initial={{opacity:0}}
   animate={{opacity:contentReady?1:0}}
   transition={{duration:.6}}
  >
   <header className="nav"><a href="#top">{NAME}</a><nav aria-label="Main"><a href="#work">Work</a><a href="#tech">Tech</a><a href="#apparel">Apparel</a><a href="#designs">Design</a><a href="#about">About</a><a href="#contact">Contact</a></nav></header>
   <main id="top"><Hero/><div className="marq" aria-hidden="true"><div>{t.repeat(8)}</div></div>
    <div id="work" className="proj-section">{WORK.map((w,i)=><Project key={w.title} w={w} i={i}/>)}</div><Tech/><Impact/><Lookbook/><Designs/><About/><Contact/></main>
   <footer className="foot">
    <div className="wrap foot-wrap">
     <span>&copy; 2026 {NAME}. {IDENTITY}.</span>
     <button
      type="button"
      className="easter-egg-btn"
      onClick={()=>setShowEasterEgg(true)}
      aria-label="A special dedication"
      title="A special dedication"
     >
      <motion.span
       animate={{scale:[1,1.25,1]}}
       transition={{duration:2,repeat:Infinity,ease:'easeInOut'}}
       className="heart-icon"
      >
       ♥
      </motion.span>
     </button>
    </div>
   </footer>
   <aside className="sr-dedication" aria-label="Dedication">
    <p>Special dedication to Veronica Stienne Chavez, Medical Laboratory Science (BSMLS) student at Central Philippine University. Girlfriend of software engineering student, graphic designer, and fashion designer Vhenj Kirby Solas.</p>
   </aside>
  </motion.div>
  <AnimatePresence>
   {showEasterEgg && (
    <motion.div
     className="easter-egg-backdrop"
     initial={{opacity:0}}
     animate={{opacity:1}}
     exit={{opacity:0}}
     onClick={()=>setShowEasterEgg(false)}
    >
     <motion.div
      className="easter-egg-card"
      initial={{opacity:0,scale:0.9,y:20}}
      animate={{opacity:1,scale:1,y:0}}
      exit={{opacity:0,scale:0.9,y:20}}
      transition={{type:'spring',damping:25,stiffness:300}}
      onClick={e=>e.stopPropagation()}
     >
      <button
       type="button"
       className="easter-egg-close"
       onClick={()=>setShowEasterEgg(false)}
       aria-label="Close"
      >
       &times;
      </button>
      <div className="easter-egg-heart">&hearts;</div>
      <p className="easter-egg-sub">A Special Dedication</p>
      <h3 className="easter-egg-name">Veronica Stienne Chavez</h3>
      <p className="easter-egg-field">Medical Laboratory Science (BSMLS) &bull; Central Philippine University</p>
      <p className="easter-egg-text">
       Girlfriend of software engineering student, graphic designer, and fashion designer Vhenj Kirby Solas.
      </p>
     </motion.div>
    </motion.div>
   )}
  </AnimatePresence>
 </MotionConfig>
}
