define(function () {
	var article = document.getElementsByTagName('article')[0];   
	function addNewNote(event){
		var make = new Note();
		var count;
	}
    function  Note (title,description){
    	var getDate = new Date();
		var newDiv = document.createElement('div');
		var newX = document.createElement('button');
		var newTxt = document.createElement('p');
		var newTitle = document.createElement('p');
		var newDate = document.createElement('p');
		article.appendChild(newDiv);
		newDiv.appendChild(newTitle);
		newDiv.appendChild(newX);
		newDiv.appendChild(newTxt);
		newDiv.appendChild(newDate);
		newDiv.className="addNote new";
		newX.className="xBtn";
		newDate.className = "createDate";
		newTitle.className = "noteTitle";
		newTxt.className = "noteContent";
		newX.innerHTML = "X";
		newTitle.innerHTML = "";
		newTxt.innerHTML= "";
		newDate.innerHTML= "created on: "+getDate.toString();
	}
	return addNewNote;
});