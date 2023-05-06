import handleLightBoxNavButton from './handleLightBoxNavButton.js'

export default function createLightBoxModal(url) {
  const lightBoxWrapper = document.createElement('div')
  lightBoxWrapper.setAttribute('class', 'lightbox-modal-wrapper')

  const lightBoxModal = document.createElement('div')
  lightBoxModal.setAttribute('class', 'lightbox-modal')

  const lightBoxImage = document.createElement('img')
  lightBoxImage.src = url
  lightBoxImage.alt = 'Contenu de l\'image affichée dans la modale au click'

  const prevButton = document.createElement('button')
  prevButton.setAttribute('class', 'lightbox-prev-button')
  prevButton.textContent = '<'

  const nextButton = document.createElement('button')
  nextButton.setAttribute('class', 'lightbox-next-button')
  nextButton.textContent = '>'

  lightBoxModal.appendChild(prevButton)
  lightBoxModal.appendChild(lightBoxImage)
  lightBoxModal.appendChild(nextButton)
  lightBoxWrapper.appendChild(lightBoxModal)

  document.body.appendChild(lightBoxWrapper)

  lightBoxWrapper.addEventListener('click', (event) => {
    if (event.target === lightBoxModal || event.target === lightBoxWrapper) {
      lightBoxWrapper.remove()
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      lightBoxWrapper.remove()
    }
  })
  handleLightBoxNavButton()
}

