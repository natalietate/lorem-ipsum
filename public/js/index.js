/*jshint esversion: 6 */
const lines = [
  'I never did learn anything, I never went to school, I never did anything, I just went shopping and hung out.',
  'Did you ever see that Seinfeld episode where that bald guy’s fiance licked all of the envelopes and she like died from glue poisoning?',
  'This is where it all happened. Laguna Beach, California. A small town in the OC where I grew up. I just finished my senior year of high school, a year I’ll never forget.',
  'I’m really gonna miss my friends. Especially my best friend, Lo. No matter how crazy it got this year, I could always count on Lo.',
  'That’s Christina. She’s the reverend’s daughter. No, really, she is.',
  'There’s Morgan. Her goal is to save herself for the right guy.',
  'That’s Trey. I guess you could say he was the serious one. But he also had the best party house in Laguna.',
  'The guy on the surfboard, that’s Talan. He’s a junior and he’s hooked up with most of the girls at our school, twice.',
  'That, that would be Kristin, another junior. Wherever Kristin went drama followed. She thinks she’s hot. Okay, I guess she is, but she can’t stand me.',
  'Stephen. I guess he’s kind of her boyfriend. But Stephen and I have been really close forever. We’re even going to college together in San Francisco. Kristin’s the wrong girl for him.',
  'Oh, and me? I’m Lauren, but my friends call me LC.',
  'I’ve always been the nice girl. But this year, I realized sometimes you just have to go after what you want.',
  'And all this drama started with the black and white party.',
  'We’re going to be putting bubble bath in Jacuzzi’s so it creates a massive amount of bubbles.',
  'If you and Stephen had babies, they’d be so good looking. They would.',
  'This is my clothes closet and that one\'s my shoes and purse closet.',
  'Dude, this is so gnarly. It reminds me of the houses on The OC. Oh God.',
  'I’m really stressed out on Stephen and Lauren because last night, he told me he was going to bed early, and today I found out he was at her house.',
];


//Elements
const onePara = document.querySelector('#one-para');
const twoPara = document.querySelector('#two-para');
const threePara = document.querySelector('#three-para');
const display = document.querySelector('#display');
const displayTwo = document.querySelector('#display-two');
const displayThree = document.querySelector('#display-three');

//Event Listeners
onePara.addEventListener('click', displayIpsumOne);
twoPara.addEventListener('click', displayIpsumTwo);
threePara.addEventListener('click', displayIpsumThree);

// Get just one quote from the lines array
function randomLine() {
  return lines[Math.floor(Math.random() * lines.length)];
}

// Make a paragraph of single quotes
function randomPara() {
  // return 3-6 random quotes
  let num = Math.floor(Math.random() * (6 - 3 + 1) + 3);
  let lines = '';

  for (i = 0; i < num; i++) {
    lines += (randomLine() + ' ');
  }
  return lines;
}

// User requests number of paragraphs
function displayIpsumOne() {
  display.textContent = randomPara();
}

function displayIpsumTwo() {
  display.textContent = randomPara();
  displayTwo.textContent = randomPara();
}

function displayIpsumThree() {
  display.textContent = randomPara();
  displayTwo.textContent = randomPara();
  displayThree.textContent = randomPara();

}
