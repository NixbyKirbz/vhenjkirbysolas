import Portfolio from '@/components/Portfolio'
import {NAME,SITE,DESC,CONTACT,IDENTITY} from '@/data'

export default function Page(){
 const ld=[
  {
   '@context':'https://schema.org',
   '@type':'Person',
   name:NAME,
   url:`${SITE}/en`,
   email:CONTACT.Email,
   jobTitle:IDENTITY,
   description:DESC,
   address:{
    '@type':'PostalAddress',
    addressCountry:'Philippines'
   },
   alumniOf:{
    '@type':'CollegeOrUniversity',
    name:'Central Philippine University'
   },
   knowsAbout:[
    'Software Engineering',
    'Web Development',
    'Full-Stack Development',
    'Next.js',
    'React',
    'TypeScript',
    'JavaScript',
    'Python',
    'UI/UX Design',
    'Graphic Design'
   ],
   sameAs:[CONTACT.GitHub],
   significantOther:{
    '@type':'Person',
    name:'Veronica Stienne Chavez',
    jobTitle:'Medical Laboratory Science (BSMLS) Student',
    alumniOf:{
     '@type':'CollegeOrUniversity',
     name:'Central Philippine University'
    }
   }
  },
  {
   '@context':'https://schema.org',
   '@type':'Person',
   name:'Veronica Stienne Chavez',
   description:'Medical Laboratory Science (BSMLS) student at Central Philippine University. Girlfriend of the Software Engineering Student Vhenj Kirby Solas.',
   alumniOf:{
    '@type':'CollegeOrUniversity',
    name:'Central Philippine University'
   },
   knowsAbout:['Medical Laboratory Science','BSMLS','Healthcare Sciences'],
   significantOther:{
    '@type':'Person',
    name:NAME,
    jobTitle:'Software Engineering Student, Web Developer, Graphic Designer & Fashion Designer'
   }
  },
  {
   '@context':'https://schema.org',
   '@type':'WebSite',
   name:`${NAME} Portfolio`,
   url:`${SITE}/en`,
   description:DESC,
   inLanguage:'en'
  },
  {
   '@context':'https://schema.org',
   '@type':'ProfilePage',
   mainEntity:{
    '@type':'Person',
    name:NAME
   }
  }
 ]
 return <>{ld.map((x,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(x)}}/>)}<Portfolio/></>
}
