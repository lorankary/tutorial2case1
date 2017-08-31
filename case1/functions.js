/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 2
   Case Problem 1

   Function List:
   showQuiz()
      Used to make the quiz questions visible

   hideQuiz()
      Used to hide the quiz questions
*/


function showQuiz() {
   document.getElementById("quiztable").style.display="block";
}

function hideQuiz() {
   document.getElementById("quiztable").style.display="none";
}

function gradeQuiz() {
   var correct=0;
   var quiz = document.getElementById("questions");
   
   var q1 = document.getElementsByName("q1");
   var q2 = document.getElementsByName("q2");
   var q3 = document.getElementsByName("q3");
   var q4 = document.getElementsByName("q4");
   var q5 = document.getElementsByName("q5");
   
   if (q1[2].checked) correct++;
   if (q2[0].checked) correct++;
   if (q3[3].checked) correct++;
   if (q4[0].checked) correct++;
   if (q5[3].checked) correct++;
   
   document.getElementById("cor1").style.backgroundColor="yellow";
   document.getElementById("cor2").style.backgroundColor="yellow";
   document.getElementById("cor3").style.backgroundColor="yellow";
   document.getElementById("cor4").style.backgroundColor="yellow";
   document.getElementById("cor5").style.backgroundColor="yellow";
   
   radioButtons.forEach(function(rb) { rb.disabled = true; });

   return correct;
}
