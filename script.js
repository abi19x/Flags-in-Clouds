//selecting the HTML elements I will work with in my JS file
let btn = document.getElementById("btn");
let outcome = document.getElementById("outcome");


//The function that will be triggered when I click the button
function generateFlags() {
    let firstButton = document.getElementById("btn");
    firstButton.innerHTML = "Next";
    firstButton.classList.add("next");
    firstButton.style.backgroundColor = "blueviolet";
     //define an array of flag objects
     let flags = [
        { src: "flags/Flag_of_Afghanistan.png", alt: "Flag of Afghanistan", name: "Afghanistan"},
        { src: "flags/Flag_of_Albania.png", alt: "Flag of Albania", name: "Albania"},
        { src: "flags/Flag_of_Algeria.png", alt: "Flag of Algeria", name: "Algeria"},
        { src: "flags/Flag_of_Andorra.png", alt: "Flag of Andorra", name: "Andorra"},
        { src: "flags/Flag_of_Angola.png", alt: "Flag of Angola", name: "Angola"},
        { src: "flags/Flag_of_Antigua_and_Barbuda.png", alt: "Flag of Antigua and Barbuda", name: "Antigua and Barbuda"},
        { src: "flags/Flag_of_Argentina.png", alt: "Flag of Argentina", name: "Argentina"},
        { src: "flags/Flag_of_Armenia.png", alt: "Flag of Armenia", name: "Armenia"},
        { src: "flags/Flag_of_Australia.png", alt: "Flag of Australia", name: "Australia"},
        { src: "flags/Flag_of_Austria.png", alt: "Flag of Austria", name: "Austria"},
        { src: "flags/Flag_of_Azerbaijan.png", alt: "Flag of Azerbaijan", name: "Azerbaijan"},
        { src: "flags/Flag_of_Bahrain.png", alt: "Flag of Bahrain", name: "Bahrain"},
        { src: "flags/Flag_of_Bangladesh.png", alt: "Flag of Bangladesh", name: "Bangladesh"},
        { src: "flags/Flag_of_Barbados.png", alt: "Flag of Barbados", name: "Barbados"},
        { src: "flags/Flag_of_Belarus.png", alt: "Flag of Belarus", name: "Belarus"},
        { src: "flags/Flag_of_Belgium.png", alt: "Flag of Belgium", name: "Belgium"},
        { src: "flags/Flag_of_Belize.png", alt: "Flag of Belize", name: "Belize"},
        { src: "flags/Flag_of_Benin.png", alt: "Flag of Benin", name: "Benin"},
        { src: "flags/Flag_of_Bhutan.png", alt: "Flag of Bhutan", name: "Bhutan"},
        { src: "flags/Flag_of_Bolivia.png", alt: "Flag of Bolivia", name: "Bolivia"},
        { src: "flags/Flag_of_Bosnia_and_Herzegovina.png", alt: "Flag of Bosnia and Herzegovina", name: "Bosnia and Herzegovina"},
        { src: "flags/Flag_of_Botswana.png", alt: "Flag of Botswana", name: "Botswana"},
        { src: "flags/Flag_of_Brazil.png", alt: "Flag of Brazil", name: "Brazil"},
        { src: "flags/Flag_of_Brunei.png", alt: "Flag of Brunei", name: "Brunei"},
        { src: "flags/Flag_of_Bulgaria.png", alt: "Flag of Bulgaria", name: "Bulgaria"},
        { src: "flags/Flag_of_Burkina_Faso.png", alt: "Flag of Burkina Faso", name: "Burkina Faso"},
        { src: "flags/Flag_of_Burundi.png", alt: "Flag of Burundi", name: "Burundi"},
        { src: "flags/Flag_of_Cambodia.png", alt: "Flag of Cambodia", name: "Cambodia"},
        { src: "flags/Flag_of_Cameroon.png", alt: "Flag of Cameroon", name: "Cameroon"},
        { src: "flags/Flag_of_Canada.png", alt: "Flag of Canada", name: "Canada"},
        { src: "flags/Flag_of_Cape_Verde.png", alt: "Flag of Cape Verde", name: "Cape Verde"},
        { src: "flags/Flag_of_Chad.png", alt: "Flag of Chad", name: "Chad"},
        { src: "flags/Flag_of_Chile.png", alt: "Flag of Chile", name: "Chile"},
        { src: "flags/Flag_of_Colombia.png", alt: "Flag of Colombia", name: "Colombia"},
        { src: "flags/Flag_of_Costa_Rica.png", alt: "Flag of Costa Rica", name: "Costa Rica"},
        { src: "flags/Flag_of_Côte_d'Ivoire.png", alt: "Flag of Ivory Coast", name: "Ivory Coast"},
        { src: "flags/Flag_of_Croatia.png", alt: "Flag of Croatia", name: "Croatia"},
        { src: "flags/Flag_of_Cuba.png", alt: "Flag of Cuba", name: "Cuba"},
        { src: "flags/Flag_of_Cyprus.png", alt: "Flag of Cyprus", name: "Cyprus"},
        { src: "flags/Flag_of_Denmark.png", alt: "Flag of Denmark", name: "Denmark"},
        { src: "flags/Flag_of_Djibouti.png", alt: "Flag of Djibouti", name: "Djibouti"},
        { src: "flags/Flag_of_Dominica.png", alt: "Flag of Dominica", name: "Dominica"},
        { src: "flags/Flag_of_East_Timor.png", alt: "Flag of Timor Leste", name: "Timor Leste"},
        { src: "flags/Flag_of_Ecuador.png", alt: "Flag of Ecuador", name: "Ecuador"},
        { src: "flags/Flag_of_Egypt.png", alt: "Flag of Egypt", name: "Egypt"},
        { src: "flags/Flag_of_El_Salvador.png", alt: "Flag of El Salvador", name: "El Salvador"},
        { src: "flags/Flag_of_Equatorial_Guinea.png", alt: "Flag of Equatorial Guinea", name: "Equatorial Guinea"},
        { src: "flags/Flag_of_Eritrea.png", alt: "Flag of Eritrea", name: "Eritrea"},
        { src: "flags/Flag_of_Estonia.png", alt: "Flag of Estonia", name: "Estonia"},
        { src: "flags/Flag_of_Eswatini.png", alt: "Flag of Eswatini", name: "Eswatini"},
        { src: "flags/Flag_of_Ethiopia.png", alt: "Flag of Ethiopia", name: "Ethiopia"},
        { src: "flags/Flag_of_Fiji.png", alt: "Flag of Fiji", name: "Fiji"},
        { src: "flags/Flag_of_Finland.png", alt: "Flag of Finland", name: "Finland"},
        { src: "flags/Flag_of_France.png", alt: "Flag of France", name: "France"},
        { src: "flags/Flag_of_Gabon.png", alt: "Flag of Gabon", name: "Gabon"},
        { src: "flags/Flag_of_Georgia.png", alt: "Flag of Georgia", name: "Georgia"},
        { src: "flags/Flag_of_Germany.png", alt: "Flag of Germany", name: "Germany"},
        { src: "flags/Flag_of_Ghana.png", alt: "Flag of Ghana", name: "Ghana"},
        { src: "flags/Flag_of_Greece.png", alt: "Flag of Greece", name: "Greece"},
        { src: "flags/Flag_of_Grenada.png", alt: "Flag of Grenada", name: "Grenada"},
        { src: "flags/Flag_of_Guatemala.png", alt: "Flag of Guatemala", name: "Guatemala"},
        { src: "flags/Flag_of_Guinea-Bissau.png", alt: "Flag of Guinea Bissau", name: "Guinea Bissau"},
        { src: "flags/Flag_of_Guinea.png", alt: "Flag of Guinea", name: "Guinea"},
        { src: "flags/Flag_of_Guyana.png", alt: "Flag of Guyana", name: "Guyana"},
        { src: "flags/Flag_of_Haiti.png", alt: "Flag of Haiti", name: "Haiti"},
        { src: "flags/Flag_of_Honduras.png", alt: "Flag of Honduras", name: "Honduras"},
        { src: "flags/Flag_of_Hungary.png", alt: "Flag of Hungary", name: "Hungary"},
        { src: "flags/Flag_of_Iceland.png", alt: "Flag of Iceland", name: "Iceland"},
        { src: "flags/Flag_of_India.png", alt: "Flag of India", name: "India"},
        { src: "flags/Flag_of_Indonesia.png", alt: "Flag of Indonesia", name: "Indonesia"},
        { src: "flags/Flag_of_Iran.png", alt: "Flag of Iran", name: "Iran"},
        { src: "flags/Flag_of_Iraq.png", alt: "Flag of Iraq", name: "Iraq"},
        { src: "flags/Flag_of_Ireland.png", alt: "Flag of Ireland", name: "Ireland"},
        { src: "flags/Flag_of_Israel.png", alt: "Flag of Israel", name: "Israel"},
        { src: "flags/Flag_of_Italy.png", alt: "Flag of Italy", name: "Italy"},
        { src: "flags/Flag_of_Jamaica.png", alt: "Flag of Jamaica", name: "Jamaica"},
        { src: "flags/Flag_of_Japan.png", alt: "Flag of Japan", name: "Japan"},
        { src: "flags/Flag_of_Jordan.png", alt: "Flag of Jordan", name: "Jordan"},
        { src: "flags/Flag_of_Kazakhstan.png", alt: "Flag of Kazakhstan", name: "Kazakhstan"},
        { src: "flags/Flag_of_Kenya.png", alt: "Flag of Kenya", name: "Kenya"},
        { src: "flags/Flag_of_Kiribati.png", alt: "Flag of Kiribati", name: "Kiribati"},
        { src: "flags/Flag_of_Kuwait.png", alt: "Flag of Kuwait", name: "Kuwait"},
        { src: "flags/Flag_of_Kyrgyzstan.png", alt: "Flag of Kyrgyzstan", name: "Kyrgyzstan"},
        { src: "flags/Flag_of_Laos.png", alt: "Flag of Laos", name: "Laos"},
        { src: "flags/Flag_of_Latvia.png", alt: "Flag of Latvia", name: "Latvia"},
        { src: "flags/Flag_of_Lebanon.png", alt: "Flag of Lebanon", name: "Lebanon"},
        { src: "flags/Flag_of_Lesotho.png", alt: "Flag of Lesotho", name: "Lesotho"},
        { src: "flags/Flag_of_Liberia.png", alt: "Flag of Liberia", name: "Liberia"},
        { src: "flags/Flag_of_Libya.png", alt: "Flag of Libya", name: "Libya"},
        { src: "flags/Flag_of_Liechtenstein.png", alt: "Flag of Liechtenstein", name: "Liechtenstein"},
        { src: "flags/Flag_of_Lithuania.png", alt: "Flag of Lithuania", name: "Lithuania"},
        { src: "flags/Flag_of_Luxembourg.png", alt: "Flag of Luxembourg", name: "Luxembourg"},
        { src: "flags/Flag_of_Madagascar.png", alt: "Flag of Madagascar", name: "Madagascar"},
        { src: "flags/Flag_of_Malawi.png", alt: "Flag of Malawi", name: "Malawi"},
        { src: "flags/Flag_of_Malaysia.png", alt: "Flag of Malaysia", name: "Malaysia"},
        { src: "flags/Flag_of_Maldives.png", alt: "Flag of Maldives", name: "Maldives"},
        { src: "flags/Flag_of_Mali.png", alt: "Flag of Mali", name: "Mali"},
        { src: "flags/Flag_of_Malta.png", alt: "Flag of Malta", name: "Malta"},
        { src: "flags/Flag_of_Mauritania.png", alt: "Flag of Mauritania", name: "Mauritania"},
        { src: "flags/Flag_of_Mauritius.png", alt: "Flag of Mauritius", name: "Mauritius"},
        { src: "flags/Flag_of_Mexico.png", alt: "Flag of Mexico", name: "Mexico"},
        { src: "flags/Flag_of_Moldova.png", alt: "Flag of Moldova", name: "Moldova"},
        { src: "flags/Flag_of_Monaco.png", alt: "Flag of Monaco", name: "Monaco"},
        { src: "flags/Flag_of_Mozambique.png", alt: "Flag of Mozambique", name: "Mozambique"},
        { src: "flags/Flag_of_Myanmar.png", alt: "Flag of Myanmar", name: "Myanmar"},
        { src: "flags/Flag_of_Namibia.png", alt: "Flag of Namibia", name: "Namibia"},
        { src: "flags/Flag_of_Nauru.png", alt: "Flag of Nauru", name: "Nauru"},
        { src: "flags/Flag_of_Nepal.png", alt: "Flag of Nepal", name: "Nepal"},
        { src: "flags/Flag_of_New_Zealand.png", alt: "Flag of New Zealand", name: "New Zealand"},
        { src: "flags/Flag_of_Nicaragua.png", alt: "Flag of Nicaragua", name: "Nicaragua"},
        { src: "flags/Flag_of_Niger.png", alt: "Flag of Niger", name: "Niger"},
        { src: "flags/Flag_of_Nigeria.png", alt: "Flag of Nigeria", name: "Nigeria"},
        { src: "flags/Flag_of_North_Korea.png", alt: "Flag of North Korea", name: "North Korea"},
        { src: "flags/Flag_of_North_Macedonia.png", alt: "Flag of North Macedonia", name: "North Macedonia"},
        { src: "flags/Flag_of_Norway.png", alt: "Flag of Norway", name: "Norway"},
        { src: "flags/Flag_of_Oman.png", alt: "Flag of Oman", name: "Oman"},
        { src: "flags/Flag_of_Pakistan.png", alt: "Flag of Pakistan", name: "Pakistan"},
        { src: "flags/Flag_of_Palau.png", alt: "Flag of Palau", name: "Palau"},
        { src: "flags/Flag_of_Palestine.png", alt: "Flag of Palestine", name: "Palestine"},
        { src: "flags/Flag_of_Panama.png", alt: "Flag of Panama", name: "Panama"},
        { src: "flags/Flag_of_Papua_New_Guinea.png", alt: "Flag of Papua New Guinea", name: "Papua New Guinea"},
        { src: "flags/Flag_of_Paraguay.png", alt: "Flag of Paraguay", name: "Paraguay"},
        { src: "flags/Flag_of_Peru.png", alt: "Flag of Peru", name: "Peru"},
        { src: "flags/Flag_of_Poland.png", alt: "Flag of Poland", name: "Poland"},
        { src: "flags/Flag_of_Portugal.png", alt: "Flag of Portugal", name: "Portugal"},
        { src: "flags/Flag_of_Qatar.png", alt: "Flag of Qatar", name: "Qatar"},
        { src: "flags/Flag_of_Romania.png", alt: "Flag of Romania", name: "Romania"},
        { src: "flags/Flag_of_Russia.png", alt: "Flag of Russia", name: "Russia"},
        { src: "flags/Flag_of_Rwanda.png", alt: "Flag of Rwanda", name: "Rwanda"},
        { src: "flags/Flag_of_Saint_Kitts_and_Nevis.png", alt: "Flag of Saint Kitts and Nevis", name: "Saint Kitts and Nevis"},
        { src: "flags/Flag_of_Saint_Lucia.png", alt: "Flag of Saint Lucia", name: "Saint Lucia"},
        { src: "flags/Flag_of_Saint_Vincent_and_the_Grenadines.png", alt: "Flag of Saint Vincent and the Grenadines", name: "Saint Vincent and the Grenadines"},
        { src: "flags/Flag_of_Samoa.png", alt: "Flag of Samoa", name: "Samoa"},
        { src: "flags/Flag_of_San_Marino.png", alt: "Flag of San Marino", name: "San Marino"},
        { src: "flags/Flag_of_São_Tomé_and_Príncipe.png", alt: "Flag of Sao Tome and Principe", name: "Sao Tome and Principe"},
        { src: "flags/Flag_of_Saudi_Arabia.png", alt: "Flag of Saudi Arabia", name: "Saudi Arabia"},
        { src: "flags/Flag_of_Senegal.png", alt: "Flag of Senegal", name: "Senegal"},
        { src: "flags/Flag_of_Serbia.png", alt: "Flag of Serbia", name: "Serbia"},
        { src: "flags/Flag_of_Seychelles.png", alt: "Flag of Seychelles", name: "Seychelles"},
        { src: "flags/Flag_of_Sierra_Leone.png", alt: "Flag of Sierra Leone", name: "Sierra Leone"},
        { src: "flags/Flag_of_Singapore.png", alt: "Flag of Singapore", name: "Singapore"},
        { src: "flags/Flag_of_Slovakia.png", alt: "Flag of Slovakia", name: "Slovakia"},
        { src: "flags/Flag_of_Slovenia.png", alt: "Flag of Slovenia", name: "Slovenia"},
        { src: "flags/Flag_of_Somalia.png", alt: "Flag of Somalia", name: "Somalia"},
        { src: "flags/Flag_of_South_Africa.png", alt: "Flag of South Africa", name: "South Africa"},
        { src: "flags/Flag_of_South_Korea.png", alt: "Flag of South Korea", name: "South Korea"},
        { src: "flags/Flag_of_South_Sudan.png", alt: "Flag of South Sudan", name: "South Sudan"},
        { src: "flags/Flag_of_Spain.png", alt: "Flag of Spain", name: "Spain"},
        { src: "flags/Flag_of_Sri_Lanka.png", alt: "Flag of Sri Lanka", name: "Sri Lanka"},
        { src: "flags/Flag_of_Sudan.png", alt: "Flag of Sudan", name: "Sudan"},
        { src: "flags/Flag_of_Suriname.png", alt: "Flag of Suriname", name: "Suriname"},
        { src: "flags/Flag_of_Sweden.png", alt: "Flag of Sweden", name: "Sweden"},
        { src: "flags/Flag_of_Switzerland.png", alt: "Flag of Switzerland", name: "Switzerland"},
        { src: "flags/Flag_of_Tajikistan.png", alt: "Flag of Tajikistan", name: "Tajikistan"},
        { src: "flags/Flag_of_Tanzania.png", alt: "Flag of Tanzania", name: "Tanzania"},
        { src: "flags/Flag_of_Thailand.png", alt: "Flag of Thailand", name: "Thailand"},
        { src: "flags/Flag_of_the_Bahamas.png", alt: "Flag of The Bahamas", name: "Bahamas"},
        { src: "flags/Flag_of_the_Central_African_Republic.png", alt: "Flag of The Central African Republic", name: "Central African Republic"},
        { src: "flags/Flag_of_the_Comoros.png", alt: "Flag of The Comoros", name: "Comoros"},
        { src: "flags/Flag_of_the_Czech_Republic.png", alt: "Flag of The Czech Republic", name: "Czech Republic"},
        { src: "flags/Flag_of_the_Democratic_Republic_of_the_Congo.png", alt: "Flag of The Democratic Republic of the Congo", name: "Democratic Republic of Congo"},
        { src: "flags/Flag_of_the_Dominican_Republic.png", alt: "Flag of The Dominican Republic", name: "Dominican Republic"},
        { src: "flags/Flag_of_the_Federated_States_of_Micronesia.png", alt: "Flag of The Federated States of Micronesia", name: "Federated States of Micronesia"},
        { src: "flags/Flag_of_The_Gambia.png", alt: "Flag of The Gambia", name: "Gambia"},
        { src: "flags/Flag_of_the_Marshall_Islands.png", alt: "Flag of The Marshall Islands", name: "Marshall Islands"},
        { src: "flags/Flag_of_the_Netherlands.png", alt: "Flag of The Netherlands", name: "Netherlands"},
        { src: "flags/Flag_of_the_People's_Republic_of_China.png", alt: "Flag of The People Republic of China", name: "China"},
        { src: "flags/Flag_of_the_Philippines.png", alt: "Flag of The Philippines", name: "Philippines"},
        { src: "flags/Flag_of_the_Republic_of_the_Congo.png", alt: "Flag of The Republic of the Congo", name: "Congo"},
        { src: "flags/Flag_of_the_Solomon_Islands.png", alt: "Flag of The Solomon Islands", name: "Solomon Islands"},
        { src: "flags/Flag_of_the_Syria.png", alt: "Flag of The Syria", name: "Syria"},
        { src: "flags/Flag_of_the_United_Arab_Emirates.png", alt: "Flag of The United Arab Emirates", name: "United Arab Emirates"},
        { src: "flags/Flag_of_the_United_Kingdom.png", alt: "Flag of The United Kingdom", name: "United Kingdom"},
        { src: "flags/Flag_of_the_United_States.png", alt: "Flag of The United States", name: "United States"},
        { src: "flags/Flag_of_Togo.png", alt: "Flag of Togo", name: "Togo"},
        { src: "flags/Flag_of_Tonga.png", alt: "Flag of Tonga", name: "Tonga"},
        { src: "flags/Flag_of_Trinidad_and_Tobago.png", alt: "Flag of Trinidad and Tobago", name: "Trinidad and Tobago"},
        { src: "flags/Flag_of_Tunisia.png", alt: "Flag of Tunisia", name: "Tunisia"},
        { src: "flags/Flag_of_Turkey.png", alt: "Flag of Turkiye", name: "Turkiye"},
        { src: "flags/Flag_of_Turkmenistan.png", alt: "Flag of Turkmenistan", name: "Turkmenistan"},
        { src: "flags/Flag_of_Tuvalu.png", alt: "Flag of Tuvalu", name: "Tuvalu"},
        { src: "flags/Flag_of_Uganda.png", alt: "Flag of Uganda", name: "Uganda"},
        { src: "flags/Flag_of_Ukraine.png", alt: "Flag of Ukraine", name: "Ukraine"},
        { src: "flags/Flag_of_Uruguay.png", alt: "Flag of Uruguay", name: "Uruguay"},
        { src: "flags/Flag_of_Uzbekistan.png", alt: "Flag of Uzbekistan", name: "Uzbekistan"},
        { src: "flags/Flag_of_Vanuatu.png", alt: "Flag of Vanuatu", name: "Vanuatu"},
        { src: "flags/Flag_of_Vatican_City.png", alt: "Flag of Vatican City", name: "Vatican City"},
        { src: "flags/Flag_of_Venezuela.png", alt: "Flag of Venezuela", name: "Venezuela"},
        { src: "flags/Flag_of_Vietnam.png", alt: "Flag of Vietnam", name: "Vietnam"},
        { src: "flags/Flag_of_Yemen.png", alt: "Flag of Yemen", name: "Yemen"},
        { src: "flags/Flag_of_Zambia.png", alt: "Flag of Zambia", name: "Zambia"},
        { src: "flags/Flag_of_Zimbabwe.png", alt: "Flag of Zimbabwe", name: "Zimbabwe"}
    ]
    //pick a random flag from the array
    let randomFlag = flags[Math.floor(Math.random() * flags.length)];

    //clear existing content
    outcome.innerHTML = "";

    //create the image element for the flag
    let img = document.createElement("img");
    img.src = randomFlag.src;
    img.alt = randomFlag.alt;

    //create the text element for the country name
    let text = document.createElement("p");
    text.textContent = randomFlag.name; 

    //append the image and text to the outcome div
    outcome.appendChild(img);
    outcome.appendChild(text);
}

 //create the quiz element
 const start = document.getElementById("start");
 const quiz = document.getElementById("quiz");
 const question = document.getElementById("question");
 const qImg = document.getElementById("qImage");
 const choiceA = document.getElementById("A");
 const choiceB = document.getElementById("B");
 const choiceC = document.getElementById("C");
 const counter = document.getElementById("counter");
 const timeGauge = document.getElementById("timeGauge");
 const progress = document.getElementById("progress");
 const scoreContainer = document.getElementById("scoreContainer");
 const playAgain = document.getElementById("playAgain");

