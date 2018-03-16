function validateform(question_num){
var quizvalue=document.quiz.q1.value;
if (quizvalue==1){
	document.getElementById("a1"+question_num).style.color = "green";
}else {

	document.getElementById(quizvalue+"a"+question_num).style.color = "red";
}
}
