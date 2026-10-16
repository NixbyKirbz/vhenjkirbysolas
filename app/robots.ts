import {SITE} from '@/data'
export default function robots(){return {rules:{userAgent:'*',allow:'/'},sitemap:`${SITE}/sitemap.xml`}}
