const questions = [

{
  difficulty:"TERRE",
  question:"Combien de jours peuvent être reportés automatiquement après le 15 mars ?",
  answers:[
    "10 jours",
    "15 jours",
    "20 jours",
    "30 jours"
  ],
  correct:2,
  explanation:"20 jours peuvent être reportés automatiquement pour les officiers et sous-officiers."
},

{
  difficulty:"PIERRE",
  question:"Quel module Puls@r gère les accidents corporels de la route ?",
  answers:[
    "MIS",
    "BAAC",
    "Registre",
    "Service"
  ],
  correct:1,
  explanation:"Le module BAAC gère les accidents corporels de circulation."
},

{
  difficulty:"FER",
  question:"Quelle application Puls@r remplace-t-elle ?",
  answers:[
    "Windows",
    "BB 2000",
    "Agorha",
    "NATINF"
  ],
  correct:1,
  explanation:"Puls@r remplace notamment BB 2000."
},

{
  difficulty:"DIAMANT",
  question:"Les repos hebdomadaires inclus dans une permission sont-ils décomptés ?",
  answers:[
    "Oui",
    "Non",
    "Seulement dimanche",
    "Seulement samedi"
  ],
  correct:1,
  explanation:"Les repos hebdomadaires inclus dans une permission ne sont pas décomptés."
},

{
  difficulty:"OBSIDIENNE",
  question:"Qui peut décider d’un rappel général des permissionnaires ?",
  answers:[
    "Le maire",
    "Le préfet uniquement",
    "Le directeur général de la gendarmerie",
    "N’importe quel militaire"
  ],
  correct:2,
  explanation:"Le directeur général peut décider d’un rappel général."
}

];

let currentQuestion = 0;
let score = 0;
let xp = localStorage.getItem("xp") || 0;
let level = localStorage.getItem("level") || 1;
let combo = 0;
let lives = 3;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

const scoreEl = document.getElementById("score");
const xpEl = document.getElementById("xp");
const levelEl = document.getElementById("level");
const comboEl = document.getElementById("combo");
const livesEl = document.getElementById("lives");
const xpFill = document.getElementById("xpFill");

function loadQuestion(){

  const q = questions[currentQuestion];

  document.getElementById("difficulty").textContent = q.difficulty;

  questionEl.textContent = q.question;

  answersEl.innerHTML = "";

  feedbackEl.style.display = "none";
  nextBtn.style.display = "none";

  q.answers.forEach((answer,index)=>{

    const btn = document.createElement("button");

    btn.classList.add("answer-btn");

    btn.textContent = answer;

    btn.onclick = ()=>checkAnswer(index,btn);

    answersEl.appendChild(btn);

  });

}

function checkAnswer(index,btn){

  const q = questions[currentQuestion];

  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach(b=>b.disabled=true);

  if(index===q.correct){

    btn.classList.add("correct");

    score += 10;
    xp = Number(xp) + 20;
    combo++;

    feedbackEl.className = "feedback-good";
    feedbackEl.innerHTML =
      "<strong>Bonne réponse !</strong><br>" + q.explanation;

  }else{

    btn.classList.add("wrong");

    buttons[q.correct].classList.add("correct");

    combo = 0;
    lives--;

    feedbackEl.className = "feedback-bad";
    feedbackEl.innerHTML =
      "<strong>Mauvaise réponse</strong><br>" + q.explanation;

  }

  feedbackEl.style.display = "block";

  scoreEl.textContent = score;
  comboEl.textContent = "x" + combo;

  updateLives();

  updateXP();

  nextBtn.style.display = "inline-block";

}

function updateLives(){

  let hearts = "";

  for(let i=0;i<lives;i++){
    hearts += "❤️";
  }

  livesEl.textContent = hearts;

  if(lives<=0){
    alert("GAME OVER");
    location.reload();
  }

}

function updateXP(){

  xpEl.textContent = xp;

  let percent = (xp % 100);

  xpFill.style.width = percent + "%";

  if(xp >= level*100){

    level++;

    levelEl.textContent = level;

    localStorage.setItem("level",level);

    alert("LEVEL UP !");
  }

  localStorage.setItem("xp",xp);

}

nextBtn.addEventListener("click",()=>{

  currentQuestion++;

  if(currentQuestion >= questions.length){

    alert("QUIZ TERMINÉ !");

    currentQuestion = 0;

  }

  loadQuestion();

});

loadQuestion();

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for(let i=0;i<200;i++){

  stars.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2
  });

}

function drawStars(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle="white";

  stars.forEach(s=>{

    ctx.beginPath();

    ctx.arc(s.x,s.y,s.r,0,Math.PI*2);

    ctx.fill();

  });

  requestAnimationFrame(drawStars);

}

drawStars();
