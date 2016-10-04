
define(function() {
    var article = document.getElementsByTagName('article')[0];
    function addNewNote(event) {
        var make = new Note();
        var count;
    }
    function Note(title, description) {
        var temp = article.children.length;
        var getDate = new Date();
        var newDiv = document.createElement('div');
        var newX = document.createElement('button');
        var newTxt = document.createElement('p');
        var newTitle = document.createElement('p');
        var newDate = document.createElement('p');
        var editDate = document.createElement('p');
        newDiv.IdName = newId;
        article.appendChild(newDiv);
        newDiv.appendChild(newTitle);
        newDiv.appendChild(newX);
        newDiv.appendChild(newTxt);
        newDiv.appendChild(newDate);
        newDiv.className = "addNote new";
        newX.className = "xBtn";
        newDate.className = "createDate";
        newTitle.className = "noteTitle";
        newTxt.className = "noteContent";
        newX.innerHTML = "X";
        newTitle.innerHTML = "click me to edit title";
        newTxt.innerHTML = "click me to edit title";
        newDate.textContent = "created on: " + getDate.toString();
        newDiv.appendChild(editDate);
        editDate.className = "editDate";
        editDate.innerHTML = "";
        stringIt(newTitle, newTxt, newDate, editDate);
    }
    var newId = 1;
    if (!(localStorage.length == 0)) {
        for (var key in localStorage) {
            if (!isNaN(key)&&newId <= Number(key)) {
                newId = Number(key) + 1;
            }
        }
    }
    function stringIt(title, content, date, editDate) {
        noteToString = {
            'title': title.textContent,
            'content': content.textContent,
            'date': date.textContent,
            'editDate': editDate.textContent
        };
        console.log(newId);
        localStorage.setItem(newId, JSON.stringify(noteToString));
        newId++;
    }
    return addNewNote;
});
