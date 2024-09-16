/* Section 3 Functionality - Flipping Through Steps Using Next and Previous Buttons */

/* Initializing Variables */
const nextButton = document.getElementById("next-button");
const previousButton = document.getElementById("previous-button");
const viewStepsButton = document.getElementById("view-steps-button");

const section3slideshow = document.getElementById("section-3-slideshow");
const section3header = document.getElementById("section-3-header");
const section3p1 = document.getElementById("section-3-p1");
const section3p2 = document.getElementById("section-3-p2");

const menuButtons = document.getElementsByClassName("section-3-menu-buttons");

/* Content */
const procedureImages = [
    "Images/procedure-images/procedure-image-default.webp",
    "Images/procedure-images/procedure-image-1.jpg",
    "Images/procedure-images/procedure-image-2.jpg",
    "Images/procedure-images/procedure-image-3.jpg",
    "Images/procedure-images/procedure-image-4.webp",
    "Images/procedure-images/procedure-image-5.png",
    "Images/procedure-images/procedure-image-6.jpg",
    "Images/procedure-images/procedure-image-7.jpg",
    "Images/procedure-images/procedure-image-8.jpg",
    "Images/procedure-images/procedure-image-9.webp",
    "Images/procedure-images/procedure-image-10.jpg",
    "Images/procedure-images/procedure-image-11.webp"
];

const procedureH1 = [
    "Here's How You Create The Scorching Skies Drink!",
    "STEP 1: Scoop Raspberry Flavoured Pearls",
    "STEP 2: Prepare Your Summer Berry Refresher Base",
    "STEP 3: Add Coconut Milk",
    "STEP 4: Add Ice",
    "STEP 5: Shake Vigorously & Pour Into Cup",
    "STEP 6: Prepare Your Pineapple Passionfruit Base",
    "STEP 7: Add Some Spicy Chili Powder Blend",
    "STEP 8: OPTIONAL: Add Some Thrill With A Shot Of Vodka",
    "STEP 9: Shake Vigorously Without Ice",
    "STEP 10: Pour Over Your Summer Berry Concoction",
    "STEP 11: Enjoy!"
]

const procedureP1 = [
    "Select Next To Continue.",
    "Start by adding tablespoons of Raspberry Flavoured Pearls to the bottom of the cup.",
    "Pour Summer Berry Refresher Base To The Baseline of Your Shaker Cup.",
    "Pour Coconut Milk On Top Of Your Summer Berry Refresher Base.",
    "Add a generous amount of ice into the drink.",
    "Shake at least 10 times vigorously to infuse the Summer Berry with the coconut milk, and to chill the beverage.",
    "Add Pineapple Passionfruit Base To The Baseline of Your Shaker Cup.",
    "Time to turn up the heat! Add teaspoons of spicy chili powder depending on how hot you want your drink.",
    "For the party animals, the daredevils, or people that are simply looking for a good time - grab your jigger or shotglass and add shots of vodka.",
    "Shake your spicy pineapple mix, vigorously at least 10 times without ice.",
    "Pour the spicy pineapple mix over the Summer Skies Drink.",
    "Grab a large straw, and enjoy your drink!"
]

const procedureP2 = [
    "Select View Steps To Skip To A Particular Step.",
    "12 oz: 1 scoop! | 16 oz: 2 scoops! | 24/32 oz: 3 scoops!",
    "12 oz: 75 ml | 16 oz: 100 ml | 24 oz: 150 ml | 32 oz: 200 ml",
    "12 oz: 75 ml | 16 oz: 100 ml | 24 oz: 150 ml | 32 oz: 200 ml",
    "12 oz: 150 ml | 16 oz: 200 ml | 24 oz: 300 ml | 32 oz: 400 ml",
    "Depending on how you like your drink, you can choose to alter the consistency or temperature by adding more base (more acidity), more milk (creaminess), or more ice (colder).",
    "12 oz: 75 ml | 16 oz: 100 ml | 24 oz: 150 ml | 32 oz: 200 ml",
    "12 oz: 2 scoops! | 16 oz: 3 scoops! | 24/32 oz: 4 scoops!",
    "12/16 oz: 1 shot | 24/32 oz: 2 shots | Make sure to drink responsibly.",
    "Shaking the drink without ice allows the pineapple and spicy chili (and vodka) to infuse better, creating the Scorching flavor atop the Summer Skies drink.",
    "Make sure to pour the mix slowly, swirling around the ice in the drink to watch the mix infuse within the drink. Set the sky on fire!",
    "OPTIONAL: If you have mint leaves, garnish them right on the side of your drink."
]


var currentIndex = 0;

// Updates Slideshow Based On User Input
function updateSlideShow() {
    section3slideshow.style.backgroundImage = `url(${procedureImages[currentIndex]})`;
    section3header.innerHTML = procedureH1[currentIndex];
    section3p1.innerHTML = procedureP1[currentIndex];
    section3p2.innerHTML = procedureP2[currentIndex];
}

// Procedure Menu Functions
function revealStep1() {
    currentIndex = 1;
    updateSlideShow();
}

function revealStep2() {
    currentIndex = 2;
    updateSlideShow();
}

function revealStep3() {
    currentIndex = 3;
    updateSlideShow();
}

function revealStep4() {
    currentIndex = 4;
    updateSlideShow();
}

function revealStep5() {
    currentIndex = 5;
    updateSlideShow();
}

function revealStep6() {
    currentIndex = 6;
    updateSlideShow();
}

function revealStep7() {
    currentIndex = 7;
    updateSlideShow();
}

function revealStep8() {
    currentIndex = 8;
    updateSlideShow();
}

function revealStep9() {
    currentIndex = 9;
    updateSlideShow();
}

function revealStep10() {
    currentIndex = 10;
    updateSlideShow();
}

function revealStep11() {
    currentIndex = 11;
    updateSlideShow();
}

// Displays Menu Buttons
function displayMenuButtons() {
    for (let i = 0; i < menuButtons.length; i++) {
        if (menuButtons[i].style.display === "none" || menuButtons[i].style.display === "") {
            menuButtons[i].style.display = "initial";
        } else {
            menuButtons[i].style.display = "none";
        }
    }
}

/* Adding Event Listeners */
nextButton.addEventListener("click", function() {
    if (currentIndex < procedureImages.length - 1) {
        currentIndex++;
        updateSlideShow();
    }
});

previousButton.addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlideShow();
    }
});

viewStepsButton.addEventListener("click", function() {
    displayMenuButtons();
})

// Ensure First Image Always Shows Up
updateSlideShow();
