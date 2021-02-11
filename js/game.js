class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",(data)=>{
             gameState = data.val();
        });
        console.log(gameState);
    }

    update(state){
        database.ref("/").update({
            gameState: state
        })
    }

    async start(){
       if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref("playerCount").once("value");
          if (playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
          }
          form = new Form();
          console.log(form);
          form.display();
       }
    }

    play(){
        form.hide();
        Player.getPlayerInfo();
        console.log(allPlayers);
    }
}