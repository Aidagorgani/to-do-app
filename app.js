function onReady() {
  let close = document.getElementsByClassName("close");
  let i;
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
  const addToDoForm = document.getElementById("addToDoForm");
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', event => {
  event.preventDefault();
  // get the text
  let title = newToDoText.value;
  // create a new li
  let newLi = document.createElement('li');
  // create a new input
  let checkbox = document.createElement('input');
  // set the input's type to checkbox
  checkbox.type = "checkbox";
  // set the title
  newLi.textContent = title;
  // attach the checkbox to the li
  //newLi.appendChild(checkbox);
  // attach the li to the ul
  toDoList.appendChild(newLi);
  //empty the input
  newToDoText.value = '';
  let button = document.createElement("button");
  let txt = document.createTextNode("\u00D7");
  button.className = "close";
  button.appendChild(txt);
  newLi.appendChild(button);
  for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";}
  }
});
}
window.onload = function() {
  alert("The window has loaded!");
  onReady();
}
