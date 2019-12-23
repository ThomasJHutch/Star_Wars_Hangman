window.onload = function () {

    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z', "1", "2", "3", "4", "5", "6"];

    var rebel;               // Array of topics
    var chosenCategory;     // Selected category
    var word;              // Selected wrd
    var guess;             // guess
    var guesses = [];      // Stored guesses
    var lives;             // Lives
    var counter;           // Count correct guesses
    var space;              // Number of spaces in wrd '-'

    // Get elements
    var showLives = document.getElementById("mylives");
    var showCategory = document.getElementById("hint");



    // create alphabet ul
    var buttons = function () {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }


    // Create guesses ul
    result = function () {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }

    // give a hint 


    // Show lives
    comments = function () {
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
            showLives.innerHTML = "I find your lack of faith disturbing!";
        }
        for (var i = 0; i < guesses.length; i++) {
            if (counter + space === guesses.length) {
                showLives.innerHTML = "You saved your Rebel friend!";
            }
        }
    }



    // OnClick Function
    check = function () {
        list.onclick = function () {
            var guess = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    guesses[i].innerHTML = guess;
                    counter += 1;
                }
            }
            var j = (word.indexOf(guess));
            if (j === -1) {
                lives -= 1;
                comments();
            } else {
                comments();
            }
        }
    }


    // Play
    play = function () {
        rebel = [
            ["LUKE SKYWALKER", "MON MOTHMA", "LEIA ORGANA", "ADMIRAL ACKBAR",
                "HAN SOLO", "CHEWBACCA", "R2-D2", "C-3PO", "LANDO", "OBI WAN"],
        ];

        chosenCategory = rebel[Math.floor(Math.random() * rebel.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();

        guesses = [];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        comments();
    }

    play();

}
