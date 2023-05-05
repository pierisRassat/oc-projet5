import createLightBoxModal from './createLightBoxModal.js'
import rewriteUrl from './rewriteUrl.js'

export default function handleLightBox() {
  const galleryItems = document.querySelectorAll('.gallery img:not(.filter-hidden)')
  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const imgUrl = item.getAttribute('src')
      const imgLightBoxUrl = rewriteUrl(imgUrl)
      if (!document.querySelector('.lightbox-modal')) {
        createLightBoxModal(imgLightBoxUrl)
      }
    })
  })
}

