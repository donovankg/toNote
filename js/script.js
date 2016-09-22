//creates note
requirejs(['js/createNote'],function(fromCreateNote){
//	console.log(fromCreateNote);
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

//selects the note for edit
requirejs(['js/selected'],function(fromSlected) {
	console.log(fromSlected);
})

//edits the content of the selected target
