const form = document.querySelector('#form')
const inputName = document.querySelector('#name')
const inputNumber = document.querySelector("#number")
const inputScore = document.querySelector('#score')
const inputSubmit = document.querySelector("#submit")

inputSubmit.addEventListener('click' , getData)
window.addEventListener('beforeunload' , noRefresh)

function noRefresh (e){
e.preventDefault()
}

function getData(){
    let nameValue = inputName.value
    let numberValue = inputNumber.value
    let scoreValue = inputScore.value

   let nameValueStringified =  JSON.stringify(nameValue)
   let numberValueStringified = JSON.stringify(numberValue)
   let scoreValueStringified = JSON.stringify(scoreValue)

   localStorage.setItem('name' , nameValueStringified)
   localStorage.setItem('number' , numberValueStringified)
   localStorage.setItem('score' , scoreValueStringified)


   let nameValueParsed = JSON.parse(nameValueStringified)
   let numberValueParsed = JSON.parse (numberValueStringified)
   let scoreValueParsed = JSON.parse(scoreValueStringified)
  
   let result = []
   result.push('Name:', nameValueParsed)
   result.push( 'Number:',numberValueParsed)
   result.push('Score:',scoreValueParsed)
   result.push('id:' , Date.now()+Math.floor(Math.random()))
   
   let displayOfResult = document.createElement('div')
   document.body.append(displayOfResult)
   displayOfResult.textContent = result
   
}
