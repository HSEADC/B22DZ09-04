const heightOfViewport = window.innerHeight
const fortyPercentOfViewport = heightOfViewport * 0.4

window.addEventListener('scroll', () => {
  const watchedElement1 = document.getElementById('first-item')
  const watchedElement = document.getElementById('second-item')
  const watchedElement2 = document.getElementById('third-item')
  const watchedElement3 = document.getElementById('fourth-item')
  const colorChangedElement = document.getElementById('first')
  const colorChangedElement2 = document.getElementById('second')
  const colorChangedElement3 = document.getElementById('third')
  const colorChangedElement4 = document.getElementById('fourth')
  const targetHeight = fortyPercentOfViewport

  const rect = watchedElement.getBoundingClientRect()
  const rect2 = watchedElement2.getBoundingClientRect()
  const rect3 = watchedElement1.getBoundingClientRect()
  const rect4 = watchedElement3.getBoundingClientRect()

  if (rect3.top <= targetHeight) {
    colorChangedElement.classList.add('now')
  }
  if (rect.top <= targetHeight) {
    colorChangedElement2.classList.add('now')
    colorChangedElement.classList.remove('now')
  } else {
    colorChangedElement2.classList.remove('now')
  }
  if (rect2.top <= targetHeight) {
    colorChangedElement3.classList.add('now')
    colorChangedElement2.classList.remove('now')
  } else {
    colorChangedElement3.classList.remove('now')
  }
  if (rect4.top <= targetHeight) {
    colorChangedElement4.classList.add('now')
    colorChangedElement3.classList.remove('now')
  } else {
    colorChangedElement4.classList.remove('now')
  }
})
