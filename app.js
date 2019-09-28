function onReady() {
  let toDos = [];
  let id = 0;
  let close = document.getElementsByClassName("close");
  const addToDoForm = document.getElementById('addToDoForm');
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
  function createNewToDo (){
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      Id: id
    });
    newToDoText.value = '';
    renderTheUI();
    id++;
  }
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';
    toDos.forEach(function(toDo) {
      let newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const button = document.createElement('button');
      const txt = document.createTextNode("\u00D7");
      button.className = 'close';
      checkbox.type = "checkbox";
      newLi.textContent = toDo.title;
      toDoList.appendChild(newLi);
      //newLi.appendChild(checkbox);
      newLi.appendChild(button);
      button.appendChild(txt);
      button.id = toDo.Id;
      button.addEventListener('click', function(){
        toDos = toDos.filter(e => e.Id != this.id);
        renderTheUI();
      });
    });
  }
}

window.onload = function() {
  alert("The window has loaded!");
  onReady();
}
