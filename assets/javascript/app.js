$(document).ready(function() {

	$("#choiceOne").hide();
	$("#choiceTwo").hide();
	$("#choiceThree").hide();
	$("#choiceFour").hide();
	$("#correctText").hide();
	$("#incorrectText").hide();

var correctAnswerArray =["Taps" , "John Williams" , "Quentin Tarintino" , "Avatar" , "Nicholas Cage" , "Meryl Streep" ]

var questionCounter = 0

var Clock

var timeCounter = 30

var correctScore = 0

var wrongScore = 0

var selectedAnswer

var questionArray = ["What was Tom Cruise's First Major Movie Role?" , "Who Composes The Music For Star Wars?", "Who Directed Pulp Fiction?" , "What Is Currently the Highest Grossing Movie of All Time?" , "Which Famous Actor Is A Nephew of Director Francis Ford Coppola?" , "Which Actress Has The Most Academy Award Nominations?"]

var choiceArray = [["Mission Impossible" , "Top Gun" ,"A Few Good Men" ,"Taps"] , ["Danny Elfman" , "Ennio Morricone" ,"Hans Zimmer" ,"John Williams"] , ["James Cameron" , "Quentin Tarintino" ,"Steven Spielberg" ,"Francis Ford Coppola"] , ["Furious 7" , "Titanic" ,"Avatar" ,"Star Wars Ep. VII: The Force Awakens"] , ["Nicholas Cage" , "Matt Damon" ,"Brad Pitt" ,"Elija Wood" ] , ["Angelina Jolie" , "Meryl Streep" ,"Judie Dench" ,"Sigourney Weaver"]]

	//Starts Game
$("#startButton").on("click" , function() {
		$("#correctText").hide();
		$("#incorrectText").hide();
		$("#triviaQuestion").show()
		$("#correctResult").hide()
		$("#wrongResult").hide()
		correctScore = 0
		wrongScore = 0
		questionCounter = 0
		timeCounter = 30
     	generateQuestion()

     	
   });

function startGame() {


}

	//$.ajax({
	//	url:
	//	method: "GET"
	//}).done(function(response){
	//	console.log(response)
	//	console.log(response.runtime)
	//})



function between() {
	questionCounter++;
	if (questionCounter <= 5) {
		timeCounter = 30;
		generateQuestion();
	}
	else {
		finishScreen();
	}
}


function onTimeOut() {
	//questionCounter++
	wrongScore++
	$("#triviaQuestion").html("Out of Time")
	$("#explainId").show()
	$("#explainId").html("The Correct Answer was " + correctAnswerArray[questionCounter])
	$(".choices").hide()
	$("#timer").hide();
	setTimeout(between, 5000);  

}

function onCorrect() {
	//questionCounter++
	correctScore++
	$("#triviaQuestion").html("Right")
	$("#explainId").show()
	$("#explainId").html("The Correct Answer was " + correctAnswerArray[questionCounter])
	$(".choices").hide()
	$("#timer").hide();
	setTimeout(between, 5000);


}

function onWrong() {
	//questionCounter++
	wrongScore++
	$("#triviaQuestion").html("Wrong")
	$("#explainId").show()
	$("#explainId").html("The Correct Answer was " + correctAnswerArray[questionCounter])
	$(".choices").hide()
	$("#timer").hide();
	setTimeout(between, 5000);

}	


	function generateQuestion() {


	$( "#startButton" ).hide();
    $("#choiceOne").show();
	$("#choiceTwo").show();
	$("#choiceThree").show();
	$("#choiceFour").show();
	$("#triviaQuestion").html(questionArray[questionCounter])
	$("#explainId").hide()
	$("#choiceOne").html(choiceArray[questionCounter][0])
	$("#choiceTwo").html(choiceArray[questionCounter][1])
	$("#choiceThree").html(choiceArray[questionCounter][2])
	$("#choiceFour").html(choiceArray[questionCounter][3])
	Timer()
	$("#timer").show();
	$("#timer").html(timeCounter)
	

}


function Timer() {
	Clock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (timeCounter === 0) {
			clearInterval(Clock);
			onTimeOut();
		}
		if (timeCounter > 0) {
			timeCounter--;
		}
		$("#timer").html(timeCounter);
	}
}

function resetGame() {

	$("#choiceOne").show();
	$("#choiceTwo").show();
	$("#choiceThree").show();
	$("#choiceFour").show();
	$( "#triviaQuestion" ).html( questionArray[questionCounter] );					
	$( "#choiceOne" ).html( choiceArray[questionCounter] );
	$( "#choiceTwo" ).html( choiceArray[questionCounter] );
	$( "#choiceThree" ).html( choiceArray[questionCounter] );
	$( "#choiceFour" ).html( choiceArray[questionCounter] );


}

function finishScreen() {
	$("choices").hide()
	$("#triviaQuestion").hide()
	$("#explainId").hide()
	$("#correctResult").show()
	$("#wrongResult").show()
	$("#correctResult").html(correctScore)
	$("#wrongResult").html(wrongScore)
	$("#startButton").show()
	$("#correctText").show();
	$("#incorrectText").show();
	//resetGame()
}



$("body").on("click", ".choices", function(event){
	//answeredQuestion = true;
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswerArray[questionCounter]) {
		//alert("correct");

		clearInterval(Clock);
		onCorrect();
	}
	else {
		//alert("wrong answer!");
		clearInterval(Clock);
		onWrong();
	}//

	})

	})

