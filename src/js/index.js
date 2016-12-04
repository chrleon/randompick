var settings = {};
settings.books = 405;
settings.tickets = 50;

// setup
document.querySelector('#numbooks').value = settings.books;
document.querySelector('#numtickets').value = settings.tickets;

var draw = function(){
	var randBook = Math.floor((Math.random() * settings.books)+1);
	//console.log(randBook);
	var randLine = Math.floor((Math.random() * settings.tickets)+1);
	//console.log(randLine);
	var message = "<p>Loddbok: " + randBook + ", lodd: " + randLine + "</p>"

	document.getElementById('loddbok').innerHTML = randBook;
	document.getElementById('lodd').innerHTML = randLine;
	var inner = document.getElementById('previous').innerHTML ;
	document.getElementById('previous').innerHTML = message + inner ;

	// analytics
	ga('send', 'event', {
		eventCategory: 'Lottery',
		eventAction: 'New draw',
		eventLabel: 'Lottery'
	});
}

// eventlisteners


document.querySelector('#storesettings').addEventListener('click', function(event){
	settings.books = Number(document.querySelector('#numbooks').value);
	settings.tickets = Number(document.querySelector('#numtickets').value);
	//draw(); you can't see that it is drawn

	// analytics
	ga('send', 'event', {
		eventCategory: 'Settings',
		eventAction: 'saved',
		eventLabel: 'ui'
	});
	// analytics
	ga('send', 'event', {
		eventCategory: 'Number of books',
		eventAction: settings.books,
		eventLabel: 'Settings'
	});
	// analytics
	ga('send', 'event', {
		eventCategory: 'Number of tickets',
		eventAction: settings.tickets,
		eventLabel: 'Settings'
	});
});

document.querySelector('#navbar [href="#settings"]').addEventListener('click', function(){
	// analytics
	ga('send', 'event', {
		eventCategory: 'Settings',
		eventAction: 'opened',
		eventLabel: 'ui'
	});
});

document.getElementById('button').addEventListener('click', function(){
	draw();
});


draw();
