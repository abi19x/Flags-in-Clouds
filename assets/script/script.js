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
        { src: "assets/flags/flag_of_afghanistan.png", alt: "Flag of Afghanistan", name: "Afghanistan"},
        { src: "assets/flags/flag_of_albania.png", alt: "Flag of Albania", name: "Albania"},
        { src: "assets/flags/flag_of_algeria.png", alt: "Flag of Algeria", name: "Algeria"},
        { src: "assets/flags/flag_of_andorra.png", alt: "Flag of Andorra", name: "Andorra"},
        { src: "assets/flags/flag_of_angola.png", alt: "Flag of Angola", name: "Angola"},
        { src: "assets/flags/flag_of_antigua_and_barbuda.png", alt: "Flag of Antigua and Barbuda", name: "Antigua and Barbuda"},
        { src: "assets/flags/flag_of_argentina.png", alt: "Flag of Argentina", name: "Argentina"},
        { src: "assets/flags/flag_of_armenia.png", alt: "Flag of Armenia", name: "Armenia"},
        { src: "assets/flags/flag_of_australia.png", alt: "Flag of Australia", name: "Australia"},
        { src: "assets/flags/flag_of_austria.png", alt: "Flag of Austria", name: "Austria"},
        { src: "assets/flags/flag_of_azerbaijan.png", alt: "Flag of Azerbaijan", name: "Azerbaijan"},
        { src: "assets/flags/flag_of_bahrain.png", alt: "Flag of Bahrain", name: "Bahrain"},
        { src: "assets/flags/flag_of_bangladesh.png", alt: "Flag of Bangladesh", name: "Bangladesh"},
        { src: "assets/flags/flag_of_barbados.png", alt: "Flag of Barbados", name: "Barbados"},
        { src: "assets/flags/flag_of_belarus.png", alt: "Flag of Belarus", name: "Belarus"},
        { src: "assets/flags/flag_of_belgium.png", alt: "Flag of Belgium", name: "Belgium"},
        { src: "assets/flags/flag_of_belize.png", alt: "Flag of Belize", name: "Belize"},
        { src: "assets/flags/flag_of_benin.png", alt: "Flag of Benin", name: "Benin"},
        { src: "assets/flags/flag_of_bhutan.png", alt: "Flag of Bhutan", name: "Bhutan"},
        { src: "assets/flags/flag_of_bolivia.png", alt: "Flag of Bolivia", name: "Bolivia"},
        { src: "assets/flags/flag_of_bosnia_and_herzegovina.png", alt: "Flag of Bosnia and Herzegovina", name: "Bosnia and Herzegovina"},
        { src: "assets/flags/flag_of_botswana.png", alt: "Flag of Botswana", name: "Botswana"},
        { src: "assets/flags/flag_of_brazil.png", alt: "Flag of Brazil", name: "Brazil"},
        { src: "assets/flags/flag_of_brunei.png", alt: "Flag of Brunei", name: "Brunei"},
        { src: "assets/flags/flag_of_bulgaria.png", alt: "Flag of Bulgaria", name: "Bulgaria"},
        { src: "assets/flags/flag_of_burkina_faso.png", alt: "Flag of Burkina Faso", name: "Burkina Faso"},
        { src: "assets/flags/flag_of_burundi.png", alt: "Flag of Burundi", name: "Burundi"},
        { src: "assets/flags/flag_of_cambodia.png", alt: "Flag of Cambodia", name: "Cambodia"},
        { src: "assets/flags/flag_of_cameroon.png", alt: "Flag of Cameroon", name: "Cameroon"},
        { src: "assets/flags/flag_of_canada.png", alt: "Flag of Canada", name: "Canada"},
        { src: "assets/flags/flag_of_cape_verde.png", alt: "Flag of Cape Verde", name: "Cape Verde"},
        { src: "assets/flags/flag_of_chad.png", alt: "Flag of Chad", name: "Chad"},
        { src: "assets/flags/flag_of_chile.png", alt: "Flag of Chile", name: "Chile"},
        { src: "assets/flags/flag_of_colombia.png", alt: "Flag of Colombia", name: "Colombia"},
        { src: "assets/flags/flag_of_costa_rica.png", alt: "Flag of Costa Rica", name: "Costa Rica"},
        { src: "assets/flags/flag_of_côte_d'ivoire.png", alt: "Flag of Ivory Coast", name: "Ivory Coast"},
        { src: "assets/flags/flag_of_croatia.png", alt: "Flag of Croatia", name: "Croatia"},
        { src: "assets/flags/flag_of_cuba.png", alt: "Flag of Cuba", name: "Cuba"},
        { src: "assets/flags/flag_of_cyprus.png", alt: "Flag of Cyprus", name: "Cyprus"},
        { src: "assets/flags/flag_of_denmark.png", alt: "Flag of Denmark", name: "Denmark"},
        { src: "assets/flags/flag_of_djibouti.png", alt: "Flag of Djibouti", name: "Djibouti"},
        { src: "assets/flags/flag_of_dominica.png", alt: "Flag of Dominica", name: "Dominica"},
        { src: "assets/flags/flag_of_east_timor.png", alt: "Flag of Timor Leste", name: "Timor Leste"},
        { src: "assets/flags/flag_of_ecuador.png", alt: "Flag of Ecuador", name: "Ecuador"},
        { src: "assets/flags/flag_of_egypt.png", alt: "Flag of Egypt", name: "Egypt"},
        { src: "assets/flags/flag_of_el_salvador.png", alt: "Flag of El Salvador", name: "El Salvador"},
        { src: "assets/flags/flag_of_equatorial_guinea.png", alt: "Flag of Equatorial Guinea", name: "Equatorial Guinea"},
        { src: "assets/flags/flag_of_eritrea.png", alt: "Flag of Eritrea", name: "Eritrea"},
        { src: "assets/flags/flag_of_estonia.png", alt: "Flag of Estonia", name: "Estonia"},
        { src: "assets/flags/flag_of_eswatini.png", alt: "Flag of Eswatini", name: "Eswatini"},
        { src: "assets/flags/flag_of_ethiopia.png", alt: "Flag of Ethiopia", name: "Ethiopia"},
        { src: "assets/flags/flag_of_fiji.png", alt: "Flag of Fiji", name: "Fiji"},
        { src: "assets/flags/flag_of_finland.png", alt: "Flag of Finland", name: "Finland"},
        { src: "assets/flags/flag_of_france.png", alt: "Flag of France", name: "France"},
        { src: "assets/flags/flag_of_gabon.png", alt: "Flag of Gabon", name: "Gabon"},
        { src: "assets/flags/flag_of_georgia.png", alt: "Flag of Georgia", name: "Georgia"},
        { src: "assets/flags/flag_of_germany.png", alt: "Flag of Germany", name: "Germany"},
        { src: "assets/flags/flag_of_ghana.png", alt: "Flag of Ghana", name: "Ghana"},
        { src: "assets/flags/flag_of_greece.png", alt: "Flag of Greece", name: "Greece"},
        { src: "assets/flags/flag_of_grenada.png", alt: "Flag of Grenada", name: "Grenada"},
        { src: "assets/flags/flag_of_guatemala.png", alt: "Flag of Guatemala", name: "Guatemala"},
        { src: "assets/flags/flag_of_guinea-bissau.png", alt: "Flag of Guinea Bissau", name: "Guinea Bissau"},
        { src: "assets/flags/flag_of_guinea.png", alt: "Flag of Guinea", name: "Guinea"},
        { src: "assets/flags/flag_of_guyana.png", alt: "Flag of Guyana", name: "Guyana"},
        { src: "assets/flags/flag_of_haiti.png", alt: "Flag of Haiti", name: "Haiti"},
        { src: "assets/flags/flag_of_honduras.png", alt: "Flag of Honduras", name: "Honduras"},
        { src: "assets/flags/flag_of_hungary.png", alt: "Flag of Hungary", name: "Hungary"},
        { src: "assets/flags/flag_of_iceland.png", alt: "Flag of Iceland", name: "Iceland"},
        { src: "assets/flags/flag_of_india.png", alt: "Flag of India", name: "India"},
        { src: "assets/flags/flag_of_indonesia.png", alt: "Flag of Indonesia", name: "Indonesia"},
        { src: "assets/flags/flag_of_iran.png", alt: "Flag of Iran", name: "Iran"},
        { src: "assets/flags/flag_of_iraq.png", alt: "Flag of Iraq", name: "Iraq"},
        { src: "assets/flags/flag_of_ireland.png", alt: "Flag of Ireland", name: "Ireland"},
        { src: "assets/flags/flag_of_israel.png", alt: "Flag of Israel", name: "Israel"},
        { src: "assets/flags/flag_of_italy.png", alt: "Flag of Italy", name: "Italy"},
        { src: "assets/flags/flag_of_jamaica.png", alt: "Flag of Jamaica", name: "Jamaica"},
        { src: "assets/flags/flag_of_japan.png", alt: "Flag of Japan", name: "Japan"},
        { src: "assets/flags/flag_of_jordan.png", alt: "Flag of Jordan", name: "Jordan"},
        { src: "assets/flags/flag_of_kazakhstan.png", alt: "Flag of Kazakhstan", name: "Kazakhstan"},
        { src: "assets/flags/flag_of_kenya.png", alt: "Flag of Kenya", name: "Kenya"},
        { src: "assets/flags/flag_of_kiribati.png", alt: "Flag of Kiribati", name: "Kiribati"},
        { src: "assets/flags/flag_of_kuwait.png", alt: "Flag of Kuwait", name: "Kuwait"},
        { src: "assets/flags/flag_of_kyrgyzstan.png", alt: "Flag of Kyrgyzstan", name: "Kyrgyzstan"},
        { src: "assets/flags/flag_of_laos.png", alt: "Flag of Laos", name: "Laos"},
        { src: "assets/flags/flag_of_latvia.png", alt: "Flag of Latvia", name: "Latvia"},
        { src: "assets/flags/flag_of_lebanon.png", alt: "Flag of Lebanon", name: "Lebanon"},
        { src: "assets/flags/flag_of_lesotho.png", alt: "Flag of Lesotho", name: "Lesotho"},
        { src: "assets/flags/flag_of_liberia.png", alt: "Flag of Liberia", name: "Liberia"},
        { src: "assets/flags/flag_of_libya.png", alt: "Flag of Libya", name: "Libya"},
        { src: "assets/flags/flag_of_liechtenstein.png", alt: "Flag of Liechtenstein", name: "Liechtenstein"},
        { src: "assets/flags/flag_of_lithuania.png", alt: "Flag of Lithuania", name: "Lithuania"},
        { src: "assets/flags/flag_of_luxembourg.png", alt: "Flag of Luxembourg", name: "Luxembourg"},
        { src: "assets/flags/flag_of_madagascar.png", alt: "Flag of Madagascar", name: "Madagascar"},
        { src: "assets/flags/flag_of_malawi.png", alt: "Flag of Malawi", name: "Malawi"},
        { src: "assets/flags/flag_of_malaysia.png", alt: "Flag of Malaysia", name: "Malaysia"},
        { src: "assets/flags/flag_of_maldives.png", alt: "Flag of Maldives", name: "Maldives"},
        { src: "assets/flags/flag_of_mali.png", alt: "Flag of Mali", name: "Mali"},
        { src: "assets/flags/flag_of_malta.png", alt: "Flag of Malta", name: "Malta"},
        { src: "assets/flags/flag_of_mauritania.png", alt: "Flag of Mauritania", name: "Mauritania"},
        { src: "assets/flags/flag_of_mauritius.png", alt: "Flag of Mauritius", name: "Mauritius"},
        { src: "assets/flags/flag_of_mexico.png", alt: "Flag of Mexico", name: "Mexico"},
        { src: "assets/flags/flag_of_moldova.png", alt: "Flag of Moldova", name: "Moldova"},
        { src: "assets/flags/flag_of_monaco.png", alt: "Flag of Monaco", name: "Monaco"},
        { src: "assets/flags/flag_of_mozambique.png", alt: "Flag of Mozambique", name: "Mozambique"},
        { src: "assets/flags/flag_of_myanmar.png", alt: "Flag of Myanmar", name: "Myanmar"},
        { src: "assets/flags/flag_of_namibia.png", alt: "Flag of Namibia", name: "Namibia"},
        { src: "assets/flags/flag_of_nauru.png", alt: "Flag of Nauru", name: "Nauru"},
        { src: "assets/flags/flag_of_nepal.png", alt: "Flag of Nepal", name: "Nepal"},
        { src: "assets/flags/flag_of_new_zealand.png", alt: "Flag of New Zealand", name: "New Zealand"},
        { src: "assets/flags/flag_of_nicaragua.png", alt: "Flag of Nicaragua", name: "Nicaragua"},
        { src: "assets/flags/flag_of_niger.png", alt: "Flag of Niger", name: "Niger"},
        { src: "assets/flags/flag_of_nigeria.png", alt: "Flag of Nigeria", name: "Nigeria"},
        { src: "assets/flags/flag_of_north_korea.png", alt: "Flag of North Korea", name: "North Korea"},
        { src: "assets/flags/flag_of_north_macedonia.png", alt: "Flag of North Macedonia", name: "North Macedonia"},
        { src: "assets/flags/flag_of_norway.png", alt: "Flag of Norway", name: "Norway"},
        { src: "assets/flags/flag_of_oman.png", alt: "Flag of Oman", name: "Oman"},
        { src: "assets/flags/flag_of_pakistan.png", alt: "Flag of Pakistan", name: "Pakistan"},
        { src: "assets/flags/flag_of_palau.png", alt: "Flag of Palau", name: "Palau"},
        { src: "assets/flags/flag_of_palestine.png", alt: "Flag of Palestine", name: "Palestine"},
        { src: "assets/flags/flag_of_panama.png", alt: "Flag of Panama", name: "Panama"},
        { src: "assets/flags/flag_of_papua_new_guinea.png", alt: "Flag of Papua New Guinea", name: "Papua New Guinea"},
        { src: "assets/flags/flag_of_paraguay.png", alt: "Flag of Paraguay", name: "Paraguay"},
        { src: "assets/flags/flag_of_peru.png", alt: "Flag of Peru", name: "Peru"},
        { src: "assets/flags/flag_of_poland.png", alt: "Flag of Poland", name: "Poland"},
        { src: "assets/flags/flag_of_portugal.png", alt: "Flag of Portugal", name: "Portugal"},
        { src: "assets/flags/flag_of_qatar.png", alt: "Flag of Qatar", name: "Qatar"},
        { src: "assets/flags/flag_of_romania.png", alt: "Flag of Romania", name: "Romania"},
        { src: "assets/flags/flag_of_russia.png", alt: "Flag of Russia", name: "Russia"},
        { src: "assets/flags/flag_of_rwanda.png", alt: "Flag of Rwanda", name: "Rwanda"},
        { src: "assets/flags/flag_of_saint_kitts_and_nevis.png", alt: "Flag of Saint Kitts and Nevis", name: "Saint Kitts and Nevis"},
        { src: "assets/flags/flag_of_saint_lucia.png", alt: "Flag of Saint Lucia", name: "Saint Lucia"},
        { src: "assets/flags/flag_of_saint_vincent_and_the_grenadines.png", alt: "Flag of Saint Vincent and the Grenadines", name: "Saint Vincent and the Grenadines"},
        { src: "assets/flags/flag_of_samoa.png", alt: "Flag of Samoa", name: "Samoa"},
        { src: "assets/flags/flag_of_san_marino.png", alt: "Flag of San Marino", name: "San Marino"},
        { src: "assets/flags/flag_of_são_tomé_and_príncipe.png", alt: "Flag of Sao Tome and Principe", name: "Sao Tome and Principe"},
        { src: "assets/flags/flag_of_saudi_arabia.png", alt: "Flag of Saudi Arabia", name: "Saudi Arabia"},
        { src: "assets/flags/flag_of_senegal.png", alt: "Flag of Senegal", name: "Senegal"},
        { src: "assets/flags/flag_of_serbia.png", alt: "Flag of Serbia", name: "Serbia"},
        { src: "assets/flags/flag_of_seychelles.png", alt: "Flag of Seychelles", name: "Seychelles"},
        { src: "assets/flags/flag_of_sierra_leone.png", alt: "Flag of Sierra Leone", name: "Sierra Leone"},
        { src: "assets/flags/flag_of_singapore.png", alt: "Flag of Singapore", name: "Singapore"},
        { src: "assets/flags/flag_of_slovakia.png", alt: "Flag of Slovakia", name: "Slovakia"},
        { src: "assets/flags/flag_of_slovenia.png", alt: "Flag of Slovenia", name: "Slovenia"},
        { src: "assets/flags/flag_of_somalia.png", alt: "Flag of Somalia", name: "Somalia"},
        { src: "assets/flags/flag_of_south_africa.png", alt: "Flag of South Africa", name: "South Africa"},
        { src: "assets/flags/flag_of_south_korea.png", alt: "Flag of South Korea", name: "South Korea"},
        { src: "assets/flags/flag_of_south_sudan.png", alt: "Flag of South Sudan", name: "South Sudan"},
        { src: "assets/flags/flag_of_spain.png", alt: "Flag of Spain", name: "Spain"},
        { src: "assets/flags/flag_of_sri_lanka.png", alt: "Flag of Sri Lanka", name: "Sri Lanka"},
        { src: "assets/flags/flag_of_sudan.png", alt: "Flag of Sudan", name: "Sudan"},
        { src: "assets/flags/flag_of_suriname.png", alt: "Flag of Suriname", name: "Suriname"},
        { src: "assets/flags/flag_of_sweden.png", alt: "Flag of Sweden", name: "Sweden"},
        { src: "assets/flags/flag_of_switzerland.png", alt: "Flag of Switzerland", name: "Switzerland"},
        { src: "assets/flags/flag_of_tajikistan.png", alt: "Flag of Tajikistan", name: "Tajikistan"},
        { src: "assets/flags/flag_of_tanzania.png", alt: "Flag of Tanzania", name: "Tanzania"},
        { src: "assets/flags/flag_of_thailand.png", alt: "Flag of Thailand", name: "Thailand"},
        { src: "assets/flags/flag_of_the_bahamas.png", alt: "Flag of The Bahamas", name: "Bahamas"},
        { src: "assets/flags/flag_of_the_central_african_republic.png", alt: "Flag of The Central African Republic", name: "Central African Republic"},
        { src: "assets/flags/flag_of_the_comoros.png", alt: "Flag of The Comoros", name: "Comoros"},
        { src: "assets/flags/flag_of_the_czech_republic.png", alt: "Flag of The Czech Republic", name: "Czech Republic"},
        { src: "assets/flags/flag_of_the_democratic_republic_of_the_congo.png", alt: "Flag of The Democratic Republic of the Congo", name: "Democratic Republic of Congo"},
        { src: "assets/flags/flag_of_the_dominican_republic.png", alt: "Flag of The Dominican Republic", name: "Dominican Republic"},
        { src: "assets/flags/flag_of_the_federated_states_of_micronesia.png", alt: "Flag of The Federated States of Micronesia", name: "Federated States of Micronesia"},
        { src: "assets/flags/flag_of_the_gambia.png", alt: "Flag of The Gambia", name: "Gambia"},
        { src: "assets/flags/flag_of_the_marshall_islands.png", alt: "Flag of The Marshall Islands", name: "Marshall Islands"},
        { src: "assets/flags/flag_of_the_netherlands.png", alt: "Flag of The Netherlands", name: "Netherlands"},
        { src: "assets/flags/flag_of_the_people's_republic_of_china.png", alt: "Flag of The People Republic of China", name: "China"},
        { src: "assets/flags/flag_of_the_philippines.png", alt: "Flag of The Philippines", name: "Philippines"},
        { src: "assets/flags/flag_of_the_republic_of_the_congo.png", alt: "Flag of The Republic of the Congo", name: "Congo"},
        { src: "assets/flags/flag_of_the_solomon_islands.png", alt: "Flag of The Solomon Islands", name: "Solomon Islands"},
        { src: "assets/flags/flag_of_the_syria.png", alt: "Flag of The Syria", name: "Syria"},
        { src: "assets/flags/flag_of_the_united_arab_emirates.png", alt: "Flag of The United Arab Emirates", name: "United Arab Emirates"},
        { src: "assets/flags/flag_of_the_united_kingdom.png", alt: "Flag of The United Kingdom", name: "United Kingdom"},
        { src: "assets/flags/flag_of_the_united_states.png", alt: "Flag of The United States", name: "United States"},
        { src: "assets/flags/flag_of_togo.png", alt: "Flag of Togo", name: "Togo"},
        { src: "assets/flags/flag_of_tonga.png", alt: "Flag of Tonga", name: "Tonga"},
        { src: "assets/flags/flag_of_trinidad_and_tobago.png", alt: "Flag of Trinidad and Tobago", name: "Trinidad and Tobago"},
        { src: "assets/flags/flag_of_tunisia.png", alt: "Flag of Tunisia", name: "Tunisia"},
        { src: "assets/flags/flag_of_turkey.png", alt: "Flag of Turkiye", name: "Turkiye"},
        { src: "assets/flags/flag_of_turkmenistan.png", alt: "Flag of Turkmenistan", name: "Turkmenistan"},
        { src: "assets/flags/flag_of_tuvalu.png", alt: "Flag of Tuvalu", name: "Tuvalu"},
        { src: "assets/flags/flag_of_uganda.png", alt: "Flag of Uganda", name: "Uganda"},
        { src: "assets/flags/flag_of_ukraine.png", alt: "Flag of Ukraine", name: "Ukraine"},
        { src: "assets/flags/flag_of_uruguay.png", alt: "Flag of Uruguay", name: "Uruguay"},
        { src: "assets/flags/flag_of_uzbekistan.png", alt: "Flag of Uzbekistan", name: "Uzbekistan"},
        { src: "assets/flags/flag_of_vanuatu.png", alt: "Flag of Vanuatu", name: "Vanuatu"},
        { src: "assets/flags/flag_of_vatican_city.png", alt: "Flag of Vatican City", name: "Vatican City"},
        { src: "assets/flags/flag_of_venezuela.png", alt: "Flag of Venezuela", name: "Venezuela"},
        { src: "assets/flags/flag_of_vietnam.png", alt: "Flag of Vietnam", name: "Vietnam"},
        { src: "assets/flags/flag_of_yemen.png", alt: "Flag of Yemen", name: "Yemen"},
        { src: "assets/flags/flag_of_zambia.png", alt: "Flag of Zambia", name: "Zambia"},
        { src: "assets/flags/flag_of_zimbabwe.png", alt: "Flag of Zimbabwe", name: "Zimbabwe"}
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
        imgSrc : "assets/flags/flag_of_australia.png",
        choiceA : "United Kingdom",
        choiceB : "Australia",
        choiceC : "United States",
        correct : "B"
    },

    {
        question : "Guess who?",
        imgSrc : "assets/flags/flag_of_israel.png",
        choiceA : "Italy",
        choiceB : "India",
        choiceC : "Israel",
        correct : "C"
    }, 

    {
        question : "Remember me?",
        imgSrc : "assets/flags/flag_of_japan.png",
        choiceA : "Japan",
        choiceB : "Mexico",
        choiceC : "Spain",
        correct : "A"
    },

    {
        question : "What is my name?",
        imgSrc : "assets/flags/flag_of_kenya.png",
        choiceA : "Netherlands",
        choiceB : "Kenya",
        choiceC : "Poland",
        correct : "B"
    },

    {
        question : "Have we met before?",
        imgSrc : "assets/flags/flag_of_brazil.png",
        choiceA : "Nigeria",
        choiceB : "Cuba",
        choiceC : "Brazil",
        correct : "C"
    },

    {
        question : "Did you forget me?",
        imgSrc : "assets/flags/flag_of_canada.png",
        choiceA : "Canada",
        choiceB : "Germany",
        choiceC : "Norway",
        correct : "A"
    },

    {
        question : "Guess, just guess?",
        imgSrc : "assets/flags/flag_of_france.png",
        choiceA : "Hungary",
        choiceB : "France",
        choiceC : "South Africa",
        correct : "B"
    },

    {
        question : "Hi, my name is...",
        imgSrc : "assets/flags/flag_of_russia.png",
        choiceA : "Peru",
        choiceB : "Belgium",
        choiceC : "Russia",
        correct : "C"
    },

    {
        question : "Pick me!",
        imgSrc : "assets/flags/flag_of_jamaica.png",
        choiceA : "Jamaica",
        choiceB : "Egypt",
        choiceC : "Argentina",
        correct : "A"
    },

    {
        question : "And my country is...",
        imgSrc : "assets/flags/flag_of_portugal.png",
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
     let img = (scorePercent >= 75) ? "assets/emoji/great.png" :
              (scorePercent >= 50) ? "assets/emoji/good.png" :
              (scorePercent >= 25) ? "assets/emoji/not_bad.png" :
              "assets/emoji/bad.png";
              scoreContainer.innerHTML = "<img src='" + img + "'><p>" + scorePercent + "%</p>";
              document.getElementById("choices").style.display = "none";
              qImg.style.display = "none";
              playAgain.style.display = "inline-block";

}