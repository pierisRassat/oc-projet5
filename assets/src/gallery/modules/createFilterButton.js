export default function createFilterButton(tag) {
  const filterContainer = document.querySelector('.filter-container')

  const fieldset = document.createElement('fieldset')
  const legend = document.createElement('legend')

  const label = document.createElement('label')
  label.htmlFor = `filter-${tag}`
  label.textContent = tag
  label.setAttribute('class', 'filter-nav-link')

  const input = document.createElement('input')
  input.type = 'radio'
  input.name = 'filter'
  input.id = `filter-${tag}`
  input.value = tag

  fieldset.appendChild(legend)
  fieldset.appendChild(label)
  fieldset.appendChild(input)
  filterContainer.appendChild(fieldset)
}

