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

alert(currentMovie.hint);


// choose movie and get hiny

const userGuess = prompt("What movie is this?" + currentMovie.hint);

    if(userGuess === currentMovie.title){
        alert("You are the winner!");
    } else {
    alert("Wrong");
}

