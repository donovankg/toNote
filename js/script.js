//iife so it doesn't add stuff into the global scope


requirejs(['js/createNote'],function(fromCreateNote){
	console.log(fromCreateNote);
		var article = document.getElementsByTagName('article')[0];   

	var addBtn = document.getElementById('addBtn');
	
	
	addBtn.addEventListener('click', fromCreateNote, false);

//remove note
var removeNote = function (event){
	if(event.target.className=="xBtn"){
		event.target.parentNode.remove();
	}
    
    };
	//console.log(event.target)
	//console.log('deleted',event.target);
	
article.addEventListener('click',removeNote, false);


})

