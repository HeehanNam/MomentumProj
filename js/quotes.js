const quotes = [
    {
        quote : "AAAAAa",
        author : "A"
    },
    {
        quote : "BBBBB",
        author : "B"
    },
    {
        quote : "CCCC",
        author : "C"
    },
    {
        quote : "ddddddd",
        author : "D"
    },
    {
        quote : "eeeeee",
        author : "E"
    },
    {
        quote : "ffffff",
        author : "F"
    },
    {
        quote : "gggggggg",
        author : "G"
    },
    {
        quote : "hhhhhhh",
        author : "H"
    },
    {
        quote : "iiiiiii",
        author : "I"
    },
    {
        quote : "jjjjjjj",
        author : "J"
    },

]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;