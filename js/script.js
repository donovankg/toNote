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