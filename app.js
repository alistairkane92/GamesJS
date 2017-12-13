var makeRequest = function(url, callback){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', callback);
    request.send();
}

var requestComplete = function(){
    if (this.status != 200) return;

    var jsonString = this.responseText;
    var games = JSON.parse(jsonString);
    var ui = new GameView(games);
}

var app = function(){
    var url = "/games"
    makeRequest(url, requestComplete);
}

window.addEventListener('load', app);
