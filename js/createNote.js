
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
        var test = localStorage.length + 1;
        newDiv.IdName = test;
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
    function stringIt(title, content, date, editDate) {
        noteToString = {
            'title': title.textContent,
            'content': content.textContent,
            'date': date.textContent,
            'editDate': editDate.textContent
        };
        var newId = 1;
        var largest;
        if (localStorage.length == 0) {
        } else {
            for (var key in localStorage) {
                largest = Number(key);
                if (!isNaN(key)) {
                    newId = largest + 1;
                }
            }
        }
        localStorage.setItem(newId, JSON.stringify(noteToString));
    }
    return addNewNote;
});
