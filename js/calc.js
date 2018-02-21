// document.addEventListener("DOMContentLoaded", function(event){


// var numberArray = document.getElementsByClassName("buttonNum");
// var screen = document.getElementById("screen");
// var operators = document.getElementsByClassName("operators");
// screen.style.color = "blue";
// //console.log(numberArray);



// for( n = 0; n < operators.length; n++) {
// 	operators[n].addEventListener("click", function(event){
// 		console.log(this.innerHTML);
// 		this.innerHTML.push(screen);



// 	});
// }







// for ( i = 0; i < numberArray.length; i++) {
// 	numberArray[i].addEventListener("click", function(event){
// 		console.log(this.innerHTML);


// 	});
	



// 	//numberArray.push(newArray[i]);
// }





// //document.addEventListener("click", function(){

// //})

// })

document.addEventListener("DOMContentLoaded", function (event) {

    //console.log("hello")

    //1. identify the buttons

    var buttons = document.getElementsByClassName("buttonNum");
    var screen = document.getElementById("screen");
    var operators = document.getElementsByClassName("operators");
    var equal = document.getElementsByClassName("equals");
    var value1 = null;
    var operator = null;
    var value2 = null;
    //console.log(buttons);

    //2. Add a loop which will assign all the values to the event listener, then assign an event to the function 
    //which will say what will happen when the event is looping through the assigned code. The screen is then 
    //changed so that after being clicked it displays the information which is in the target's innerHTML
    for (var i = 0 ; i < buttons.length ; i++) {
        buttons[i].addEventListener("click", function(event){
            screen.innerHTML = event.target.innerHTML;
            value1 = event.target.innerHTML;
            console.log(value1);

        });
    }


    for(var i = 0; i < operators.length; i++) {
 	operators[i].addEventListener("click", function(event){
 		screen.innerHTML = event.target.innerHTML;
 		value2 = event.target.innerHTML;
 		console.log(value2);
 		});

 	};

//  	for(var n = 0; n < equal.length; n++) {
//  	operators[n].addEventListener("click", function(event){
 		
//  	});

//  	};
});






































