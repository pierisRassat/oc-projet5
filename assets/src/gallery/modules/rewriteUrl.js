export default function rewriteUrl(url) {
  const pattern = /(_[0-9]+×[0-9]+)\.[a-z]+$/
  const newSuffix = '_1920.webp'
  return url.replace(pattern, newSuffix)
}

