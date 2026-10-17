import {SITE} from '@/data'
import {MetadataRoute} from 'next'

export default function robots(): MetadataRoute.Robots {
 return {
  rules: {
   userAgent: '*',
   allow: '/',
  },
  sitemap: `${SITE}/sitemap.xml`,
 }
}
