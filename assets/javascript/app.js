var correct = 0;
var incorrect = 0;

questions = [
    "The beaver is the national emblem of which country?",
    "How many players are there in a baseball team?",
    "How many days in a year?",
    "Which car is faster without a v8 engine?",
    "Where are BMW vehicles made?",
    "Babe Ruth is associated with which sport?",
    "What’s the total number of dots on a pair of dice?",
];
var timeleft = 20;
function countdown() {
    var downloadTimer = setInterval(function () {
        document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        timeleft -= 1;
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "0 seconds remaining"

        }
    }, 1000);

}

// Questions
$('#startgame').on("click", function () {
    $(countdown);

    $(questionOne).show();

    function questionOne() {

        choice1 = "America",
            choice2 = "Chile",
            choice3 = "China",
            choice4 = "Canada"; // Correct

        $("#question").text(questions[0]);
        $(".choice1").text(choice1);
        $(".choice2").text(choice2);
        $(".choice3").text(choice3);
        $(".choice4").text(choice4);
        {
            $(".choice4").one("click", function () {
                correct++;
                timeleft = 20;
                $(questionTwo).show();

            });
            $(".choice1, .choice2, .choice3").one("click", function () {
                incorrect++;
                timeleft = 20;
                $(questionTwo).show();

            });

        }

    }
})

function questionTwo() {

    choice5 = "Seven",
        choice6 = "Nine", // Correct
        choice7 = "Eleven",
        choice8 = "Twelve";

    $("#question").text(questions[1]);
    $(".choice1").text(choice5);
    $(".choice2").text(choice6);
    $(".choice3").text(choice7);
    $(".choice4").text(choice8);


    $(".choice2").one("click", function () {
        correct++;
        timeleft = 20;
        $(questionThree).show();

    });
    $(".choice1, .choice3, .choice4").one("click", function () {
        incorrect++;
        timeleft = 20;
        $(questionThree).show();

    });

};

function questionThree() {

    choice1 = "355",
        choice2 = "365", // Correct
        choice3 = "255",
        choice4 = "265";

    $("#question").text(questions[2]);
    $(".choice1").text(choice1);
    $(".choice2").text(choice2);
    $(".choice3").text(choice3);
    $(".choice4").text(choice4);


    $(".choice2").one("click", function () {
        correct++;
        timeleft = 20;
        $(questionFour).show();

    });
    $(".choice1, .choice3, .choice4").one("click", function () {
        incorrect++;
        timeleft = 20;
        $(questionFour).show();

    });


};

function questionFour() {

    choice1 = "BMW M4", // Correct
        choice2 = "AMG C63",
        choice3 = "Cadillac CTS-V",
        choice4 = "Mustang GT";

    $("#question").text(questions[3]);
    $(".choice1").text(choice1);
    $(".choice2").text(choice2);
    $(".choice3").text(choice3);
    $(".choice4").text(choice4);


    $(".choice1").one("click", function () {
        correct++;
        timeleft = 20;
        $(questionFive).show();

    });
    $(".choice2, .choice3, .choice4").one("click", function () {
        incorrect++;
        timeleft = 20;
        $(questionFive).show();

    });

};

function questionFive() {

    choice1 = "America",
        choice2 = "China",
        choice3 = "Sweden",
        choice4 = "Germany"; // Correct

    $("#question").text(questions[4]);
    $(".choice1").text(choice1);
    $(".choice2").text(choice2);
    $(".choice3").text(choice3);
    $(".choice4").text(choice4);


    $(".choice4").one("click", function () {
        correct++;
        timeleft = 20;
        $(end).show();

    });
    $(".choice1, .choice2, .choice3").one("click", function () {
        incorrect++;
        timeleft = 20;
        $(end).show();

    });

};

function end() {
    if (incorrect > 5) {
        incorrect = 5;

    $("#countdown").hide();
    $("#question").hide();
    $(".choice1, .choice2, .choice3").hide();
    $(".choice4").hide();


        $("#incorrect").text("Incorrect " + incorrect);
        $("#correct").text("Correct " + correct);


        }
    }
