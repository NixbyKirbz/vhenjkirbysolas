import Portfolio from '@/components/Portfolio'
import {NAME,SITE,DESC,CONTACT} from '@/data'
export default function Page(){
 const ld=[{'@context':'https://schema.org','@type':'Person',name:NAME,url:SITE,jobTitle:'Software Engineering Student, Web Developer & Graphic Designer',description:DESC,sameAs:Object.values(CONTACT).filter(v=>v.startsWith('http'))},
  {'@context':'https://schema.org','@type':'WebSite',name:`${NAME} Portfolio`,url:SITE}]
 return <>{ld.map((x,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(x)}}/>)}<Portfolio/></>
}
