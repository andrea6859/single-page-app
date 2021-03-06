// make document ready
// read index.html file and remove form entry
// instantiate Note with data from form

function ready(fn) {
  if(document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  // use JS to listen to form text input and submit
  var list = new List();

  document.getElementById('create_note').onclick = function(){
    var text = document.getElementById('notes_input').value;
    var note = new Note(text);
    list.save(note);
    listNotes();
  };

  function listNotes() {
     var ulist = document.getElementById("list");
     var newItem = document.createElement("li");
     var a = document.createElement("a");
     var short = (list.notes.slice(-1)[0].abbreviated);
     a.textContent = short + "...";
     a.setAttribute('href', "#");
     newItem.setAttribute('id', 'notes_list');
     newItem.setAttribute('target', (ulist.children.length));
     newItem.appendChild(a);
     ulist.appendChild(newItem);
 }

 document.getElementById("list").onclick = function() {
   document.getElementById("single_view").innerHTML = list.notes[0].text;
 };
});
