// Aiden McLeod
// ICS2O-Assignment5-HTML
// April 25 2022

'use strict'
/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment5-HTML/sw.js", {
    scope: "/ICS2O-Assignment5-HTML/",
  })
}

/**
 * Finds the value of pi using the user's number of iterations.
 */
function onButtonClick() {
  var numberOfIterations = document.getElementById("number-of-iterations").value
  var currentAction = "minus"
  var number = 1
  var pi
  
  pi = (4 / number)
  while (numberOfIterations > 1) {
    if (currentAction == "minus") {
      number = number + 2
      pi = pi - (4 / number)
      currentAction = "plus"
    } else if (currentAction == "plus") {
      number = number + 2
      pi = pi + (4 / number)
      currentAction = "minus"
    }
    numberOfIterations = numberOfIterations - 1
  }
  currentAction = "minus"
  number = 1
  document.getElementById("result").innerHTML = "<p>π is equal to " + pi + "</p>"
}