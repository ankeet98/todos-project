//Check off specific todo on click
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Delete specific todo on click "X"
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation(); //Stops bubbling of an event to parent elements
});

//Fuction to add new todo
$("input[type = 'text']").keypress(function(e){
	if(e.which == 13){ //13 is keypress value of enter key
		//Grabbing new todo
		var newTodo = $(this).val();
		$(this).val("");
		//Create a new li and add todo to it
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTodo + "</li>");
	}
});

$("#toggle-form").click(function(){
	$("input[type = 'text']").fadeToggle();
});