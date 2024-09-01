var name; 
var score = 0; 
var scoreText; 
var scoreLabel; 
var timeToStudy; 
 
/* This variable just creates a background in order to avoid 
* letters to stack up. 
*/ 
var hider = new Rectangle(350, 75); 
hider.setPosition(getWidth()/15, getHeight()/6); 
hider.setColor(Color.white); 
 
/* This variable is a correct message that appears when you get the 
* answers right. 
*/ 
var correct = new Text("Correct! "); 
correct.setFont("15pt Arial"); 
correct.setColor(Color.green); 
correct.setPosition(getWidth()/2 - correct.getWidth()/2, getHeight()/4); 
 
 
/* This is the main body of the code, the command "mouseClickMethod" 
* performs the action of the function it is called each time the 
* user clicks the screen. Also, command "setTimer" calls into 
* a function every certain seconds (var timeToStudy) and ask a 
* random question. In addition, variable "scoreText" and "score" 
* are there to keep track of the score whether you get right 
* or wrong a question. 
*/ 
function start(){
    
    let welcome = console.log("Welcome to Periodic Table Learning Experience!!!");
    
    welcome = console.log("The goal is to reinforce chemistry learning, thus a random trivia question will be asked in desired intervals of time.")
    
    timeToStudy = readInt("\nHow many seconds between question do you want?\n* Recommended: 30s *\n");
    
    if(timeToStudy != null && timeToStudy > 0){
        
        mouseClickMethod(differElement); 
        setTimer(questions, timeToStudy * 1000); 
        scoreText = new Text(score); 
        scoreText.setPosition(90, getHeight()/19); 
        add(scoreText); 
         
        scoreLabel = new Text("Score: "); 
        scoreLabel.setPosition(0, getHeight()/20); 
        scoreLabel.setFont("20pt Arial"); 
        add(scoreLabel); 
         
        var clickHere = new Text("Click the screen! ", "30pt Arial"); 
        clickHere.setPosition(getWidth()/10, getHeight()/4); 
        add(clickHere); 
     
    } else {
        
        print("Try again! Enter the right amount of time!");
    }
 
} 
 
