let numofHits = 0;
let guessno = 0;

let startup = "NSUT";

let row = new Array(7).fill(null);


// Same as your GameSetup.setup()
function setup() {

    // Java:
    // int num = (int)(Math.random()*5);

    let num = Math.floor(Math.random() * 5);

    row[num] = startup;
    row[num + 1] = startup;
    row[num + 2] = startup;
}


// This happens when the game starts
setup();


// This is what happens when the player clicks a number
function makeGuess(guess) {

    document.getElementById("message").innerText = "";

    // Same as:
    // if (guess < 0 || guess >= GameSetup.row.length)

    if (guess < 0 || guess >= row.length) {

        document.getElementById("message").innerText =
            "Invalid guess! Enter 0-6.";

        return;
    }


    // Same as:
    // if(GameSetup.row[guess] == null)

    if (row[guess] === null) {

        document.getElementById("message").innerText =
            "💥 MISS! The ship moved!";

        // Same as your Java loop
        for (let i = 0; i < 7; i++) {
            row[i] = null;
        }

        setup();
    }


    // Same as:
    // else if (GameSetup.row[guess].equals(GameSetup.startup))

    else if (row[guess] === startup) {

        document.getElementById("message").innerText =
            "🎯 HIT!";

        row[guess] = null;

        numofHits++;
    }


    // Same as:
    // guessno = guessno + 1;

    guessno++;


    // Update numbers on screen
    document.getElementById("hits").innerText = numofHits;
    document.getElementById("guesses").innerText = guessno;


    // Same as:
    // if (numofHits == 3)

    if (numofHits === 3) {

        endGame();
    }
}


// Your GameSetup.rating() converted to JavaScript
function rating() {

    let result = document.getElementById("result");

    if (guessno === 3) {

        result.innerHTML =
            "<h2>🏆 OMGG!</h2>" +
            "<p>You should play in the olympics!</p>" +
            "<strong>PLAYER RATING: A</strong>";
    }

    else if (guessno > 3 && guessno <= 6) {

        result.innerHTML =
            "<h2>😎 Nice!</h2>" +
            "<p>We like you just fine!</p>" +
            "<strong>PLAYER RATING: B</strong>";
    }

    else {

        result.innerHTML =
            "<h2>😂 Really?</h2>" +
            "<p>THAT many guesses?</p>" +
            "<strong>PLAYER RATING: F</strong>";
    }
}


// Happens when all 3 ship parts are hit
function endGame() {

    document.getElementById("message").innerText =
        "🎉 YAAY! You killed " + startup + "!";

    document.getElementById("result").innerHTML =
        "<p>You took <strong>" + guessno + "</strong> guesses.</p>";

    rating();

    // Disable all number buttons
    let buttons = document.querySelectorAll("#board button");

    buttons.forEach(function(button) {
        button.disabled = true;
    });

}


// Restart the whole game
function restartGame() {

    numofHits = 0;
    guessno = 0;

    row = new Array(7).fill(null);

    document.getElementById("hits").innerText = "0";
    document.getElementById("guesses").innerText = "0";

    document.getElementById("message").innerText =
        "Choose a position from 0-6";

    document.getElementById("result").innerHTML = "";

    let buttons = document.querySelectorAll("#board button");

    buttons.forEach(function(button) {
        button.disabled = false;
    });

    setup();
}