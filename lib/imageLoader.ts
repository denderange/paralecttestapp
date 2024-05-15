'use client'

import { POSTER_BASE_URL } from "./baseUrl"

type ImageLoader = {
  src: string,
  width: number,
  quality: number
}
 
export default function myImageLoader({ src, width, quality }:ImageLoader) {
  const url = new URL(`https://example.com${src}`)
  const params = url.searchParams
  params.set('format', params.getAll('format').join(',') || 'optimal')
  params.set('w', params.get('w') || width.toString())
  params.set('q', (quality || 85).toString())
  return url.href
}