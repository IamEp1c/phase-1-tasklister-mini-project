// Deliverables
// As a user, I should be able to type a task into the input field. //
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.
// document.addEventListener('DOMContentLoaded', (e) =>{
//     e.preventDefault();

// })  // end of DOMContentLoaded

// grabbing the elements i need

const form = document.querySelector('#create-task-form')
const inputField = document.querySelector('#new-task-description')
const ul = document.querySelector('#tasks')



// add event listener 

form.addEventListener('submit', (e) =>{
  e.preventDefault(); 
  const li = document.createElement('li')
  // debugger; 
  li.textContent = inputField.value 


  console.log(inputField.value)
  console.log(li.textContent)


  // slap it to the DOM 
  ul.append(li) // the ul is already appended to the dom so all you have to do now is append the lis onto ul 

})







