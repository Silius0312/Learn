// const quest = prompt('Сколько фильмов вы уже поспотрели?', '');

// const numberOfFilms = quest;

// console.log(numberOfFilms);
// 1 задача:
const numberOfFilms = +prompt("Сколько фильмов вы уже поспотрели?", "");

// 2 задача:

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// Задача 3:
// const questionUser = prompt('Один из последних просмотренных фильмов?') && prompt('На сколько оцените его?')

const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("На сколько оцените его?", ""),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
