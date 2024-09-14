let questions = {
    storia :[
        {
            domanda:"Chi fu il primo imperatore di Roma?",
            risposta:["Giulio Cesare","Augusto","Nerone","Traiano"],
            corretta:"Augusto"
        },
        {
            domanda:"In quale anno Cristoforo Colombo scoprì l'America?",
            risposta:["1492","1453","1500","1521"],
            corretta:"1492"
        },
        {
            domanda:"Quale famosa muraglia fu costruita per proteggere la Cina dagli invasori?",
            risposta:["La Grande Muraglia Cinese","La Muraglia Romana","La Muraglia di Atene","La Muraglia Persiana"],
            corretta:"La Grande Muraglia Cinese"
        },
        {
            domanda:"Quale popolo antico costruì le piramidi in Egitto?",
            risposta:["I Romani","I Greci","Gli Egiziani","I Maya"],
            corretta:"Gli Egiziani"
        }
    ],
   matematica : [
    {
        domanda:"Quanto fa 7 + 5?",
        risposta:["10","11","12","13"],
        corretta:"12"
    },
    {
        domanda:"Qual è il numero più piccolo tra questi?",
        risposta:["8","5","12","9"],
        corretta:"5"
    },
    {
        domanda:"Quale forma geometrica ha tre lati?",
        risposta:["Quadrato","Cerchio","Rettangolo","Triangolo"],
        corretta:"Triangolo"
    },
    {
        domanda:"Quante ore ci sono in un giorno?",
        risposta:["12","24","30","48"],
        corretta:"24"
    }
   ],
   scienze: [
    {
        domanda:"Quale pianeta è conosciuto come il 'Pianeta Rosso'?",
        risposta:["Terra","Marte","Giove","Saturno"],
        corretta:"Marte"
    },
    {
        domanda:"Quale parte della pianta è responsabile della fotosintesi?",
        risposta:["Radici","Fiori","Foglie","Tronco"],
        corretta:"Foglie"
    },
    {
        domanda:"Qual è lo stato dell'acqua a temperatura ambiente?",
        risposta:["Solido","Liquido","Gassoso","Plasma"],
        corretta:"Liquido"
    },
    {
        domanda:"Qual è l'animale più veloce del mondo?",
        risposta:["Ghepardo","Aquila","Delfino","Leone"],
        corretta:"Ghepardo"
    }
   ] 
}
let contaDom = 0;
let contaRisp = 0;
let materia = '';
var rispEsatte = 0;
let click = false;
function loadQuizStory(){
    materia = document.getElementById("story").textContent;
    document.querySelector(".title-request").innerHTML = questions[materia][contaDom]['domanda'];
    const list = document.getElementById("lista");
    for(let x=0;x<4;x++){
        list.getElementsByClassName("btn")[x].innerHTML = questions[materia][contaDom]['risposta'][x];
    }
    document.getElementById("subjects").style.display = "none";
    document.getElementById("next").style.display = "inline-block";
    CorrectAnswer();
    contaDom++;
    }

function loadQuizMaths(){
        materia = document.getElementById("maths").textContent;
        document.querySelector(".title-request").innerHTML = questions[materia][contaDom]['domanda'];
        const list = document.getElementById("lista");
        for(let x=0;x<4;x++){
            list.getElementsByClassName("btn")[x].innerHTML = questions[materia][contaDom]['risposta'][x];
        }
        document.getElementById("subjects").style.display = "none";
        document.getElementById("next").style.display = "inline-block";
        CorrectAnswer();
        contaDom++;
        }

function loadQuizScience(){
            materia = document.getElementById("science").textContent;
            document.querySelector(".title-request").innerHTML = questions[materia][contaDom]['domanda'];
            const list = document.getElementById("lista");
            for(let x=0;x<4;x++){
                list.getElementsByClassName("btn")[x].innerHTML = questions[materia][contaDom]['risposta'][x];
            }
            document.getElementById("subjects").style.display = "none";
            document.getElementById("next").style.display = "inline-block";
            CorrectAnswer();
            contaDom++;
            }

function nextQuiz(){
    document.querySelector(".title-request").innerHTML = questions[materia][contaDom]['domanda'];
        const list = document.getElementById("lista");
        for(let y=0;y<4;y++){
            list.getElementsByClassName("btn")[y].innerHTML = questions[materia][contaDom]['risposta'][y];
            list.getElementsByClassName("btn")[y].style.backgroundColor = "#06f";
        }
        contaDom++;
        CorrectAnswer();
        endQuiz();
    }
        

function CorrectAnswer(){
let correct = false;
let answers = document.querySelectorAll('.btn');
answers.forEach(option => {
option.addEventListener("click", event =>{
    if(correct){
        return;
    }
if(option.textContent != questions[materia][contaRisp]['corretta']){
    option.style.backgroundColor = "red";
    correct = true;
    click = true;
}else{
    option.style.backgroundColor = "green";
    correct = true;
    rispEsatte++;
    localStorage.setItem('rispEsatte', rispEsatte);
    
    
}
contaRisp++;
if(contaDom === 4){
    document.getElementById("result").style.display = "inline-block";
}

});
});
}

function endQuiz(){
    if(contaDom === 4){
    document.getElementById("next").style.display = "none";
}
}


window.onload = function() {
    let rispEsatte = localStorage.getItem('rispEsatte'); 
    document.getElementById("score").textContent = rispEsatte + "/4";
};
