const loadQuote = () => {
    fetch('https://api.kanye.rest/')
      .then((res) => res.json())
      .then((data) => displayQuote(data));
}
loadQuote();

const displayQuote = quote => {
    const quoteText = document.getElementById('quote');
    quoteText.innerText = quote.quote;
}