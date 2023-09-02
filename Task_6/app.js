// Store the URL of an image for each priority level.
const priorityImages = {
  low: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Flag-green.png',
  medium: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Flag-yellow.png',
  high: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Flag-red.png',
};
//Check for existing items in list
const todoList = document.querySelectorAll('.todo');
console.log(todoList);
//Select the whole form element
const form = document.querySelector('form');
//Select the title input element
const titleInput = form.elements.title;
//Select the priority selection element
const prioritySelect = form.elements.priority;

//List related elements
//Ul element
const todoPane = document.getElementById('todo-pane');
const allTodos = document.getElementsByClassName('todo');

// Add an event listener that will
// 1. Create a new todo. The details should come from the form.
// 2. Insert it into the DOM.
// 3. Clear the title input ready to create a new todo note.
// 4. Prevent the default behaviour (ie don't submit to a server).
form.addEventListener('submit', (e) => {
  //Prevent form submition
  e.preventDefault();
  
  //Create new todo list item from user input and add to ul list
  //reset form after to refresh the input
  const newTodoItem = createTodo(titleInput.value, prioritySelect.value);
  todoPane.appendChild(newTodoItem);
  form.reset();
  
  //Add a click listener to new to do item, and if clicked delete it by calling delete function  
  newTodoItem.addEventListener('click', () => {
  deleteTodoItem(newTodoItem);
  });
});

 createTodo = (title,priority) => {
       
        // Create the text node with the variable 'title'.
        const titleTextNode = document.createTextNode(title);
        // Create a new list item element to contain the text node.
        const noteDivNode = document.createElement("div");
        noteDivNode.appendChild(titleTextNode);  
        const newListItem = document.createElement('li');
        const priorityImage = document.createElement('img');
        //The image src will be the priority value of low.medium, high as assigned in the object array
        priorityImage.src = priorityImages[priority];
       //Append note priority image, and text to li
        newListItem.appendChild(priorityImage);
        newListItem.appendChild(noteDivNode);
        //Give new note class name todo
        newListItem.classList.add('todo','just-created');
        
        // Return the new note.
        return newListItem;
      }
 
//Function to delete item
 function deleteTodoItem (toDoItem) {
   toDoItem.remove();
 } 

//Listen for and delete existing items if found in list on page refresh
 todoList.forEach(todoItem => {
      todoItem.addEventListener('click', (event) => {
       deleteTodoItem(todoItem);
      });
    });
 
