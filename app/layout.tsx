import type {Metadata} from 'next'
import {Bricolage_Grotesque,Figtree} from 'next/font/google'
import {SITE,TITLE,DESC,NAME} from '@/data'
import './globals.css'
const head=Bricolage_Grotesque({subsets:['latin'],variable:'--f-head',weight:['700','800']})
const body=Figtree({subsets:['latin'],variable:'--f-body'})
export const metadata:Metadata={metadataBase:new URL(SITE),title:TITLE,description:DESC,authors:[{name:NAME}],
 openGraph:{title:TITLE,description:DESC,url:'/en',siteName:NAME,type:'website',images:['/og.png']},twitter:{card:'summary_large_image'},
 alternates:{canonical:'/en'},robots:{index:true,follow:true}}
export default function L({children}:{children:React.ReactNode}){return <html lang="en" className={`${head.variable} ${body.variable}`}><body>{children}</body></html>}
