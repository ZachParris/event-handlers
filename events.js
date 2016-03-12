// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
document.addEventListener("click", function(e) {
	if(e.toElement.className === "article-section") {
		document.getElementById("output-target").innerHTML = "You clicked on the " + e.toElement.textContent + " section"
	}
})
// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
document.getElementById("page-title").addEventListener("mouseenter", function() {
			document.getElementById("output-target").innerHTML = "You moved your mouse over the header"
})
// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
document.getElementById("page-title").addEventListener("mouseleave", function() {
		document.getElementById("output-target").innerHTML = "You left me!!"
})


// When you type characters into the input field, the output element should mirror the text in the input field.
document.getElementById("keypress-input").addEventListener("keyup", function(){
	document.getElementById("output-target").innerHTML =
		document.getElementById("keypress-input").value
	})


// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
document.getElementById("add-color").addEventListener("click", function(){
	document.getElementById("guinea-pig").style.color = "blue"
	})


// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.

document.getElementById("make-large").addEventListener("click", function(){
	document.getElementById("guinea-pig").style.fontSize = "50px"
	})


// When you click the "Capture it" button, the guinea-pig element should have a border added to it.

document.getElementById("add-border").addEventListener("click", function(){
	document.getElementById("guinea-pig").style.border = "2px solid black"
	})


// When you click the "Rounded" button, the guinea-pig element's border should become rounded.

document.getElementById("add-rounding").addEventListener("click", function(){
	document.getElementById("guinea-pig").style.borderRadius = "5px"
	})
