import buildLightBoxIndex from './buildLightBoxIndex.js'
import rewriteUrl from './rewriteUrl.js'

export default function handleLightBoxNavButton() {
  if (document.querySelector('.lightbox-modal-wrapper')) {
    const lightboxImg = document.querySelector('.lightbox-modal img')
    const prevButton = document.querySelector('.lightbox-prev-button')
    const nextButton = document.querySelector('.lightbox-next-button')
    const urls = buildLightBoxIndex()
    let currentUrlIndex = 0

    prevButton.addEventListener('click', () => {
      currentUrlIndex = (currentUrlIndex - 1 + urls.length) % urls.length
      const newSrc = rewriteUrl(urls[currentUrlIndex])
      lightboxImg.setAttribute('src', newSrc)
    })

    nextButton.addEventListener('click', () => {
      currentUrlIndex = (currentUrlIndex + 1) % urls.length
      const newSrc = rewriteUrl(urls[currentUrlIndex])
      lightboxImg.setAttribute('src', newSrc)
    })
  }
}

