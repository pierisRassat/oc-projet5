export default function createDefaultFilterButton() {
  const filterContainer = document.querySelector('.filter-container')

  const label = document.createElement('label')
  label.htmlFor = 'filter-all'
  label.textContent = 'Tous' 
  label.setAttribute('class', 'filter-nav-link filter-active')

  const input = document.createElement('input')
  input.type = 'radio'
  input.name = 'filter'
  input.id = 'filter-all'
  input.value = 'Tous'

  filterContainer.appendChild(label)
  filterContainer.appendChild(input)
}


