requirejs(['js/createNote','js/selected'],function(fromCreateNote, fromSlected){
	var article = document.getElementsByTagName('article')[0];   
	var addBtn = document.getElementById('addBtn');
	addBtn.addEventListener('click', fromCreateNote, false);
//remove note
var removeNote = function (event){
	if(event.target.className=="xBtn"){
		event.target.parentNode.remove();
	}
};	
article.addEventListener('click',removeNote, false);
})

if(localStorage.length > 0){

	for( key in localStorage){
		var node = JSON.parse(localStorage[key]);	
		console.log(node);	
		var article = document.getElementsByTagName('article')[0];   
		var getDate;

		var newDiv = document.createElement('div');
		var newX = document.createElement('button');
		var newTxt = document.createElement('p');
		var newTitle = document.createElement('p');
		var newDate = document.createElement('p');
		var editDate = document.createElement('p');
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
		newTitle.textContent = node.title;
		newTxt.textContent= node.content;
		newDate.innerHTML= node.date;
		newDiv.appendChild(editDate);
		editDate.className = "editDate";
		editDate.textContent = node.editDate;
	}
}