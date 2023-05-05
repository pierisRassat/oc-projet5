import createErrorModal from './modules/createErrorModal.js'
import createDefaultFilterButton from './modules/createDefaultFilterButton.js'
import createFilterButton from './modules/createFilterButton.js'
import handleButtonFilter from './modules/handleButtonFilter.js'
import handleLightBox from './modules/handleLightBox.js'

if (document.querySelector('.gallery')) {
  if (document.querySelector('.gallery-item')) {
    const galleryItems = document.querySelectorAll('.gallery-item')
    const tagSet = new Set()
    galleryItems.forEach((item) => {
      const galleryTag = item.getAttribute('data-gallery-tag')
      if (galleryTag) {
        tagSet.add(galleryTag)
      } else {
        createErrorModal(`${item.getAttribute('src')} element does not have a gallery tag`)
      }
    })
    createDefaultFilterButton()
    tagSet.forEach((tag) => {
      createFilterButton(tag)
      handleButtonFilter()
    })
    handleLightBox()
  } else { 
    createErrorModal('There is no item in the gallery.')
  }
} else {
  createErrorModal('The gallery element is not properly set.')
}

