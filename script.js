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