document.getElementById('generateQuoteButton').addEventListener('click', () => generateQuote(false));
document.getElementById('randomQuoteButton').addEventListener('click', () => generateQuote(true));

async function generateQuote(isRandom) {
    let quote = '';

    try {
        if (isRandom) {
            quote = await fetchRandomQuote();
        } else {
            const input = document.getElementById('letterInput').value.trim().toLowerCase();
            if (input) {
                quote = await fetchQuoteByInput(input);
            } else {
                quote = await fetchRandomQuote();
            }
        }
        document.getElementById('quoteDisplay').innerText = quote;
    } catch (error) {
        console.error('Error fetching quote:', error);
        document.getElementById('quoteDisplay').innerText = "An error occurred. Please try again.";
    }
}

async function fetchRandomQuote() {
    try {
        const response = await fetch('https://quotes.rest/quote/random.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return `"${data.contents.quote}" - ${data.contents.author}`;
    } catch (error) {
        console.error('Error fetching random quote:', error);
        throw error; // Propagate the error for the catch block in generateQuote function
    }
}

async function fetchQuoteByInput(input) {
    try {
        const response = await fetch(`https://quotes.rest/quote/search.json?query=${input}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.contents.quotes.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.contents.quotes.length);
            return `"${data.contents.quotes[randomIndex].quote}" - ${data.contents.quotes[randomIndex].author}`;
        } else {
            return `No quotes found for '${input}'. Here's a random quote: ${await fetchRandomQuote()}`;
        }
    } catch (error) {
        console.error(`Error fetching quotes for '${input}':`, error);
        throw error; // Propagate the error for the catch block in generateQuote function
    }
}
