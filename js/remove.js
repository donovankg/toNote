define(function() {
    var article = document.getElementsByTagName('article')[0];
    var removeNote = function(event) {
        if (event.target.className == "xBtn") {
            event.target.parentNode.remove();
            for (var key in localStorage) {
                if (key == event.target.parentNode.IdName) {
                    localStorage.removeItem(key);
                }
            }
        }
    };
    article.addEventListener('click', removeNote, false);
})
