const word = document.getElementById("word")
const wordInput = document.getElementById("word-input")
const plate = document.getElementById("hamburger")
const plateColor = document.getElementById("plate-color")
const scaleInput = document.getElementById("hamburger-scale")
const scaleOutput = document.querySelector('output[for="hamburger-scale"]')

const layers = {
  hamburgerBun: document.getElementById("hamburgerBun"),
  meat: document.getElementById("meat"),
  cheese: document.getElementById("cheese"),
  tomato: document.getElementById("tomato"),
  bottomBun: document.getElementById("bottomBun")
}

function updatePosition(element, positionX, positionY) {
  element.style.transform = `translate(${positionX}px, ${positionY}px)`
}

wordInput.addEventListener("input", function(){
  word.textContent = wordInput.value
})

plateColor.addEventListener("input", function() {
  plate.style.backgroundColor = plateColor.value
})

function connectPositionControls(layerName) {
  const layer = layers[layerName]
  const xInput = document.getElementById(`${layerName === "hamburgerBun" ? "hamburger-bun" : layerName}-x`)
  const yInput = document.getElementById(`${layerName === "hamburgerBun" ? "hamburger-bun" : layerName}-y`)

  function updateLayerPosition() {
    updatePosition(layer, xInput.value, yInput.value)
  }

  xInput.addEventListener("input", updateLayerPosition)
  yInput.addEventListener("input", updateLayerPosition)
  updateLayerPosition()
}

connectPositionControls("hamburgerBun")
connectPositionControls("meat")
connectPositionControls("cheese")
connectPositionControls("tomato")
connectPositionControls("bottomBun")

const meatX = document.getElementById("meat-x")
const meatY = document.getElementById("meat-y")
const cheeseX = document.getElementById("cheese-x")
const cheeseY = document.getElementById("cheese-y")
const tomatoX = document.getElementById("tomato-x")
const tomatoY = document.getElementById("tomato-y")
const bottomBunX = document.getElementById("bottomBun-x")
const bottomBunY = document.getElementById("bottomBun-y")


scaleOutput.textContent = scaleInput.value