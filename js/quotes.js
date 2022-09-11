const quotes = [
    {
        quote: "By nature, men are nearly alike; by practice, they get to be wide apart.",
        author: "Confucius",
    },
    {
        quote: "If you can concentrate always on the present, you'll be a happy man.",
        author: "Paulo Cuelho",
    },
    {
        quote: "The tragedy of life is what dies in the hearts and souls of people while they live.",
        author: "Albert Einstein",
    },
    {
        quote: "Wheresoever you go, go with all your heart.",
        author: "Confucius",
    },
    {
        quote: "Despair is a narcotic. It lulls the mind into indifference.",
        author: "Charlie Chaplin",
    },
    {
        quote: "The journey is the reward.",
        author: "Steve Jobs",
    },
    {
        quote: "Well begun is half done.",
        author: "Aristotle",
    },
    {
        quote: "A likely impossibility is always preferable to an unconvincing possibility.",
        author: "Aristotle",
    },
    {
        quote: "While we stop to think, we often miss our opportunity.",
        author: "Publilius Syrus",
    },
    {
        quote: "Small opportunities are often the beginning of great enterprises.",
        author: "Demosthenes",
    },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;