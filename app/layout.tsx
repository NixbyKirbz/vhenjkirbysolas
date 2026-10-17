import type {Metadata} from 'next'
import {Bricolage_Grotesque,Figtree} from 'next/font/google'
import {SITE,TITLE,DESC,NAME} from '@/data'
import './globals.css'
const head=Bricolage_Grotesque({subsets:['latin'],variable:'--f-head',weight:['700','800']})
const body=Figtree({subsets:['latin'],variable:'--f-body'})
export const metadata:Metadata={
 metadataBase:new URL(SITE),
 title:{
  default:TITLE,
  template:`%s | ${NAME}`,
 },
 description:DESC,
 keywords:[
  'Vhenj Kirby Solas',
  'Vhenj Kirby',
  'Solas',
  'Central Philippine University',
  'CPU Software Engineering',
  'Software Engineer Philippines',
  'Web Developer Philippines',
  'Full Stack Developer',
  'Graphic Designer Philippines',
  'Next.js Developer',
  'React Developer',
  'Catleya',
  'K-Tindahan',
  'Portfolio',
  'Veronica Stienne Chavez',
  'Veronica Stienne Chavez CPU',
  'Veronica Chavez'
 ],
 authors:[{name:NAME,url:SITE}],
 creator:NAME,
 publisher:NAME,
 category:'technology',
 alternates:{canonical:'/en'},
 openGraph:{
  title:TITLE,
  description:DESC,
  url:'/en',
  siteName:`${NAME} Portfolio`,
  locale:'en_US',
  type:'website',
  images:[{url:'/og.png',width:1200,height:630,alt:`${NAME} - Software Engineering Student & Web Developer`}]
 },
 twitter:{
  card:'summary_large_image',
  title:TITLE,
  description:DESC,
  images:['/og.png']
 },
 robots:{
  index:true,
  follow:true,
  googleBot:{
   index:true,
   follow:true,
   'max-video-preview':-1,
   'max-image-preview':'large',
   'max-snippet':-1
  }
 },
 other:{
  'msvalidate.01':'B61783828AF928852453989F4B558ADD'
 }
}
export default function L({children}:{children:React.ReactNode}){return <html lang="en" className={`${head.variable} ${body.variable}`}><body><noscript><style>{"[style*=\"opacity: 0\"],[style*=\"opacity:0\"]{opacity:1!important;transform:none!important;clip-path:none!important}"}</style></noscript>{children}</body></html>}
