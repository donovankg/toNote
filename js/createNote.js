define(function () {
	var article = document.getElementsByTagName('article')[0];   
	function addNewNote(event){
		var make = new Note();
		var count;
	}
    function  Note (title,description){

		var newDiv = document.createElement('div');
		var newX = document.createElement('button');
		var newTxt = document.createElement('p');
		var newTitle = document.createElement('p');
		article.appendChild(newDiv);
		newDiv.appendChild(newTitle);
		newDiv.appendChild(newX);
		newDiv.appendChild(newTxt);
		newDiv.className="addNote new";
		newX.className="xBtn";
		newTitle.className = "noteTitle";
		newTxt.className = "noteContent";
		newX.innerHTML = "X";
		newTitle.innerHTML = "title place holder";
		newTxt.innerHTML= "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
	}
	return addNewNote;
});