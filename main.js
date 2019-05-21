function check(){
	var q1 = document.quiz.q1.value;
	var q2 = document.quiz.q2.value;
	var q3 = document.quiz.q3.value;
	var q4 = document.quiz.q4.value;
	var q5 = document.quiz.q5.value;
	var q6 = document.quiz.q6.value;
	var q7 = document.quiz.q7.value;
	var q8 = document.quiz.q8.value;
	var q9 = document.quiz.q9.value;
	var q10 = document.quiz.q10.value;
	var correct = 0;

	if(q1 == "Analytical Engine"){
		correct++;
	}
	if(q2 == 'Super computer'){
		correct++;
	}
	if(q3 == 'Gate'){
		correct++;
	}
	if(q4 == 'A third generation high level language'){
		correct++;
	}
	if(q5 == 'HTML'){
		correct++;
	}
	if(q6 == 'First generation computer'){
		correct++;
	}
	if(q7 == 'ROM'){
		correct++;
	}
	if(q8 == 'Ethernet'){
		correct++;
	}
	if(q9 == 'C'){
		correct++;
	}
	if(q10 == 'Central Processing Unit'){
		correct++;
	}


	var messages = ["Great Job!", "That's just Okay!", "You really need to work hard!"];
	var pic = ["img/success.gif","img/okay.gif","img/loser.gif"]

	var range;

	if(correct < 5){
		range = 2;
	}

	if(correct > 4 && correct < 8){
		range = 1;
	}

	if(correct > 7){
		range = 0;
	}

	document.getElementById("after_submit").style.visibility="visible";
	
	document.getElementById('message').innerHTML=messages[range];

	document.getElementById("number_correct").innerHTML="You got "+correct+" correct.";

	document.getElementById("picture").src=pic[range];


}