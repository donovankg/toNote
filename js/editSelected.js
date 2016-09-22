define(function () {
	var article = document.getElementsByTagName('article')[0];   
	article.addEventListener('click',selectThis, false);
	function selectThis(event){
		if(event.target.className=="addNote"){
			console.log(event.target.className);
			event.target.className="addNote selected"
		}else if(event.target.className=="addNote selected"){
			event.target.className="addNote";
			//add code to save data into the local storage
		}
	}
});