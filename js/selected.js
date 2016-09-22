define(function () {
	var article = document.getElementsByTagName('article')[0];   
	var editBox = document.createElement('div');
	var titleInput = document.createElement('input');
	var contentInput = document.createElement('textarea');
	article.addEventListener('click',selectThis, false);
	article.addEventListener('click',saveNote, false);
	var currentNote;
	var title ="";
	var content="";

	function selectThis(event){
		if(event.target.className=="addNote new" || event.target.className=="addNote"){
			currentNote = event.target;
			title = currentNote.childNodes[0].innerHTML;
			content = currentNote.childNodes[2].innerHTML;
			currentNote.className="addNote selected";
			article.appendChild(editBox);
			editBox.className="edit";
			editBox.appendChild(titleInput);
			titleInput.value = title;
			titleInput.className="titleInput"
			editBox.appendChild(contentInput);
			contentInput.value = content;
			contentInput.className = "contentInput";
			var title = event.target.childNodes[0].innerHTML;
			
	}
}
//		}else if(event.target.className=="addNote selected"){
			//if(!event.target.className=="noteTitle"||!event.target.className=="noteContent"){
//				event.target.className="addNote";
	function saveNote(event){
		if(event.target.className=="edit"){
			console.log(title);
			// newTitle.innerHTML = title;
			// newTxt.innerHTML= content;
			currentNote.childNodes[0].innerHTML = titleInput.value;
			currentNote.childNodes[2].innerHTML = contentInput.value;
			event.target.remove();
			currentNote.className="addNote";



	}
		}
	
});