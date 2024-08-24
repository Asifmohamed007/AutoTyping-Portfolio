// <!-- I am Asif Mohamed Mohideen, a recent graduate from Jerusalem College of Engineering in Chennai, where I completed my Bachelor's Degree in Information Technology (B.Tech) in 2024. Throughout my academic journey, I have developed a strong foundation in various aspects of IT, with a particular interest in front-end development.

//     As a fresher, I have focused my learning and projects on front-end technologies, where I’ve gained hands-on experience in HTML, CSS, and JavaScript. I am passionate about creating intuitive and engaging user interfaces that enhance user experience and contribute to the overall success of web applications.

//     During my studies, I completed several projects that allowed me to apply my skills in practical scenarios, such as developing responsive web designs and interactive websites. These projects not only solidified my technical abilities but also taught me the importance of collaboration, problem-solving, and continuous learning.

//     I am eager to bring my enthusiasm for front-end development to a dynamic team where I can contribute, grow, and continue to build on my knowledge and skills. I am particularly interested in opportunities that allow me to work on innovative projects and leverage my creativity to solve real-world problems.

//     Portfolio link: https://asifmohamed-portfolio.netlify.app/ -->

var aText = new Array(
  "<span class='terminal__text__span'>Hi, Welcome To My Website Iam Asif Mohamed Mohideen</span>",
  "<span class='terminal__text__span'>A Web Developer</span>", 
  "<span class='terminal__text__span'>And a Recent B.Tech Graduate in Information Technology From Jerusalem College of Engineering, Chennai.</span>",
  "<span class='terminal__text__span'>I Specialize in Web Development, with Strong Skills in It.</span>",
  "<span class='terminal__text__span'>I'm Eager to Apply my Skills in a Dynamic Role in Frontend, Fullstack, Software, or Java Development, where I can contribute and grow as part of a forward-thinking team.</span>",
  "<span class='terminal__text__span'>see my <a href='https://asifmohamed-portfolio.netlify.app'>portfolio</a> or profile on <a href='https://github.com/Asifmohamed007'>github</a></span>",
  "<span class='terminal__text__span'>And</span>",
  "<span class='terminal__text__span'>You can <a href='tel:+9940348954'>Call me</a> and  <a href='https://asifmohamed-portfolio.netlify.app'>Hire me</a></span>"
);
var iSpeed = 50; 
var iIndex = 0; 
var iArrLength = aText[0].length; 
var iScrollAt = 20; 
 
var iTextPos = 0; 
var sContents = ''; 
var iRow; 
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 200);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

$(function() {
	$( ".terminal" ).draggable();
});