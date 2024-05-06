const quoteEl = document.getElementById('quote');
const quoteBtn = document.getElementById('quoteBtn');

quoteBtn.addEventListener('click', generateQuote);

generateQuote();

function generateQuote() {
    fetch('https://api.quotable.io/random')
        .then((res) => res.json())
        .then((data) => {
            quoteEl.innerHTML = data.content;
        })
        .catch((error) => {
            console.error('Error fetching random quote:', error);
        });
}