//quiz questions which will be presented to users
 let questions = [
    {
        question : "Who am I?",
        imgSrc : "flags/Flag_of_Australia.png",
        choiceA : "United Kingdom",
        choiceB : "Australia",
        choiceC : "United States",
        correct : "B"
    },

    {
        question : "Guess who?",
        imgSrc : "flags/Flag_of_Israel.png",
        choiceA : "Italy",
        choiceB : "India",
        choiceC : "Israel",
        correct : "C"
    }, 

    {
        question : "You think you know me?",
        imgSrc : "flags/Flag_of_Japan.png",
        choiceA : "Japan",
        choiceB : "Mexico",
        choiceC : "Spain",
        correct : "A"
    },

    {
        question : "What is my name?",
        imgSrc : "flags/Flag_of_Kenya.png",
        choiceA : "Netherlands",
        choiceB : "Kenya",
        choiceC : "Poland",
        correct : "B"
    },

    {
        question : "You must know who I am!",
        imgSrc : "flags/Flag_of_Brazil.png",
        choiceA : "Nigeria",
        choiceB : "Cuba",
        choiceC : "Brazil",
        correct : "C"
    },

    {
        question : "I think you know this one!",
        imgSrc : "flags/Flag_of_Canada.png",
        choiceA : "Canada",
        choiceB : "Germany",
        choiceC : "Norway",
        correct : "A"
    },

    {
        question : "Guess, just guess?",
        imgSrc : "flags/Flag_of_France.png",
        choiceA : "Hungary",
        choiceB : "France",
        choiceC : "South Africa",
        correct : "B"
    },

    {
        question : "I know you, do you know me?",
        imgSrc : "flags/Flag_of_Russia.png",
        choiceA : "Peru",
        choiceB : "Belgium",
        choiceC : "Russia",
        correct : "C"
    },

    {
        question : "Pick me!",
        imgSrc : "flags/Flag_of_Jamaica.png",
        choiceA : "Jamaica",
        choiceB : "Egypt",
        choiceC : "Argentina",
        correct : "A"
    },

    {
        question : "And my country is ...",
        imgSrc : "flags/Flag_of_Portugal.png",
        choiceA : "Ukraine",
        choiceB : "Portugal",
        choiceC : "Pakistan",
        correct : "B"
    }
];