//function afterQuestionOneTimer() {
	//setTimeout(function(){
	//	$( "#triviaQuestion" ).html( questionTwo.question );					
	//$( "#choiceOne" ).html( questionTwo.answerOne );
	//$( "#choiceTwo" ).html( questionTwo.answerTwo );
	//$( "#choiceThree" ).html( questionTwo.answerThree );
	//$( "#choiceFour" ).html( questionTwo.answerFour );



	//}, 8000);
//}

//function afterQuestionTwoTimer() {
	//setTimeout(function(){

	//	$( "#triviaQuestion" ).html( questionThree.question );					
	//$( "#choiceOne" ).html( questionThree.answerOne );
	//$( "#choiceTwo" ).html( questionThree.answerTwo );
	//$( "#choiceThree" ).html( questionThree.answerThree );
	//$( "#choiceFour" ).html( questionThree.answerFour );
//
//		
//	}, 8000);
//}


//function afterQuestionThreeTimer() {
	//setTimeout(function(){
	//	$( "#triviaQuestion" ).html( questionFour.question );					
	//$( "#choiceOne" ).html( questionFour.answerOne );
	//$( "#choiceTwo" ).html( questionFour.answerTwo );
	//$( "#choiceThree" ).html( questionFour.answerThree );
	//$( "#choiceFour" ).html( questionFour.answerFour );

		
	//}, 8000);
//}


//function afterQuestionFourTimer() {
	//setTimeout(function(){
	//	$( "#triviaQuestion" ).html( questionFive.question );					
	//$( "#choiceOne" ).html( questionFive.answerOne );
	//$( "#choiceTwo" ).html( questionFive.answerTwo );
	//$( "#choiceThree" ).html( questionFive.answerThree );
	//$( "#choiceFour" ).html( questionFive.answerFour );

		
	//}, 8000);
//}


//function afterQuestionFiveTimer() {
	//setTimeout(function(){
	//	$( "#triviaQuestion" ).html( questionSix.question );					
	//$( "#choiceOne" ).html( questionSix.answerOne );
	//$( "#choiceTwo" ).html( questionSix.answerTwo );
	//$( "#choiceThree" ).html( questionSix.answerThree );
	//$( "#choiceFour" ).html( questionSix.answerFour );

	//	
	////}, 8000);
//}


