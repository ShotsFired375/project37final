class Question {

    constructor() {
      this.title = createElement('h1')
      this.input1 = createInput("name");
      this.input2 = createInput("answer number");
      this.button = createButton('submit');
      this.question = createElement('h3');
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');
    }
  
    hide(){
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      this.input2.hide();
    }
  
    display(){
      this.title.html("myQuiz game");
      this.title.position(340, 0);
  
      this.question.html("question: what starts and ends with the letter ‘e’, but has only one letter? " );
      this.question.position(150, 70);
      this.option1.html("1: everyone " );
      this.option1.position(150, 105);
      this.option2.html("2: envelope" );
      this.option2.position(150, 125);
      this.option3.html("3: estimate " );
      this.option3.position(150, 145);
      this.option4.html("4: example" );
      this.option4.position(150, 165);
  
      this.input1.position(150, 230);
      this.input2.position(350, 230);
      this.button.position(290, 300);
  
      this.button.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
    }
  }