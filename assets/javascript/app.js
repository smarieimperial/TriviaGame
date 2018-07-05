score = 0;
incorrect = 0;
unanswered = 0;

function addScore() {
    document.write("All Done!");
    document.write("<p>Correct Answers: " + score + "</p>");
    document.write("<p>Incorrect Answers: " + incorrect + "</p>");
    document.write("<p>Unsanswered: " + unanswered + "</p>");

    $('#done').on('click', function(){
        clearInterval(timer);
        seconds = 0;
        $('#countdown').text(seconds);
    });
}

// code for the countdown timer below. Timer seconds starts at 10 for testing.
    var seconds = 10;
    var timer;
        // div id 'countdown' prints to screen the number in the variable named seconds.
		$('#countdown').text(seconds);

		function startTimer(){
			seconds--;
            $('#countdown').text(seconds);
            if (seconds < 0) {
                clearInterval(timer);
                alert("Time's up!");
                seconds = 10;
			    $('#countdown').text(seconds);
                addScore();
            }
		}

		$('#start').on('click', function(){
			timer = setInterval(startTimer, 1000);
		});

        // added this stop button for testing.
		$('#stop').on('click', function(){
			clearInterval(timer);
			seconds = 10;
            $('#countdown').text(seconds);
            alert("Calculating your score...");
        // add the addScore(); function here
            addScore();
        });
        
    