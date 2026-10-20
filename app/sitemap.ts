import {SITE} from '@/data'
import {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
 return [
  {
   url: `${SITE}/en`,
   lastModified: new Date(),
   changeFrequency: 'weekly',
   priority: 1.0,
  }
 ]
}
