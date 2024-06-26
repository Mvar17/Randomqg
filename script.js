// Array of quotes (example)
// Array of quotes
const quotes = [
    {
        content: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        content: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        content: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        content: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
    {
        content: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        content: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        content: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        content: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison"
    },
    {
        content: "If you want to live a happy life, tie it to a goal, not to people or things.",
        author: "Albert Einstein"
    },
    {
        content: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        content: "Never bend your head. Always hold it high. Look the world straight in the eye.",
        author: "Helen Keller"
    },
    {
        content: "The best way to predict the future is to create it.",
        author: "Abraham Lincoln"
    },
    {
        content: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        content: "It is never too late to be what you might have been.",
        author: "George Eliot"
    },
    {
        content: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        content: "You can never cross the ocean until you have the courage to lose sight of the shore.",
        author: "Christopher Columbus"
    },
    {
        content: "Either you run the day, or the day runs you.",
        author: "Jim Rohn"
    },
    {
        content: "Whether you think you can or you think you can’t, you’re right.",
        author: "Henry Ford"
    },
    {
        content: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        content: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        content: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison"
    },
    {
        content: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        content: "Life is about making an impact, not making an income.",
        author: "Kevin Kruse"
    },
    {
        content: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
    },
    {
        content: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar"
    },
    {
        content: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    },
    {
        content: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky"
    },
    {
        content: "The mind is everything. What you think you become.",
        author: "Buddha"
    },
    {
        content: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        content: "I attribute my success to this: I never gave or took any excuse.",
        author: "Florence Nightingale"
    },
    {
        content: "You can’t use up creativity. The more you use, the more you have.",
        author: "Maya Angelou"
    },
    {
        content: "Do one thing every day that scares you.",
        author: "Eleanor Roosevelt"
    },
    {
        content: "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
        author: "Bob Dylan"
    },
    {
        content: "I have learned over the years that when one’s mind is made up, this diminishes fear.",
        author: "Rosa Parks"
    },
    {
        content: "I didn’t fail the test. I just found 100 ways to do it wrong.",
        author: "Benjamin Franklin"
    },
    {
        content: "In order to succeed, your desire for success should be greater than your fear of failure.",
        author: "Bill Cosby"
    },
    {
        content: "A person who never made a mistake never tried anything new.",
        author: "Albert Einstein"
    },
    {
        content: "The person who says it cannot be done should not interrupt the person who is doing it.",
        author: "Chinese Proverb"
    },
    {
        content: "There are no traffic jams along the extra mile.",
        author: "Roger Staubach"
    },
    {
        content: "It is never too late to be what you might have been.",
        author: "George Eliot"
    },
    {
        content: "You become what you believe.",
        author: "Oprah Winfrey"
    },
    {
        content: "I would rather die of passion than of boredom.",
        author: "Vincent van Gogh"
    },
    {
        content: "Build your own dreams, or someone else will hire you to build theirs.",
        author: "Farrah Gray"
    },
    {
        content: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
        author: "Jamie Paolinetti"
    },
    {
        content: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
        author: "Joshua J. Marine"
    },
    {
        content: "Too many of us are not living our dreams because we are living our fears.",
        author: "Les Brown"
    },
    {
        content: "Happiness is not something readymade. It comes from your own actions.",
        author: "Dalai Lama"
    },
    {
        content: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        content: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },
    {
        content: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston S. Churchill"
    },
    {
        content: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        content: "Today’s accomplishments were yesterday’s impossibilities.",
        author: "Robert H. Schuller"
    },
    {
        content: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    },
    {
        content: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        author: "Aristotle"
    },
    {
        content: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },
    {
        content: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        content: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
        author: "Dalai Lama"
    },
    {
        content: "You can’t use up creativity. The more you use, the more you have.",
        author: "Maya Angelou"
    },
    {
        content: "Do what you can, where you are, with what you have.",
        author: "Teddy Roosevelt"
    },
    {
        content: "Eighty percent of success is showing up.",
        author: "Woody Allen"
    },
    {
        content: "Your time is limited, so don’t waste it living someone else’s life.",
        author: "Steve Jobs"
    },
    {
        content: "Winning isn’t everything, but wanting to win is.",
        author: "Vince Lombardi"
    },
    {
        content: "I am not a product of my circumstances. I am a product of my decisions.",
        author: "Stephen Covey"
    }

    // Add more quotes here as needed
];

// Event listeners for buttons
document.getElementById('generateQuoteButton').addEventListener('click', () => generateQuote(false));
document.getElementById('randomQuoteButton').addEventListener('click', () => generateQuote(true));
document.getElementById('newQuoteButton').addEventListener('click', () => generateQuote(true));
document.getElementById('newLetterQuoteButton').addEventListener('click', () => generateQuote(false));
document.body.addEventListener('mousemove', changeBackground);

// Function to generate a quote
async function generateQuote(isRandom) {
    let quote = '';

    if (isRandom) {
        quote = getRandomQuote();
    } else {
        const input = document.getElementById('letterInput').value.trim().toLowerCase();
        if (input) {
            quote = getQuoteByInput(input);
        } else {
            quote = getRandomQuote();
        }
    }

    document.getElementById('quoteDisplay').innerText = quote;

    // Toggle button visibility
    document.getElementById('generateQuoteButton').classList.add('hidden');
    document.getElementById('randomQuoteButton').classList.add('hidden');
    document.getElementById('newQuoteButton').classList.remove('hidden');
    document.getElementById('newLetterQuoteButton').classList.remove('hidden');
}

// Function to get a random quote from the array
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return `"${quotes[randomIndex].content}" - ${quotes[randomIndex].author}`;
}

// Function to get a quote based on input (tag)
function getQuoteByInput(input) {
    const filteredQuotes = quotes.filter(quote => quote.content.toLowerCase().includes(input));
    if (filteredQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        return `"${filteredQuotes[randomIndex].content}" - ${filteredQuotes[randomIndex].author}`;
    } else {
        return `No quotes found for '${input}'. Here's a random quote instead: ${getRandomQuote()}`;
    }
}

// Function to change background color based on mouse position
function changeBackground(event) {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    const red = Math.round(x * 255);
    const green = Math.round(y * 255);
    const blue = Math.round((1 - x) * 255);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
