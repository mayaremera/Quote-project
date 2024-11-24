let quotes = ['“Be yourself; everyone else is already taken.” ― Oscar Wilde',
'“Two things are infinite: the universe and human stupidity; and Iam not sure about the universe.” ― Albert Einstein',
'“A room without books is like a body without a soul.” ― Marcus Tullius Cicero',
'“Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.” ― Bernard M. Baruch', 
'“Be who you are and say what you feel, because those who mind don’t matter, and those who matter do not mind.” ― Bernard M. Baruch', 
'“So many books, so little time.” ― Frank Zappa', '“You only live once, but if you do it right, once is enough.” ― Mae West', 
'“Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.” ― Bernard M. Baruch' ];

function getQuote(){

    let random = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[random];
    document.getElementById('quote').innerText = randomQuote;
}

