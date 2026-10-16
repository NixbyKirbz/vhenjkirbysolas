import Portfolio from '@/components/Portfolio'
import {NAME,SITE,DESC,CONTACT,IDENTITY} from '@/data'
export default function Page(){
 const ld=[{'@context':'https://schema.org','@type':'Person',name:NAME,url:SITE,email:CONTACT.Email,jobTitle:IDENTITY,description:DESC,sameAs:[CONTACT.GitHub]},
  {'@context':'https://schema.org','@type':'WebSite',name:`${NAME} Portfolio`,url:SITE}]
 return <>{ld.map((x,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(x)}}/>)}<Portfolio/></>
}