//lets create some variables 

let lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 10;
const questionTime = 10; //10 seconds
const gaugeWidth = 150; //150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;


// lets render a question

function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<h3>" + q.question + "</h3";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";

    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

//In order to start the quiz
start.addEventListener("click", startQuiz);

//lets start the quiz
function startQuiz() {
start.style.display = "none";
renderQuestion();
quiz.style.display = "block"; //we will display our quiz div to the user at this stage
renderProgress();
renderCounter(); //we will set the question counter and the time gauge to 0
TIMER = setInterval(renderCounter, 1000); //we will use the TIMER to call the count render every second
}

//lets render the progress

function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

//lets render the counter

function renderCounter() {
    if (count >= 0) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count--;
    } else {
        count = 10; //restart the timer all over again
        answerIsWrong(); // mark the answer as wrong and update the progress bar
    
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            //if we have no questions left in our basket we need to end the quiz and show the score to the user
            clearInterval(TIMER);
            scoreRender(); // Display the score to the user
        }
    }
}

//lets check our answer
function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        //if our answer is correct

        score++; //incrimenting the score
        answerIsCorrect(); //updating the score bar by changing the progress color to green
    } else {
        //if our answer is wrong

        answerIsWrong(); ////updating the score bar by changing the progress color to red
    }
    count = 10; //to start over from 10 for the next question

    if (runningQuestion < lastQuestion) { //in order to handle if there are any questions left
        runningQuestion++;
        renderQuestion();
    } else {
        clearInterval(TIMER);
        scoreRender(); //display the score to the user
    }
}

//when our answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "green";
}

//when our answer is wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "red";
}

function scoreRender() {
    scoreContainer.style.display = "block"; //we will display the score to the user at this stage

    const scorePercent = Math.round(100 * score / questions.length); //calculates the percentage of score based on user's performance on the quiz  

    //we have four available images and based on user's score we will assign each image
     let img = (scorePercent >= 75) ? "great.png" :
              (scorePercent >= 50) ? "good.png" :
              (scorePercent >= 25) ? "notBad.png" :
              "bad.png";
              scoreContainer.innerHTML = "<img src='" + img + "'><p>" + scorePercent + "%</p>";
              document.getElementById("choices").style.display = "none";
              qImg.style.display = "none";
              playAgain.style.display = "inline-block";

}


