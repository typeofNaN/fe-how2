window.onload = function () {
  getRem(640, 100)
}

window.onresize = function () {
  getRem(640, 100)
}

function getRem(width, prem) {
  const html = document.getElementsByTagName('html')[0]
  const oWidth = document.body.clientWidth || document.documentElement.clientWidth
  if (oWidth < 768) {
    html.style.fontSize = oWidth / width * prem + 'px'
  } else {
    html.style.fontSize = 12 + 'px'
  }
}