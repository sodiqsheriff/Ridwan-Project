const quotes = {
  inspirational: [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
    // Add more inspirational quotes here
  ],
  motivational: [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
    // Add more motivational quotes here
  ],
  funny: [
    "The only mystery in life is why the kamikaze pilots wore helmets. - Al McGuire",
    "Behind every great man is a woman rolling her eyes. - Jim Carrey",
    "I'm not lazy, I'm on energy-saving mode. - Unknown"
    // Add more funny quotes here
  ]
};

let currentCategory = 'inspirational';
let currentQuoteIndex = 0;

function getRandomQuote(category) {
  const quotesArray = quotes[category];
  const randomIndex = Math.floor(Math.random() * quotesArray.length);
  return quotesArray[randomIndex];
}

function displayQuote(quote) {
  const quoteText = document.getElementById('quoteText');
  quoteText.textContent = quote;
}

function prevQuote() {
  currentQuoteIndex = (currentQuoteIndex - 1 + quotes[currentCategory].length) % quotes[currentCategory].length;
  displayQuote(quotes[currentCategory][currentQuoteIndex]);
}

function nextQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes[currentCategory].length;
  displayQuote(quotes[currentCategory][currentQuoteIndex]);
}

document.getElementById('quoteCategory').addEventListener('change', function() {
  currentCategory = this.value;
  currentQuoteIndex = 0;
  displayQuote(quotes[currentCategory][currentQuoteIndex]);
});

// Initial setup
const initialQuote = getRandomQuote(currentCategory);
displayQuote(initialQuote);
