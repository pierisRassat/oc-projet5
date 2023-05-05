export default function filterButtonListener() {
  const filterButtons = document.querySelectorAll('.filter-container input[type="radio"]')
  filterButtons.forEach((button) => {
    button.addEventListener('change', () => {
      const selectedTag = button.value
      const galleryItems = document.querySelectorAll('.gallery img')
      galleryItems.forEach((item) => {
        const galleryTag = item.getAttribute('data-gallery-tag')
        if (galleryTag !== selectedTag && selectedTag !== 'Tous') {
          item.classList.add('filter-hidden')
        } else {
          item.classList.remove('filter-hidden')
        }
      })
      const labels = document.querySelectorAll('.filter-container label')
      labels.forEach((label) => {
        if (label.getAttribute('for') === event.target.id) {
          label.classList.add('filter-active')
        } else {
          label.classList.remove('filter-active')
        }
      })
    })
  })
}

