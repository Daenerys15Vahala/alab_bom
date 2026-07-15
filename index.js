// ALAB DOM - GUESSING GAME

// movie list

const welcomeText = "Guess the movie with emojis"
alert(welcomeText);

const moviesList = [
    {
    title: "jurassic park",
    hint: "🦖🌎🔬🧬"
    },
    {
    title: "ratatouille" ,
    hint: "🐀🍝👨🏻‍🍳"
    },
    {
    title: "it",
    hint: "🎈🤡" 
    },
    {
    title: "forrest gump",
    hint: "🏃‍♂️🏓🪖🍫"
    },
    {
    title: "the lion king",
    hint: "🦁👑🐗" 
    },
    {
    title: "home alone",
    hint: "🧍🏼‍♂️❄️🎄🏠" 
    },
    {
    title: "titanic",
    hint: "🪨❤️🚢"
    },
    {
    title: "harry potter",
    hint: "🏰🤓⚡️"
    },
    {
    title: "batman",
    hint: "🦇🤡"
    },
    {
    title: "lord of the rings",
    hint: "🧙‍♂️💍🌋"
    }
];

// random movie
const randomIndex = Math.floor(Math.random() * 10)

const currentMovie = moviesList[randomIndex];

// dom
const attemptsDisplay = document.getElementById("attemptsDisplay");
const hintDisplay = document.getElementById("hintDisplay");
const gameMessage = document.getElementById("gameMessage");


hintDisplay.textContent = "Guess the movie: " + currentMovie.hint;


// choose movie and get hint

let attempts = 3;

while (attempts > 0) {

    const userGuess = prompt("What movie is this?");

    if(userGuess === currentMovie.title){
        gameMessage.textContent = "You are the winner";
        break;
    } else {
        attempts --;

        attemptsDisplay.textContent = "❤️".repeat(attempts);

        alert("Nope! attempts left: " + attempts);
    }
}
     if (attempts === 0) {
        gameMessage.textContent = "Game over; the movie was: " = currentMovie/title;
    }

    
