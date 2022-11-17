const quotes = [{
    quote: "You only live once, but if you do it right, once is enough.",
    author: "-Mae West"
},{
    quote: "If you want to live happy life,tie it to a goal,not to people or things.",
    author: "-Albert Einstein"
}, {
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: "-Steve Jobs"
}, {
    quote: "In order to write about life first you must live it.",
    author: "-Ernest hemingway"
},{
    quote: "Life is not a Problem to be solved, but a reality to be experienced.",
    author: "-Soren Kierkegaard"
},{
    quote: "The unexamined life is not worth living.",
    author: "-Socrates"
},{
    quote: "turn your wounds into wisdom.",
    author: "-Oprah Winfrey"
},]


const h1 = [
    {
     header: "Let's start our morning with a new quote"
    },{
        header: "Let's start our evening with a new quote"
    },{
        header: "Let's start our night with a new quote"
    }
]

let btn = document.querySelector("#button");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let header = document.querySelector(".header");

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);
    let head = Math.floor(Math.random() * h1.length);
    quote.innerHTML = quotes[random].quote;

    author.innerHTML = quotes[random].author;

    header.innerHTML = h1[head].header;
});