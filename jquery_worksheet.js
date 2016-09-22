
$(document).ready(function(){
	init();
});

function init(){
	createElements();
	enabled(true);
}

function enabled(value){
	if(value){
		// 2. TODO: Add code in the line below so that 'buttonClicked' executes when
		// the button is clicked.
		$("#clickButton").on(/* YOUR CODE GOES HERE*/, buttonClicked);
		
	} 
}

function createElements(){
	$("body").append("<div class='container'></div>");
	var el = $("body").children().last();

	// 1. TODO: Add a button Element here with the ID of 'clickButton'.
	el.append(/* YOUR CODE GOES HERE*/);
}

function buttonClicked(){
	// 3. TODO: This function is called when the button is clicked, target the parent
	// of the button and append a paragraph with the text 'clicked'.
	
}