var draw = function(){
	var randBook = Math.floor((Math.random() * 405)+1);
	//console.log(randBook);
	var randLine = Math.floor((Math.random() * 50)+1);
	//console.log(randLine);
	var message = "<p>Loddbok: " + randBook + ", lodd: " + randLine + "</p>"

	document.getElementById('loddbok').innerHTML = randBook;
	document.getElementById('lodd').innerHTML = randLine;
	var inner = document.getElementById('previous').innerHTML ;
	document.getElementById('previous').innerHTML = message + inner ;
}

document.getElementById('button').addEventListener('click', function(){
	draw();
});


draw();
