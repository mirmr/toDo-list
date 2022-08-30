
showItems()
let todos = [];
function showItems() {
    let notes = JSON.parse(localStorage.getItem('todos'))
    let notesElems
    if (notes == null) {
        notesElems = [];
    } else {
        notesElems = notes
    }

    let container = document.getElementById('notes');
    let notesHTML = '';
    notesElems.forEach(function (elem, ind) {
        notesHTML += `<li class="task-item">
                <input type="checkbox" class="checkbox">
                <div class ="task-content">
                <h5 class="task-title">Note ${ind + 1}</h5>
                <p class="task-text">${elem}</p></div>
                <div class="small-container">
                    <button id="${ind}" onclick="deleteItem(this.id)" class="btn-close">&#9587;</buttonid>
                    
                </div>
            </li>
`
    })
    if (!notesHTML) notesHTML = 'Please create new note'
container.innerHTML = notesHTML;
}


let addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click', function(){
    let textInput = document.getElementById('task-text');
    let value = textInput.value;
    let notes = JSON.parse(localStorage.getItem('todos')) || [];
    notes.push(value)
    localStorage.setItem('todos', JSON.stringify(notes ))
    showItems()
})
 function  deleteItem(index){
    let notes = JSON.parse(localStorage.getItem('todos'))
     notes.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(notes))
     showItems()
 }
let delAll = document.getElementById('delAll')
delAll.addEventListener('click', function(){
    let notes = JSON.parse(localStorage.getItem('todos'))
    notes.splice(0, notes.length)
    localStorage.setItem('todos', JSON.stringify(notes ))
    showItems()
})







function saveTask() {
    let allTask = document.querySelector('.all');
    localStorage.setItem('tasks', JSON.stringify(todos));
    allTask.textContent = `${todos.length}`;

}