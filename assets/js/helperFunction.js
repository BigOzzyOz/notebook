function abortPost(x) {
  document.getElementById('newPost').classList.remove('newPostAbove');
  document.getElementById('note').classList.add('d-none');
  document.getElementById('saveNote').classList.add('d-none');
  document.getElementById('abortNote').classList.add('d-none');
  document.getElementById('radio').classList.add('d-none');
  deleteBg(x);
}

function addBgImportant(x) {
  document.getElementById(x).classList.remove('bg_todo', 'bg_standard');
  document.getElementById(x).classList.add('bg_important');
}

function addBgStandard(x) {
  document.getElementById(x).classList.add('bg_standard');
  document.getElementById(x).classList.remove('bg_todo', 'bg_important');
}

function addBgTodo(x) {
  document.getElementById(x).classList.add('bg_todo');
  document.getElementById(x).classList.remove('bg_standard', 'bg_important');
}

function archivCount(archivCounter) {
  if (archivCounter < 1) {
    document.getElementById('counterArchive').classList.add('d-none');
  } else {
    document.getElementById('counterArchive').classList.remove('d-none');
    document.getElementById('counterArchive').innerHTML = archivCounter;
  }
}

function closeWindow(id) {
  document.getElementById(id).classList.add('d-none');
  deleteBg(id);
}

function confirmAction(response) {
  answer = response ? 'yes' : 'no';
  ok();
}

function deleteBg(x) {
  document
    .getElementById(x)
    .classList.remove(
      'bg_todo',
      'bg_important',
      'bg_standard',
      'standard',
      'archived',
      'deleted'
    );
}

function displayRadioValue(x) {
  let ele = document.getElementsByName(x);

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) return ele[i].value;
  }
}

function error(x) {
  let errorActions = {
    empty: empty,
    staToArch: staToArch,
    archToArch: archToArch,
    delToArch: delToArch,
    deleteAllPosts: deleteAllPosts,
    delPost: delPost,
    deletePostChoice: deletePostChoice,
  };

  let action = errorActions[x];
  if (action) action();
}

function load() {
  noteTitle = loadArray('noteTitle');
  noteText = loadArray('noteText');
  noteColor = loadArray('noteColor');
  archiveNoteTitle = loadArray('archiveNoteTitle');
  archiveNoteText = loadArray('archiveNoteText');
  archiveNoteColor = loadArray('archiveNoteColor');
  deleteNoteTitle = loadArray('deleteNoteTitle');
  deleteNoteText = loadArray('deleteNoteText');
  deleteNoteColor = loadArray('deleteNoteColor');
}

function loadArray(key) {
  x = localStorage.getItem(key);
  if (x) {
    return JSON.parse(x);
  } else {
    return [];
  }
}

function ok() {
  document.getElementById('error').classList.add('d-none');
  document.getElementById('error').innerHTML = '';
}

function openWindow(id) {
  document.getElementById(id).classList.remove('d-none');
}

function pushOne(toTitle, toText, toColor) {
  let editNoteTitle = document.getElementById('postTitle').value;
  let editNoteText = document.getElementById('postNote').value;
  let editNoteColor = displayRadioValue('rwLabel');

  toTitle.push(editNoteTitle);
  toText.push(editNoteText);
  toColor.push(editNoteColor);
}

function reload(loc) {
  answer = 'maybe';
  closeWindow(loc);
  save();
  render();
}

function save() {
  setArray('noteTitle', noteTitle);
  setArray('noteText', noteText);
  setArray('noteColor', noteColor);
  setArray('archiveNoteTitle', archiveNoteTitle);
  setArray('archiveNoteText', archiveNoteText);
  setArray('archiveNoteColor', archiveNoteColor);
  setArray('deleteNoteTitle', deleteNoteTitle);
  setArray('deleteNoteText', deleteNoteText);
  setArray('deleteNoteColor', deleteNoteColor);
}

function setArray(key, array) {
  localStorage.setItem(key, JSON.stringify(array));
}

function setCounter() {
  let archivCounter = archiveNoteTitle.length;
  let trashCounter = deleteNoteTitle.length;

  archivCount(archivCounter);
  trashCount(trashCounter);
}

function showNewPost() {
  document.getElementById('newPost').classList.add('newPostAbove');
  document.getElementById('note').classList.remove('d-none');
  document.getElementById('saveNote').classList.remove('d-none');
  document.getElementById('abortNote').classList.remove('d-none');
  document.getElementById('radio').classList.remove('d-none');
  document.getElementById('radio').reset();
}

function spliceOne(i, title, text, color) {
  title.splice(i, 1);
  text.splice(i, 1);
  color.splice(i, 1);
}

function trashCount(trashCounter) {
  if (trashCounter < 1) {
    document.getElementById('counterTrash').classList.add('d-none');
  } else {
    document.getElementById('counterTrash').classList.remove('d-none');
    document.getElementById('counterTrash').innerHTML = trashCounter;
  }
}