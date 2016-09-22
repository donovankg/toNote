define(function () {
	var article = document.getElementsByTagName('article')[0];   
	var editBox = document.createElement('div');
	var titleInput = document.createElement('input');
	article.addEventListener('click',selectThis, false);

	var title ="";
	var content="";
	function selectThis(event){
		if(event.target.className=="addNote new" || event.target.className=="addNote"){
			
			title = event.target.childNodes[0].innerHTML;
			content = event.target.childNodes[2].innerHTML;
			event.target.className="addNote selected";
			article.appendChild(editBox);
			editBox.className="edit";
			editBox.appendChild(titleInput);
			titleInput.value = title;

	}
//		}else if(event.target.className=="addNote selected"){
			//if(!event.target.className=="noteTitle"||!event.target.className=="noteContent"){
//				event.target.className="addNote";
	if(event.target.className =="saveNote"){

	}
				

				
		}
	}
});