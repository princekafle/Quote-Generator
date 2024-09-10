const togglebtn = document.getElementById('darkmode');
const body = document.body;

const togglefunction = () => {
    if (body.classList.contains('dark-mode')) {
        // body ko element ma dark-mode class applied vako xa ki xaina check garxa
        // Switch to light mode
        body.classList.remove('dark-mode');
        togglebtn.textContent = 'Dark Mode'; // Change button text to "Dark Mode"
    } else {
        // Switch to dark mode
        body.classList.add('dark-mode');
        togglebtn.textContent = 'White Mode'; // Change button text to "White Mode"
    }
};


const quotes = {
    science: [
        "The science of today is the technology of tomorrow.",
        "Everything is theoretically impossible, until it is done.",
        "Science is the key to our future, and if you don’t believe in science, then you’re holding everybody back.",
        "The important thing is to never stop questioning."
    ],
    inspiration: [
        "The best preparation for tomorrow is doing your best today.",
        "Remember that the happiest people are not those getting more, but those giving more.",
        "The only way to do great work is to love what you do.",
        "Success is not the key to happiness. Happiness is the key to success."
    ],
    birthday: [
        "Count your life by smiles, not tears. Count your age by friends, not years. Happy birthday!",
        "Happy birthday! I hope all your birthday wishes and dreams come true.",
        "Happy Birthday! You know, you don’t look that old. But then, you don’t look that young, either.",
        "Happy birthday to someone who is forever young!",
    ],

    funny: [
        "I'm killing time while I wait for life to shower me with meaning and happiness.",
        "My ability to turn good news into anxiety is rivaled only by my ability to turn anxiety into chin acne.",
        "I’ll have what she’s having.",
        "People can’t drive you crazy if you don’t give them the keys."
    ]
};


let currentIndex = 0;

const quoteDisplay = document.getElementById('quote');
const categorySelect = document.getElementById('category');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const randomButton = document.getElementById('random');




function DisplayQuote() {
    const category = categorySelect.value;
    const quotesArray = quotes[category]; //  quotes for that specific category
    quoteDisplay.textContent = quotesArray[currentIndex]; // specific category ko 0 index wala quote
}

categorySelect.addEventListener('change', function() {
    currentIndex = 0;
    DisplayQuote();
});

nextButton.addEventListener('click', function() {
    const category = categorySelect.value;
    const quotesArray = quotes[category];

    // index 1 le increment garxa, taba samma jaba samma category vitra ko array ko length exceds hudaian if array ko length vanda dherai vayo vane feri starting index wala quote display garxa
    currentIndex = (currentIndex + 1) % quotesArray.length;

    // selected category ko next quote display garxa
    DisplayQuote();
});


prevButton.addEventListener('click', function() {
    const category = categorySelect.value;
    const quotesArray = quotes[category];

    // index 1 le decrement garxa, taba samma jaba samma category vitra ko array ko length exceds hudaian if array ko length vanda dherai vayo vane feri starting index wala quote display garxa
    currentIndex = (currentIndex - 1 + quotesArray.length) % quotesArray.length;

    // selected category ko prev quote display garxa
    DisplayQuote();
});

// random quote
randomButton.addEventListener('click', function() {
    const category = categorySelect.value;
    const quotesArray = quotes[category];
    // math.random le 0 ra 1 bich ma floating random numb dinxa like 0.5 and array length is 4 so 4*0.5 = 2.0 so math.floor le 2 dinxa ani 2 index ma vako quotes will be displayed
    currentIndex = Math.floor(Math.random() * quotesArray.length);
    DisplayQuote();
});



const incbtn = document.getElementById('increase-font')
const decbtn = document.getElementById('decrease-font')
let currentFontSize = 12;

incbtn.addEventListener('click', function() {
    currentFontSize += 2;
    quoteDisplay.style.fontSize = currentFontSize + 'px';
});

decbtn.addEventListener('click', function() {
    currentFontSize -= 2;
    quoteDisplay.style.fontSize = currentFontSize + 'px';
});

// page load vayesi feri suruko quote dekhauxa
DisplayQuote();