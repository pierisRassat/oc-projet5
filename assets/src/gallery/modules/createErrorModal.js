export default function createErrorModal(errorMessage) {
  const modalWrapper = document.createElement('div')
  modalWrapper.setAttribute('class', 'error-modal-wrapper')
  
  const modal = document.createElement('div')
  modal.setAttribute('class', 'error-modal')
  
  const errorTitle = document.createElement('h2')
  errorTitle.textContent = 'Gallery error:'

  const errorText = document.createElement('p')
  errorText.textContent = errorMessage

  const errorNext = document.createElement('p')
  errorNext.textContent = 'More…'
  
  modal.appendChild(errorTitle)
  modal.appendChild(errorText)
  modal.appendChild(errorNext)
  
  document.body.appendChild(modalWrapper)
  modalWrapper.appendChild(modal)
  
  modal.addEventListener('click', () => {
    modalWrapper.remove()
  })
}

