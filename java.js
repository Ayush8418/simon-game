let array = ["society" , "caution" , "window" , "police" , "mother" , "call" , "investigation" , "alarm" , "theif"];
let colorarray2 = ["red", "blue", "green" , "yellow" ,"purple" , "indogo" , "turquoise" , "orange" , "rgb(250, 35, 132)"]
let actualSequence = [];
var actualen = 0;
let userSequence = [];
var userlen = 0;
var theme = "colors";
var colorCounter = 0;
var numberCounter = 0;
var soundCounter = 0;


$(document).keypress(function(){
    if(actualSequence.length == 0)
        nextSequence();
});



for(i=0 ; i<9 ; i++){
    document.querySelectorAll(".item")[i].addEventListener("click",function(event){
        const whoClicked = event.target;
        if(actualen > 0){
            userSequence.push(whoClicked.classList[1]);
            userlen++;
            if( actualSequence[userlen-1] != userSequence[userlen-1]){
                if(soundCounter%2 === 0){
                    var audio1 = new Audio("./sounds/wrong.mp3");
                    audio1.play();
                }
                $(".level").text("Wrong input!!!   press any key to Start.");
                userSequence = [];
                userlen = 0;
                actualSequence = [];
                actualen = 0;
            }
            else if( actualSequence[userlen-1] == whoClicked.classList[1] && userlen == actualen){
                if(soundCounter%2 === 0){
                    const whoClicked2 = event.target;
                    var itemNum = whoClicked2.classList[2]
                    var audiox = new Audio(`./sounds/key0${itemNum}.ogg`);
                    audiox.play();   
                }
                userSequence = [];
                userlen = 0;
                nextSequence();
            }
        }
    })
}


$(".colors").click(function(){
    if(colorCounter%2 === 0)
    {
        $(".colors").css("backgroundColor" , "blue");
        $(".colors").css("color" , "white");
        for(i=0 ; i<9 ; i++){
            document.querySelectorAll(".item")[i].style.backgroundColor = colorarray2[i];
        }
    }
    else
    {
        $(".colors").css("backgroundColor" , "white");
        $(".colors").css("color" , "black");
        for(i=0 ; i<9 ; i++){
            document.querySelectorAll(".item")[i].style.backgroundColor = "#04AA6D";
        }
    }
    colorCounter++;
})

$(".numbers").click(function(){
    if(numberCounter%2 === 0)
    {
        $(".numbers").css("backgroundColor" , "blue");
        $(".numbers").css("color" , "white");
        for(i=0 ; i<9 ; i++){
            document.querySelectorAll(".item")[i].textContent = i;
        }
    }
    else
    {
        $(".numbers").css("backgroundColor" , "white");
        $(".numbers").css("color" , "black");
        for(i=0 ; i<9 ; i++){
            document.querySelectorAll(".item")[i].textContent = '';
        }
    }
    numberCounter++;
})

$(".sound").click(function(){
    if(soundCounter%2 === 0)
    {
        soundCounter++;
        $(".sound-icon").attr("src" , "./images/volume-mute.svg");
    }
    else
    {
        soundCounter++;
        $(".sound-icon").attr("src" , "./images/volume-up.svg");
    }
})

function nextSequence(){
    var ind = Math.random();
    ind = (ind*9);
    ind = Math.floor(ind);
    actualSequence.push(array[ind]);
    actualen++;
    $(".level").text("Level "+(actualSequence.length));
    $("."+array[ind]).fadeOut();
    $("."+array[ind]).fadeIn();
}