//function afterQuestionSixTimer() {
	//setTimeout(function(){
		//$( "#triviaQuestion" ).html( questionOne.question );					
	//$( "#choiceOne" ).html( questionOne.answerOne );
	//$( "#choiceTwo" ).html( questionOne.answerTwo );
	//$( "#choiceThree" ).html( questionOne.answerThree );
	//$( "#choiceFour" ).html( questionOne.answerFoonFour)

		
	//}, 8000);
//}
















//$(".choices").on("click" , function() {
     	//Shows these if answers are correct
     	//if (questionOne.answerFour) {
     		//$( ".choices" ).hide();
     		//$( "#triviaQuestion" ).html("<h2>Correct</h2>")
     		//$( "#explainId" ).html("The Correct Answer Was Tabs");
     		//afterQuestionOneTimer()
     	//}

     	// if(questionTwo.answerFour){
     		//$( ".choices" ).hide();
     		//$( "#triviaQuestion" ).hide();
     		//$( "#triviaQuestion" ).replaceWith("<h2>Correct</h2>")
     		//$( "#explainId" ).html("The Correct Answer Was John Williams");
     		//afterQuestionTwoTimer()

     	//}

     	// if(questionThree.answerTwo){
     		//$( ".choices" ).hide();
     		//$( "#triviaQuestion" ).hide();
     		//$( "#triviaQuestion" ).replaceWith("<h2>Correct</h2>")
     		//$( "#explainId" ).html("The Correct Answer Was ");
     		//afterQuestionThreeTimer()
     		
     //	}

     	// if(questionFour.answerThree){
     	//	$( ".choices" ).hide();
     		//$( "#triviaQuestion" ).hide();
     	//	$( "#triviaQuestion" ).replaceWith("<h2>Correct</h2>")
     	//	$( "#explainId" ).html("The Correct Answer Was Tabs");
     	//	afterQuestionFourTimer()
     		
     	//}

     	// if(questionFive.answerOne){
     	//	$( ".choices" ).hide();
     		//$( "#triviaQuestion" ).hide();
     	//	$( "#triviaQuestion" ).replaceWith("<h2>Correct</h2>")
     	//	$( "#explainId" ).html("The Correct Answer Was Nicholas Cage");
     	//	afterQuestionFiveTimer()
     		
     	//}

     	// if(questionSix.answerTwo){
     		//$( ".choices" ).hide();
     		//$( "#triviaQuestion" ).hide();
     		//$( "#triviaQuestion" ).replaceWith("<h2>Correct</h2>")
     		//$( "#explainId" ).html("The Correct Answer Was Meryl Streep");
     		//afterQuestionSixTimer()
     		
     	//}


     	/////////////////////////////////////////////////
     	//Question One Fail States
     	// if (questionOne.answerOne) {
     		//$( ".choices" ).hide();
     		//$( "#triviaQuestion" ).html("<h2>Wrong</h2>");
     		//$( "#explainId" ).html("The Correct Answer Was Tabs");
     		//$( "div.second" ).replaceWith( "<h2>New heading</h2>" );


     //	}

     	// if (questionOne.answerTwo) {
     	//	$( ".choices" ).hide();
     		//$( "#triviaQuestion" ).hide();
     		//$( "#triviaQuestion" ).html("<h2>Wrong</h2>");
     	//	$( "#explainId" ).html("The Correct Answer Was Tabs");	

     //	}

     	// if (questionOne.answerThree) {
     	//	$( ".choices" ).hide();
     		//$( "#triviaQuestion" ).hide();
     	//	$( "#triviaQuestion" ).html("<h2>Wrong</h2>");
     	//	$( "#explainId" ).html("The Correct Answer Was Tabs");

     	//}

     	//console.log("Hello")
  // });

//if (question == 7) {
	//resetGame()
//}

//  $( "#startButton" ).click(function() {
		// console.log("Hello World");
		//});

