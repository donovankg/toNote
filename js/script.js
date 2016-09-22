//iife so it doesn't add stuff into the global scope



(function(){
	var article = document.getElementsByTagName('article')[0];
	var addBtn = document.getElementById('addBtn');
		
	
	var Note = function(title,description){
		var newDiv = document.createElement('div');
		var newX = document.createElement('button');
		article.appendChild(newDiv);
		newDiv.appendChild(newX);
		newDiv.className="addNote";
		newX.className="xBtn";
		newX.innerHTML = "X";

	}
	var addNewNote = function (event){
		var make = new Note();

	}
	addBtn.addEventListener('click', addNewNote, false);

//remove note
var removeNote = function (event){
	if(event.target.className=="xBtn"){
		event.target.parentNode.remove();
	}
	//console.log(event.target)
	//console.log('deleted',event.target);
}
article.addEventListener('click',removeNote, false);

})();