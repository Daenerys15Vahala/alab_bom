// ALAB DOM - GUESSING GAME

// movie list

const welcomeText = "Guess the movie with emojis"
alert(welcomeText);

const moviesList = [
    {
    title: "Jurassic Park",
    hint: "🦖🌎🔬🧬"
    },
    {
    title: "Ratatouille" ,
    hint: "🐀🍝👨🏻‍🍳"
    },
    {
    title: "It",
    hint: "🎈🤡" 
    },
    {
    title: "Forrest Gump",
    hint: "🏃‍♂️🏓🪖🍫"
    },
    {
    title: "The Lion King",
    hint: "🦁👑🐗" 
    },
    {
    title: "Home Alone",
    hint: "🧍🏼‍♂️❄️🎄🏠" 
    },
    {
    title: "Titanic",
    hint: "🪨❤️🚢"
    },
    {
    title: "Harry Potter",
    hint: "🏰🤓⚡️"
    },
    {
    title: "Batman",
    hint: "🦇🤡"
    },
    {
    title: "Lord of the Rings",
    hint: "🧙‍♂️💍🌋"
    }
];
// random movie
const randomMovie = Math.floor(Math.random) * 10;
console

// choose movie
const currentMovie = moviesList[randomMovie];

// get hint
currentMovie.hint
// answer?
currentMovie.title