/* This function creates a square with random colors in the middle 
* of the screen with a random chemical symbol in it with its 
* respective atomic number and its name under it. It includes 
* variables such as "background" and "hider" to avoid letters 
* to stack up everytime you click the screen. 
*/ 
function differElement(){ 
 var square = new Rectangle(125, 125); 
square.setPosition(getWidth()/2.8, getHeight()/2.8); 
square.setColor(Randomizer.nextColor()); 
add(square); 
var background = new Rectangle(400, 75); 
background.setPosition(getWidth()/getWidth(), getHeight()/1.5); 
background.setColor(Color.white); 
add(background); 
add(hider); 
var letter = Randomizer.nextInt(37,88); 
 
/* The input for each one of these block of code can be change or 
* even more blocks of code can added so there would be variety 
* thus making it difficult. The range of variable "letter" must be 
* changed upon adding more blocks of code. 
*/ 
 if(letter == 1){ 
     
 letter = "H"; 
 setElement("Hydrogen", "1");
 
 } 
 
 if(letter == 2){ 
     
 letter = "He"; 
 setElement("Helium", "2");
 
 } 
 
 if(letter == 3){ 
     
 letter = "Li"; 
 setElement("Lithium", "3");
 
 } 
 
 if(letter == 4){ 
     
 letter = "Be"; 
 setElement("Beryllium", "4");
 
 
 } 
 
 if(letter == 5){ 
     
 letter = "B"; 
 setElement("Boron", "5");
 
 } 
 
 if(letter == 6){ 
     
 letter = "C"; 
 setElement("Carbon", "6");
 
 } 
 
 if(letter == 7){ 
     
 letter = "N"; 
 setElement("Nitrogen", "7");
 
 } 
 
 if(letter == 8){ 
     
 letter = "O"; 
 setElement("Oxygen", "8");
 
 } 
 
 if(letter == 9){ 
     
 letter = "F"; 
 setElement("Fluorine", "9");
 
 } 
 
 if(letter == 10){ 
 letter = "Ne"; 
 setElement("Neon", "10");
 } 
 
 if(letter == 11){ 
     
 letter = "Na"; 
 setElement("Sodium", "11");
 
 } 
 
 if(letter == 12){
     
 letter = "Mg"; 
 setElement("Magnesium", "12");
 
 } 
 
 if(letter == 13){ 
     
 letter = "Al"; 
 setElement("Aluminum", "13");
 
 } 
 
 if(letter == 14){ 
     
 letter = "Si"; 
 setElement("Silicon", "14");
 
 } 
 
 if(letter == 15){ 
     
 letter = "P"; 
 setElement("Phosphorus", "15");
 
 } 
 
 if(letter == 16){ 
     
 letter = "S"; 
 setElement("Sulfur", "16");
 
 } 
 
 if(letter == 17){ 
     
 letter = "Cl"; 
 setElement("Chlorine", "17");
 
 } 
 
 if(letter == 18){ 
     
 letter = "Ar"; 
 setElement("Argon", "18");
 
 } 
 
 if(letter == 19){ 
     
 letter = "K"; 
 setElement("Potassium", "19");
 
 } 
 
 if(letter == 20){ 
     
 letter = "Ca"; 
 setElement("Calcium", "20");
 
 }
 
 if(letter == 21){ 
     
 letter = "Sc"; 
 setElement("Scandium", "21");
 
 } 
 
 if(letter == 22){ 
     
 letter = "Ti"; 
 setElement("Titanium", "22");
 
 } 
 
 if(letter == 23){ 
     
 letter = "V"; 
 setElement("Vanadium", "23");
 
 } 
 
 if(letter == 24){ 
     
 letter = "Cr"; 
 setElement("Chromium", "24");
 
 } 
 
 if(letter == 25){ 
     
 letter = "Mn"; 
 setElement("Manganese", "25");
 
 } 
 
 if(letter == 26){ 
     
 letter = "Fe"; 
 setElement("Iron", "26");
 
 } 
 
 if(letter == 27){ 
     
 letter = "Co"; 
 setElement("Cobalt", "27");
 
 } 
 
 if(letter == 28){ 
     
 letter = "Ni"; 
 setElement("Nickel", "28");
 
 } 
 
 if(letter == 29){ 
     
 letter = "Cu"; 
 setElement("Copper", "29");
 
 } 
 
 if(letter == 30){ 
     
 letter = "Zn"; 
 setElement("Zinc", "30");
 
 } 
 
 if(letter == 31){ 
     
 letter = "Ga"; 
 setElement("Gallium", "31");
 
 } 
 
 if(letter == 32){ 
     
 letter = "Ge"; 
 setElement("Germanium", "32");
 
 } 
 
 if(letter == 33){ 
     
 letter = "As"; 
 setElement("Arsenic", "33");
 
 } 
 
 if(letter == 34){ 
     
 letter = "Se"; 
 setElement("Selenium", "34");
 
 } 
 
 if(letter == 35){ 
     
 letter = "Br"; 
 setElement("Bromine", "35");
 
 } 
 
 if(letter == 36){ 
     
 letter = "Kr"; 
 setElement("Krypton", "36");
 
 } 
 
 if(letter == 37){ 
     
 letter = "Rd"; 
 setElement("Rubidium", "37");
 
 }
 
 if(letter == 38){ 
     
 letter = "Sr"; 
 setElement("Strontium", "38");
 
 }
 
 if(letter == 39){ 
     
 letter = "Y"; 
 setElement("Yttrium", "39");
 
 }
 
 if(letter == 40){ 
     
 letter = "Zr"; 
 setElement("Zirconium", "40");
 
 }

 if(letter == 41){ 
     
 letter = "Nb"; 
 setElement("Niobium", "41");
 
 }

 if(letter == 42){ 
     
 letter = "Mo"; 
 setElement("Molybdenum", "42");
 
 }

 if(letter == 43){ 
     
 letter = "Tc"; 
 setElement("Technetium", "43");
 
 }

 if(letter == 44){ 
     
 letter = "Ru"; 
 setElement("Ruthenium", "44");
 
 }

 if(letter == 45){ 
     
 letter = "Rh"; 
 setElement("Rhodium", "45");
 
 }

 if(letter == 46){ 
     
 letter = "Pd"; 
 setElement("Palladium", "46");
 
 }

 if(letter == 47){ 
     
 letter = "Ag"; 
 setElement("Silver", "47");
 
 }

 if(letter == 48){ 
     
 letter = "Cd"; 
 setElement("Cadnium", "48");
 
 }

 if(letter == 49){ 
     
 letter = "In"; 
 setElement("Indium", "49");
 
 }

 if(letter == 50){ 
     
 letter = "Sn"; 
 setElement("Tin", "50");
 
 }

 if(letter == 51){ 
     
 letter = "Sb"; 
 setElement("Antimony", "51");
 
 }

 if(letter == 52){ 
     
 letter = "Te"; 
 setElement("Tellurium", "52");
 
 }

 if(letter == 53){ 
     
 letter = "I"; 
 setElement("Iodine", "53");
 
 }

 if(letter == 54){ 
     
 letter = "Xe"; 
 setElement("Xenon", "54");
 
 }

 if(letter == 55){ 
     
 letter = "Cs"; 
 setElement("Cesium", "55");
 
 }

 if(letter == 56){ 
     
 letter = "Ba"; 
 setElement("Barium", "56");
 
 }

 if(letter == 57){ 
     
 letter = "La"; 
 setElement("Lanthanum", "57");
 
 }

 if(letter == 58){ 
     
 letter = "Ce"; 
 setElement("Cerium", "58");
 
 }

 if(letter == 59){ 
     
 letter = "Pr"; 
 setElement("Praseodymium", "59");
 
 }

 if(letter == 60){ 
     
 letter = "Nd"; 
 setElement("Neodymium", "60");
 
 }

 if(letter == 61){ 
     
 letter = "Pm"; 
 setElement("Promethium", "61");
 
 }

 if(letter == 62){ 
     
 letter = "Sm"; 
 setElement("Samarium", "62");
 
 }

 if(letter == 63){ 
     
 letter = "Eu"; 
 setElement("Europium", "63");
 
 }

 if(letter == 64){ 
     
 letter = "Gd"; 
 setElement("Gadolinium", "64");
 
 }

 if(letter == 65){ 
     
 letter = "Tb"; 
 setElement("Terbium", "65");
 
 }

 if(letter == 66){ 
     
 letter = "Dy"; 
 setElement("Dysprosium", "66");
 
 }

 if(letter == 67){ 
     
 letter = "Ho"; 
 setElement("Holmium", "67");
 
 }

 if(letter == 68){ 
     
 letter = "Er"; 
 setElement("Erbium", "68");
 
 }

 if(letter == 69){ 
     
 letter = "Tm"; 
 setElement("Thulium", "69");
 
 }

 if(letter == 70){ 
     
 letter = "Yb"; 
 setElement("Ytterbium", "70");
 
 }

 if(letter == 71){ 
     
 letter = "Lu"; 
 setElement("Lutetium", "71");
 
 }

 if(letter == 72){ 
     
 letter = "Hf"; 
 setElement("Hafnium", "72");
 
 }

 if(letter == 73){ 
     
 letter = "Ta"; 
 setElement("Tantalum", "73");
 
 }

 if(letter == 74){ 
     
 letter = "W"; 
 setElement("Tungsten", "74");
 
 }

 if(letter == 75){ 
     
 letter = "Re"; 
 setElement("Rhenium", "75");
 
 }

 if(letter == 76){ 
     
 letter = "Os"; 
 setElement("Osmium", "76");
 
 }

 if(letter == 77){ 
     
 letter = "Ir"; 
 setElement("Iridium", "77");
 
 }

 if(letter == 78){ 
     
 letter = "Pt"; 
 setElement("Platinum", "78");
 
 }

 if(letter == 79){ 
     
 letter = "Au"; 
 setElement("Gold", "79");
 
 }

 if(letter == 80){ 
     
 letter = "Hg"; 
 setElement("Mercury", "80");
 
 }

 if(letter == 81){ 
     
 letter = "Tl"; 
 setElement("Thallium", "81");
 
 }

 if(letter == 82){ 
     
 letter = "Pb"; 
 setElement("Lead", "82");
 
 }

 if(letter == 83){ 
     
 letter = "Bi"; 
 setElement("Bismuth", "83");
 
 }

 if(letter == 84){ 
     
 letter = "Po"; 
 setElement("Polonium", "84");
 
 }

 if(letter == 85){ 
     
 letter = "At"; 
 setElement("Astatine", "85");
 
 }

 if(letter == 86){ 
     
 letter = "Rn"; 
 setElement("Radon", "86");
 
 }

 if(letter == 87){ 
     
 letter = "Fr"; 
 setElement("Francium", "87");
 
 }

 if(letter == 88){ 
     
 letter = "Ra"; 
 setElement("Radium", "88");
 
 }
 
 var formula = new Text(letter); 
 formula.setFont("50pt Arial"); 
 formula.setColor(Color.white); 
 formula.setPosition(getWidth()/2 - formula.getWidth()/2, getHeight()/2.1 + formula.getHeight()/2); 
 add(formula); 
} 

