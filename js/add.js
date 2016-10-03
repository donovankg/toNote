define(function() {

  var addBtn = document.getElementById('addBtn');
    if (localStorage.length > 0) {
        (function() {
            for (var key in localStorage) {
                var node = JSON.parse(localStorage[key]);
                var article = document.getElementsByTagName('article')[0]; //adds to the local after putting this in a mudule.
                var getDate;
                var newDiv = document.createElement('div');
                var newX = document.createElement('button');
                var newTxt = document.createElement('p');
                var newTitle = document.createElement('p');
                var newDate = document.createElement('p');
                var editDate = document.createElement('p');
                newDiv.IdName = key;
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
                newTitle.textContent = node.title;
                newTxt.textContent = node.content;
                newDate.innerHTML = node.date;
                newDiv.appendChild(editDate);
                editDate.className = "editDate";
                editDate.textContent = node.editDate;
            }
        })();
    }
})
