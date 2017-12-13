var GameView = function(games){
  this.render(games);
}

GameView.prototype = {
  render: function(games){

    console.log(games);
    games.forEach( function(game){
      var li = document.createElement('li');
      var text = document.createElement('p');
      var ul = document.getElementById('games');
      text.innerText = game.name + ": " + "" + game.rating + '' + game.genre;
      li.appendChild(text);
      ul.appendChild(li);
    })
  }
}

 module.exports = GameView;