function setElement(element, atomic){
    
 name = new Text(element); 
 name.setFont("45pt Arial"); 
 name.setColor(Color.black); 
 name.setPosition(getWidth()/2 - name.getWidth()/2, getHeight()/1.4 + name.getHeight()/2); 
 add(name); 
 
 var atomicNum = new Text(atomic); 
 atomicNum.setPosition(getWidth()/2.65, getHeight()/2.4); 
 atomicNum.setColor(Color.white); 
 add(atomicNum); 
    
}

/* This function is a wrong message that appears each time 
* you get an answer wrong. 
*/ 

function wrong(answer){
    
    var screen = new Rectangle(500, 30); 
    screen.setPosition(getWidth()/15, getHeight()/4.7); 
    screen.setColor(Color.white); 
    add(screen); 
    
    var wrong = new Text("Wrong, you'll get it next time! "); 
    wrong.setFont("15pt Arial"); 
    wrong.setColor(Color.red); 
    wrong.setPosition(getWidth()/2 - wrong.getWidth()/2, getHeight()/5);
    add(wrong);
    
    var correctAnswer = new Text("The correct answer is: " + answer)
    correctAnswer.setFont("15pt Arial"); 
    correctAnswer.setColor(Color.red); 
    correctAnswer.setPosition(getWidth()/2 - correctAnswer.getWidth()/2, getHeight()/4);
    add(correctAnswer);
    

}

function whatSymbol(element, answer){
    
 var question = "What's the symbol for " + element + "? "; 
 var test = readLine(question); 
 
 if(test == answer){ 
 println("Correct! "); 
 score++; 
 add(hider); 
 add(correct); 
 
 }else{ 
 println("Wrong, you'll get it next time! The correct answer is: " + answer); 
 if(score != 0){ 
 score--; 
 add(hider); 
 } 
 wrong(answer); 
 } 
 
 scoreText.setText(score); 
    
}

function whatElement(answer, symbol){
    
 var question = "What's the element for the symbol " + symbol + "? "; 
 var test = readLine(question); 
 
 if(test == answer){ 
 println("Correct! "); 
 score++; 
 add(hider); 
 add(correct); 
 
 }else{ 
 println("Wrong, you'll get it next time! The correct answer is: " + answer); 
 if(score != 0){ 
 score--; 
 add(hider); 
 } 
 wrong(answer); 
 } 
 scoreText.setText(score);
}

