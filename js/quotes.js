const quotes = [
    {
        quote : "We must be willing to get rid of the life we've planned, so as to have the life that is waiting for us.",
        author : "Joseph Campbell"
    },
    {
        quote : "I've learned that all a person has in life is family and friends. If you lose those, you have nothing, so friends are to be treasured more than anything else in the world.",
        author : "Trey Parker"
    },
    {
        quote : "Choose a job you love, and you will never have to work a day in your life.",
        author : "Confucius"
    },
    {
        quote : "What the superior man seeks is in himself. What the mean man seeks is in others.",
        author : "Confucius"
    },
    {
        quote : "Propriety was a rigid master, but one that must be obeyed if one wanted to keep a sterling reputation.",
        author : "Lawana Blackwell"
    },
    {
        quote : "Once you agree upon the price you and your family must pay for success, it enables you to ignore the minor hurts, the opponent's pressure, and the temporary failures.",
        author : "Vincent Lombardi"
    },
    {
        quote : "Wealth is the parent of luxury and indolence, and poverty of meanness and viciousness, and both of discontent.",
        author : "Plato"
    },
    {
        quote : "Isn't it a pleasure to study, and to practice what you have learned?",
        author : "Confucius"
    },
    {
        quote : "Focusing your life solely on making a buck shows a certain poverty of ambition. It asks too little of yourself. Because it's only when you hitch your wagon to something larger than yourself that you realize your true potential.",
        author : "Barack Obama"
    },
    {
        quote : "This is the true joy in life, the being used for a purpose recognized by yourself as a mighty one; the being thoroughly worn out before you are thrown on the scrap heap; the being a force of Nature instead of a feverish selfish little clod of ailments and grievances complaining that the world will not devote itself to making you happy.",
        author : "George Bernard Shaw"
    },

]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;