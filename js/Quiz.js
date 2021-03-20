class Quiz {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        question = new Question()
        question.display();
      }
    }
  
    play(){
      question.hide();
      background("lightblue");
      fill(0);
      textSize(30);
      text("quiz results",340, 50);
      text("----------------",335, 65);
      Contestant.getcontestantInfo();
      if(allContestants !== undefined){
        // debugger;
        var display_Answers = 230;
        fill("grey");
        textSize(20);
        text("*note: if your name is green, then you got it right",130,230);
  
        for(var plr in allContestants){
          // debugger;
          var correctAns = "2";
          if (correctAns === allContestants[plr].answer)
            fill("Green")
          else
            fill("red");
  
          display_Answers+=30;
          textSize(20);
          text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
        }
      }
    }
  }