function whatNumber(element, answer){
    
 var question = "What's the atomic number for " + element + "? "; 
 var test = readLine(question); 
 
 if(test == answer){ 
 println("Correct! "); 
 score++; 
 add(hider); 
 add(correct); 
 
 }else{ 
 println("Wrong, you'll get it next time! The correct answer is: " + answer); 
 if(score != 0){ 
 score--; 
 add(hider); 
 } 
 wrong(answer); 
 } 
 
 scoreText.setText(score); 
    
    
}
/* This function formulates a random question. In this 
* function the input can be changed to ask a different question 
* or include more parameters whether right or wrong is the answer 
* provided. Besides, as with the function "differElement", more 
* blocks of code can be added following the same structure and 
* by changing the range of the variable "questionNum". 
*/ 
function questions(){ 
 
 var questionNum = Randomizer.nextInt(109, 264); 
 
/* Three different kind of questions for the first 36 elements*/
 if(questionNum == 1){ 
     
     whatSymbol("Hydrogen", "H");
 } 
 
 if(questionNum == 2){ 

    whatSymbol("Helium", "He");
 } 
 
 if(questionNum == 3){ 
     
     whatSymbol("Lithium", "Li");
 } 
 
 if(questionNum == 4){ 
     
     whatSymbol("Beryllium", "Be");
 } 
 
 if(questionNum == 5){ 
     
     whatSymbol("Boron", "B");
 } 
 
 if(questionNum == 6){
     
     whatSymbol("Carbon", "C");
 }
 
 if(questionNum == 7){ 
 
    whatSymbol("Nitrogen", "N"); 
 } 
 
 if(questionNum == 8){ 
     
     whatSymbol("Oxygen", "O");
 } 
 
 if(questionNum == 9){ 
 
    whatSymbol("Fluorine", "F");
 } 
 
 if(questionNum == 10){
     
     whatSymbol("Neon", "Ne");
 }
 
 if(questionNum == 11){ 
     
     whatSymbol("Sodium", "Na");
 } 
 
 if(questionNum == 12){
     
     whatSymbol("Magnesium", "Mg");
 }
 
 if(questionNum == 13){ 
    
    whatSymbol("Aluminum", "Al"); 
 } 
 
 if(questionNum == 14){ 
     
    whatSymbol("Silicon", "Si"); 
 } 
 
 if(questionNum == 15){ 
     
    whatSymbol("Phosphorus", "P"); 
 } 
 
 if(questionNum == 16){ 
     
    whatSymbol("Sulfur", "S"); 
 } 
 
 if(questionNum == 17){ 
     
    whatSymbol("Chlorine", "Cl"); 
 } 
 
 if(questionNum == 18){ 
     
    whatSymbol("Argon", "Ar"); 
 } 
 
 if(questionNum == 19){ 
     
    whatSymbol("Potassium", "K"); 
 } 
 
 if(questionNum == 20){ 
     
    whatSymbol("Calcium", "Ca"); 
 } 
 
 if(questionNum == 21){ 
     
    whatSymbol("Scandium", "Sc"); 
 } 
 
 if(questionNum == 22){ 
     
    whatSymbol("Titanium", "Ti"); 
 } 
 
 if(questionNum == 23){ 
     
    whatSymbol("Vanadium", "V"); 
 } 
 
 if(questionNum == 24){ 
     
    whatSymbol("Chromium", "Cr"); 
 } 
 
 if(questionNum == 25){ 
     
    whatSymbol("Manganese", "Mn"); 
 } 
 
 if(questionNum == 26){ 

    whatSymbol("Iron", "Fe"); 
 } 
 
 if(questionNum == 27){ 
     
    whatSymbol("Cobalt", "Co"); 
 } 
 
 if(questionNum == 28){ 
     
    whatSymbol("Nickel", "Ni"); 
 } 
 
 if(questionNum == 29){ 
     
    whatSymbol("Copper", "Cu"); 
 } 
 
 if(questionNum == 30){ 
     
    whatSymbol("Zinc", "Zn"); 
 } 
 
 if(questionNum == 31){ 
     
    whatSymbol("Gallium", "Ga"); 
 } 
 
 if(questionNum == 32){ 
     
    whatSymbol("Germanium", "Ge"); 
 } 
 
 if(questionNum == 33){ 
     
    whatSymbol("Arsenic", "As"); 
 } 
 
 if(questionNum == 34){ 
     
    whatSymbol("Selenium", "Se"); 
 } 
 
 if(questionNum == 35){ 
     
    whatSymbol("Bromine", "Br"); 
 } 
 
 if(questionNum == 36){ 
     
    whatSymbol("Krypton", "Kr"); 
 } 
 
 if(questionNum == 37){ 
     
     whatElement("Hydrogen", "H");
 } 
 
 if(questionNum == 38){ 

    whatElement("Helium", "He");
 } 
 
 if(questionNum == 39){ 
     
     whatElement("Lithium", "Li");
 } 
 
 if(questionNum == 40){ 
     
     whatElement("Beryllium", "Be");
 } 
 
 if(questionNum == 41){ 
     
     whatElement("Boron", "B");
 } 
 
 if(questionNum == 42){
     
     whatElement("Carbon", "C");
 }
 
 if(questionNum == 43){ 
 
    whatElement("Nitrogen", "N"); 
 } 
 
 if(questionNum == 44){ 
     
     whatElement("Oxygen", "O");
 } 
 
 if(questionNum == 45){ 
 
    whatElement("Fluorine", "F");
 } 
 
 if(questionNum == 46){
     
     whatElement("Neon", "Ne");
 }
 
 if(questionNum == 47){ 
     
     whatElement("Sodium", "Na");
 } 
 
 if(questionNum == 48){
     
     whatElement("Magnesium", "Mg");
 }
 
 if(questionNum == 49){ 
    
    whatElement("Aluminum", "Al"); 
 } 
 
 if(questionNum == 50){ 
     
    whatElement("Silicon", "Si"); 
 } 
 
 if(questionNum == 51){ 
     
    whatElement("Phosphorus", "P"); 
 } 
 
 if(questionNum == 52){ 
     
    whatElement("Sulfur", "S"); 
 } 
 
 if(questionNum == 53){ 
     
    whatElement("Chlorine", "Cl"); 
 } 
 
 if(questionNum == 54){ 
     
    whatElement("Argon", "Ar"); 
 } 
 
 if(questionNum == 55){ 
     
    whatElement("Potassium", "K"); 
 } 
 
 if(questionNum == 56){ 
     
    whatElement("Calcium", "Ca"); 
 } 
 
 if(questionNum == 57){ 
     
    whatElement("Scandium", "Sc"); 
 } 
 
 if(questionNum == 58){ 
     
    whatElement("Titanium", "Ti"); 
 } 
 
 if(questionNum == 59){ 
     
    whatElement("Vanadium", "V"); 
 } 
 
 if(questionNum == 60){ 
     
    whatElement("Chromium", "Cr"); 
 } 
 
 if(questionNum == 61){ 
     
    whatElement("Manganese", "Mn"); 
 } 
 
 if(questionNum == 62){ 

    whatElement("Iron", "Fe"); 
 } 
 
 if(questionNum == 63){ 
     
    whatElement("Cobalt", "Co"); 
 } 
 
 if(questionNum == 64){ 
     
    whatElement("Nickel", "Ni"); 
 } 
 
 if(questionNum == 65){ 
     
    whatElement("Copper", "Cu"); 
 } 
 
 if(questionNum == 66){ 
     
    whatElement("Zinc", "Zn"); 
 } 
 
 if(questionNum == 67){ 
     
    whatElement("Gallium", "Ga"); 
 } 
 
 if(questionNum == 68){ 
     
    whatElement("Germanium", "Ge"); 
 } 
 
 if(questionNum == 69){ 
     
    whatElement("Arsenic", "As"); 
 } 
 
 if(questionNum == 70){ 
     
    whatElement("Selenium", "Se"); 
 } 
 
 if(questionNum == 71){ 
     
    whatElement("Bromine", "Br"); 
 } 
 
 if(questionNum == 72){ 
     
    whatElement("Krypton", "Kr"); 
 } 
 
 if(questionNum == 73){ 
     
     whatNumber("Hydrogen", "1");
 } 
 
 if(questionNum == 74){ 

    whatNumber("Helium", "2");
 } 
 
 if(questionNum == 75){ 
     
     whatNumber("Lithium", "3");
 } 
 
 if(questionNum == 76){ 
     
     whatNumber("Beryllium", "4");
 } 
 
 if(questionNum == 77){ 
     
     whatNumber("Boron", "5");
 } 
 
 if(questionNum == 78){
     
     whatNumber("Carbon", "6");
 }
 
 if(questionNum == 79){ 
 
    whatNumber("Nitrogen", "7"); 
 } 
 
 if(questionNum == 80){ 
     
     whatNumber("Oxygen", "8");
 } 
 
 if(questionNum == 81){ 
 
    whatNumber("Fluorine", "9");
 } 
 
 if(questionNum == 82){
     
     whatNumber("Neon", "10");
 }
 
 if(questionNum == 83){ 
     
     whatNumber("Sodium", "11");
 } 
 
 if(questionNum == 84){
     
     whatNumber("Magnesium", "12");
 }
 
 if(questionNum == 85){ 
    
    whatNumber("Aluminum", "13"); 
 } 
 
 if(questionNum == 86){ 
     
    whatNumber("Silicon", "14"); 
 } 
 
 if(questionNum == 87){ 
     
    whatNumber("Phosphorus", "15"); 
 } 
 
 if(questionNum == 88){ 
     
    whatNumber("Sulfur", "16"); 
 } 
 
 if(questionNum == 89){ 
     
    whatNumber("Chlorine", "17"); 
 } 
 
 if(questionNum == 90){ 
     
    whatNumber("Argon", "18"); 
 } 
 
 if(questionNum == 91){ 
     
    whatNumber("Potassium", "19"); 
 } 
 
 if(questionNum == 92){ 
     
    whatNumber("Calcium", "20"); 
 } 
 
 if(questionNum == 93){ 
     
    whatNumber("Scandium", "21"); 
 } 
 
 if(questionNum == 94){ 
     
    whatNumber("Titanium", "22"); 
 } 
 
 if(questionNum == 95){ 
     
    whatNumber("Vanadium", "23"); 
 } 
 
 if(questionNum == 96){ 
     
    whatNumber("Chromium", "24"); 
 } 
 
 if(questionNum == 97){ 
     
    whatNumber("Manganese", "25"); 
 } 
 
 if(questionNum == 98){ 

    whatNumber("Iron", "26"); 
 } 
 
 if(questionNum == 99){ 
     
    whatNumber("Cobalt", "27"); 
 } 
 
 if(questionNum == 100){ 
     
    whatNumber("Nickel", "28"); 
 } 
 
 if(questionNum == 101){ 
     
    whatNumber("Copper", "29"); 
 } 
 
 if(questionNum == 102){ 
     
    whatNumber("Zinc", "30"); 
 } 
 
 if(questionNum == 103){ 
     
    whatNumber("Gallium", "31"); 
 } 
 
 if(questionNum == 104){ 
     
    whatNumber("Germanium", "32"); 
 } 
 
 if(questionNum == 105){ 
     
    whatNumber("Arsenic", "33"); 
 } 
 
 if(questionNum == 106){ 
     
    whatNumber("Selenium", "34"); 
 } 
 
 if(questionNum == 107){ 
     
    whatNumber("Bromine", "35"); 
 } 
 
 if(questionNum == 108){ 
     
    whatNumber("Krypton", "36"); 
 } 
 
 /*Questions for the elements between 36 and 89*/
 if(questionNum == 109){ 

    whatSymbol("Rubidium", "Rb");
 }
 
 if(questionNum == 110){ 

    whatSymbol("Strontium", "Sr");
 }
 
 if(questionNum == 111){ 

    whatSymbol("Yttrium", "Y");
 }
 
 if(questionNum == 112){ 

    whatSymbol("Zirconium", "Zr");
 }
 
 if(questionNum == 113){ 

    whatSymbol("Niobium", "Nb");
 }
 
 if(questionNum == 114){ 

    whatSymbol("Molybdenium", "Mo");
 }
 
 if(questionNum == 115){ 

    whatSymbol("Technetium", "Tc");
 }
 
 if(questionNum == 116){ 

    whatSymbol("Ruthenium", "Ru");
 }
 
 if(questionNum == 117){ 

    whatSymbol("Rhodium", "Rh");
 }
 
 if(questionNum == 118){ 

    whatSymbol("Palladium", "Pd");
 }
 
 if(questionNum == 119){ 

    whatSymbol("Silver", "Ag");
 }
 
 if(questionNum == 120){ 

    whatSymbol("Cadnium", "Cd");
 }
 
 if(questionNum == 121){ 

    whatSymbol("Indium", "In");
 }
 
 if(questionNum == 122){ 

    whatSymbol("Tin", "Sn");
 }
 
 if(questionNum == 123){ 

    whatSymbol("Antimony", "Sb");
 }
 
 if(questionNum == 124){ 

    whatSymbol("Tellurium", "Te");
 }
 
 if(questionNum == 125){ 

    whatSymbol("Iodine", "I");
 }
 
 if(questionNum == 126){ 

    whatSymbol("Xenon", "Xe");
 }
 
 if(questionNum == 127){ 

    whatSymbol("Cesium", "Cs");
 }
 
 if(questionNum == 128){ 

    whatSymbol("Barium", "Ba");
 }
 
 if(questionNum == 129){ 

    whatSymbol("Lanthanum", "La");
 }
 
 if(questionNum == 130){ 

    whatSymbol("Cerium", "Ce");
 }
 
 if(questionNum == 131){ 

    whatSymbol("Praseodymium", "Pr");
 }
 
 if(questionNum == 132){ 

    whatSymbol("Neodymium", "Nd");
 }
 
 if(questionNum == 133){ 

    whatSymbol("Promethium", "Pm");
 }
 
 if(questionNum == 134){ 

    whatSymbol("Samarium", "Sm");
 }
 
 if(questionNum == 135){ 

    whatSymbol("Europium", "Eu");
 }
 
 if(questionNum == 136){ 

    whatSymbol("Gadolinium", "Gd");
 }
 
 if(questionNum == 137){ 

    whatSymbol("Terbium", "Tb");
 }
 
 if(questionNum == 138){ 

    whatSymbol("Dysprosium", "Dy");
 }
 
 if(questionNum == 139){ 

    whatSymbol("Holmium", "Ho");
 }
 
 if(questionNum == 140){ 

    whatSymbol("Erbium", "Er");
 }
 
 if(questionNum == 141){ 

    whatSymbol("Thulium", "Tm");
 }
 
 if(questionNum == 142){ 

    whatSymbol("Ytterbium", "Yb");
 }
 
 if(questionNum == 143){ 

    whatSymbol("Lutetium", "Lu");
 }
 
 if(questionNum == 144){ 

    whatSymbol("Hafnium", "Hf");
 }
 
 if(questionNum == 145){ 

    whatSymbol("Tantalum", "Ta");
 }
 
 if(questionNum == 146){ 

    whatSymbol("Tungsten", "W");
 }
 
 if(questionNum == 147){ 

    whatSymbol("Rhenium", "Re");
 }
 
 if(questionNum == 148){ 

    whatSymbol("Osmium", "Os");
 }
 
 if(questionNum == 149){ 

    whatSymbol("Iridium", "Ir");
 }
 
 if(questionNum == 150){ 

    whatSymbol("Platinum", "Pt");
 }
 
 if(questionNum == 151){ 

    whatSymbol("Gold", "Au");
 }
 
 if(questionNum == 152){ 

    whatSymbol("Mercury", "Hg");
 }
 
 if(questionNum == 153){ 

    whatSymbol("Thallium", "Tl");
 }
 
 if(questionNum == 154){ 

    whatSymbol("Lead", "Pb");
 }
 
 if(questionNum == 155){ 

    whatSymbol("Bismuth", "Bi");
 }
 
 if(questionNum == 156){ 

    whatSymbol("Polonium", "Po");
 }
 
 if(questionNum == 157){ 

    whatSymbol("Astatine", "At");
 }
 
 if(questionNum == 158){ 

    whatSymbol("Radon", "Rn");
 }
 
 if(questionNum == 159){ 

    whatSymbol("Francium", "Fr");
 }
 
 if(questionNum == 160){ 

    whatSymbol("Radium", "Ra");
 }
 
 if(questionNum == 161){ 

    whatElement("Rubidium", "Rb");
 }
 
 if(questionNum == 162){ 

    whatElement("Strontium", "Sr");
 }
 
 if(questionNum == 163){ 

    whatElement("Yttrium", "Y");
 }
 
 if(questionNum == 164){ 

    whatElement("Zirconium", "Zr");
 }
 
 if(questionNum == 165){ 

    whatElement("Niobium", "Nb");
 }
 
 if(questionNum == 166){ 

    whatElement("Molybdenium", "Mo");
 }
 
 if(questionNum == 167){ 

    whatElement("Technetium", "Tc");
 }
 
 if(questionNum == 168){ 

    whatElement("Ruthenium", "Ru");
 }
 
 if(questionNum == 169){ 

    whatElement("Rhodium", "Rh");
 }
 
 if(questionNum == 170){ 

    whatElement("Palladium", "Pd");
 }
 
 if(questionNum == 171){ 

    whatElement("Silver", "Ag");
 }
 
 if(questionNum == 172){ 

    whatElement("Cadnium", "Cd");
 }
 
 if(questionNum == 173){ 

    whatElement("Indium", "In");
 }
 
 if(questionNum == 174){ 

    whatElement("Tin", "Sn");
 }
 
 if(questionNum == 175){ 

    whatElement("Antimony", "Sb");
 }
 
 if(questionNum == 176){ 

    whatElement("Tellurium", "Te");
 }
 
 if(questionNum == 177){ 

    whatElement("Iodine", "I");
 }
 
 if(questionNum == 178){ 

    whatElement("Xenon", "Xe");
 }
 
 if(questionNum == 179){ 

    whatElement("Cesium", "Cs");
 }
 
 if(questionNum == 180){ 

    whatElement("Barium", "Ba");
 }
 
 if(questionNum == 181){ 

    whatElement("Lanthanum", "La");
 }
 
 if(questionNum == 182){ 

    whatElement("Cerium", "Ce");
 }
 
 if(questionNum == 183){ 

    whatElement("Praseodymium", "Pr");
 }
 
 if(questionNum == 184){ 

    whatElement("Neodymium", "Nd");
 }
 
 if(questionNum == 185){ 

    whatElement("Promethium", "Pm");
 }
 
 if(questionNum == 186){ 

    whatElement("Samarium", "Sm");
 }
 
 if(questionNum == 187){ 

    whatElement("Europium", "Eu");
 }
 
 if(questionNum == 188){ 

    whatElement("Gadolinium", "Gd");
 }
 
 if(questionNum == 189){ 

    whatElement("Terbium", "Tb");
 }
 
 if(questionNum == 190){ 

    whatElement("Dysprosium", "Dy");
 }
 
 if(questionNum == 191){ 

    whatElement("Holmium", "Ho");
 }
 
 if(questionNum == 192){ 

    whatElement("Erbium", "Er");
 }
 
 if(questionNum == 193){ 

    whatElement("Thulium", "Tm");
 }
 
 if(questionNum == 194){ 

    whatElement("Ytterbium", "Yb");
 }
 
 if(questionNum == 195){ 

    whatElement("Lutetium", "Lu");
 }
 
 if(questionNum == 196){ 

    whatElement("Hafnium", "Hf");
 }
 
 if(questionNum == 197){ 

    whatElement("Tantalum", "Ta");
 }
 
 if(questionNum == 198){ 

    whatElement("Tungsten", "W");
 }
 
 if(questionNum == 199){ 

    whatElement("Rhenium", "Re");
 }
 
 if(questionNum == 200){ 

    whatElement("Osmium", "Os");
 }
 
 if(questionNum == 201){ 

    whatElement("Iridium", "Ir");
 }
 
 if(questionNum == 202){ 

    whatElement("Platinum", "Pt");
 }
 
 if(questionNum == 203){ 

    whatElement("Gold", "Au");
 }
 
 if(questionNum == 204){ 

    whatElement("Mercury", "Hg");
 }
 
 if(questionNum == 205){ 

    whatElement("Thallium", "Tl");
 }
 
 if(questionNum == 206){ 

    whatElement("Lead", "Pb");
 }
 
 if(questionNum == 207){ 

    whatElement("Bismuth", "Bi");
 }
 
 if(questionNum == 208){ 

    whatElement("Polonium", "Po");
 }
 
 if(questionNum == 209){ 

    whatElement("Astatine", "At");
 }
 
 if(questionNum == 210){ 

    whatElement("Radon", "Rn");
 }
 
 if(questionNum == 211){ 

    whatElement("Francium", "Fr");
 }
 
 if(questionNum == 212){ 

    whatElement("Radium", "Ra");
 }
 
 if(questionNum == 213){ 

    whatNumber("Rubidium", "37");
 }
 
 if(questionNum == 214){ 

    whatNumber("Strontium", "38");
 }
 
 if(questionNum == 215){ 

    whatNumber("Yttrium", "39");
 }
 
 if(questionNum == 216){ 

    whatNumber("Zirconium", "40");
 }
 
 if(questionNum == 217){ 

    whatNumber("Niobium", "41");
 }
 
 if(questionNum == 218){ 

    whatNumber("Molybdenium", "42");
 }
 
 if(questionNum == 219){ 

    whatNumber("Technetium", "43");
 }
 
 if(questionNum == 220){ 

    whatNumber("Ruthenium", "44");
 }
 
 if(questionNum == 221){ 

    whatNumber("Rhodium", "45");
 }
 
 if(questionNum == 222){ 

    whatNumber("Palladium", "46");
 }
 
 if(questionNum == 223){ 

    whatNumber("Silver", "47");
 }
 
 if(questionNum == 224){ 

    whatNumber("Cadnium", "48");
 }
 
 if(questionNum == 225){ 

    whatNumber("Indium", "49");
 }
 
 if(questionNum == 226){ 

    whatNumber("Tin", "50");
 }
 
 if(questionNum == 227){ 

    whatNumber("Antimony", "51");
 }
 
 if(questionNum == 228){ 

    whatNumber("Tellurium", "52");
 }
 
 if(questionNum == 229){ 

    whatNumber("Iodine", "53");
 }
 
 if(questionNum == 230){ 

    whatNumber("Xenon", "54");
 }
 
 if(questionNum == 231){ 

    whatNumber("Cesium", "55");
 }
 
 if(questionNum == 232){ 

    whatNumber("Barium", "56");
 }
 
 if(questionNum == 233){ 

    whatNumber("Lanthanum", "57");
 }
 
 if(questionNum == 234){ 

    whatNumber("Cerium", "58");
 }
 
 if(questionNum == 235){ 

    whatNumber("Praseodymium", "59");
 }
 
 if(questionNum == 236){ 

    whatNumber("Neodymium", "60");
 }
 
 if(questionNum == 237){ 

    whatNumber("Promethium", "61");
 }
 
 if(questionNum == 238){ 

    whatNumber("Samarium", "62");
 }
 
 if(questionNum == 239){ 

    whatNumber("Europium", "63");
 }
 
 if(questionNum == 240){ 

    whatNumber("Gadolinium", "64");
 }
 
 if(questionNum == 241){ 

    whatNumber("Terbium", "65");
 }
 
 if(questionNum == 242){ 

    whatNumber("Dysprosium", "66");
 }
 
 if(questionNum == 243){ 

    whatNumber("Holmium", "67");
 }
 
 if(questionNum == 244){ 

    whatNumber("Erbium", "68");
 }
 
 if(questionNum == 245){ 

    whatNumber("Thulium", "69");
 }
 
 if(questionNum == 246){ 

    whatNumber("Ytterbium", "70");
 }
 
 if(questionNum == 247){ 

    whatNumber("Lutetium", "71");
 }
 
 if(questionNum == 248){ 

    whatNumber("Hafnium", "72");
 }
 
 if(questionNum == 249){ 

    whatNumber("Tantalum", "73");
 }
 
 if(questionNum == 250){ 

    whatNumber("Tungsten", "74");
 }
 
 if(questionNum == 251){ 

    whatNumber("Rhenium", "75");
 }
 
 if(questionNum == 252){ 

    whatNumber("Osmium", "76");
 }
 
 if(questionNum == 253){ 

    whatNumber("Iridium", "77");
 }
 
 if(questionNum == 254){ 

    whatNumber("Platinum", "78");
 }
 
 if(questionNum == 255){ 

    whatNumber("Gold", "79");
 }
 
 if(questionNum == 256){ 

    whatNumber("Mercury", "80");
 }
 
 if(questionNum == 257){ 

    whatNumber("Thallium", "81");
 }
 
 if(questionNum == 258){ 

    whatNumber("Lead", "82");
 }
 
 if(questionNum == 259){ 

    whatNumber("Bismuth", "83");
 }
 
 if(questionNum == 260){ 

    whatNumber("Polonium", "84");
 }
 
 if(questionNum == 261){ 

    whatNumber("Astatine", "85");
 }
 
 if(questionNum == 262){ 

    whatNumber("Radon", "86");
 }
 
 if(questionNum == 263){ 

    whatNumber("Francium", "87");
 }
 
 if(questionNum == 264){ 

    whatNumber("Radium", "88");
 }
 

 
/* This variable "motivate" generates a random message based on 
* the score you reach by answering the questions right and it 
* sets a score limit that when reached it stops the "setTimer" 
* command. 
*/ 
 var motivate = Randomizer.nextInt(1, 5); 
 
 if(motivate == 1){ 
 motivate = "You are really good at this! "; 
 } 
 if(motivate == 2){ 
 motivate = "Good Job! Do the best you can! "; 
 } 
 if(motivate == 3){ 
 motivate = "Amazing! "; 
 } 
 if(motivate == 4){ 
 motivate = "That's a good amount of correct answers! "; 
 } 
 if(motivate == 5){ 
 motivate = "Keep it up! "; 
 } 
 
 if(score == 4 || score == 8 || score == 12 || score == 16){ 
 var cover = new Rectangle(400, 60); 
 cover.setColor(Color.white); 
 cover.setPosition(0, getHeight()/15); 
 add(cover); 
 
 var positiveMessage = new Text(motivate); 
 positiveMessage.setPosition(10, getHeight()/9); 
 positiveMessage.setColor(Color.blue); 
 positiveMessage.setFont("15pt Arial"); 
 add(positiveMessage); 
 } 
 
 if(score == 20){ 
 var cover = new Rectangle(400, 60); 
 cover.setColor(Color.white); 
 cover.setPosition(0, getHeight()/15); 
 add(cover); 
 
 var end = new Text("You've reach the maximum score, Congrats!!!"); 
 end.setPosition(10, getHeight()/10); 
 end.setColor(Color.black); 
 end.setFont("12pt Arial"); 
 add(end); 
 
 var end2 = new Text("You can still click the screen to keep learning. "); 
 end2.setPosition(10, getHeight()/7); 
 end2.setColor(Color.black); 
 end2.setFont("12pt Arial"); 
 add(end2); 
 
 stopTimer(questions); 
 } 
}