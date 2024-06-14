let noteTitle = [];
let noteText = [];
let noteColor = [];
let archiveNoteTitle = [];
let archiveNoteText = [];
let archiveNoteColor = [];
let deleteNoteTitle = [];
let deleteNoteText = [];
let deleteNoteColor = [];
let answer = 'maybe';
load();

function render() {
  let savedPost = document.getElementById('savedPost');
  let archiv = document.getElementById('archiv');
  let trash = document.getElementById('trash');
  savedPost.innerHTML = '';
  archiv.innerHTML = '';
  trash.innerHTML = '';
  renderStandard();
  renderArchiv();
  renderTrash();
  setCounter();
}
