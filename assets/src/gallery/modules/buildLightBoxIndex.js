export default function buildLightBoxIndex() {
  let urls = []
  const galleryItems = document.querySelectorAll('.gallery img:not(.filter-hidden)')
  galleryItems.forEach((item) => {
    const imgUrl = item.getAttribute('src')
    urls.push(imgUrl)
  })
  return urls
}

