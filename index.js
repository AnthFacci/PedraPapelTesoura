var contUser = 0
var contPc = 0

/* ELEMENTOS DA APLICAÇÃO */

const imgUser = document.getElementById("user")
const imgPC = document.getElementById("pc")
const playing = document.getElementById("playing")
const contador = document.getElementById("contador")
const winner = document.getElementById("winner")
const loser = document.getElementById("loser")


/* SONS */

const audioWin = new Audio("assets/sounds/win.mp3")

/* VARIÁVEIS DE ELEMENTOS */

var player1 = ""
var player2 = ""



playing.addEventListener('click', () => {
    reset()
    playPc()
})

function resetScreen(){
    winner.classList.remove('center')
    loser.classList.remove('center')
    winner.classList.add('none')
    loser.classList.add('none')
    audioWin.pause()
    
}

function reset (){
    player1 = document.querySelector('input[name="play"]:checked').value
    imgUser.innerHTML = "<img src='assets/images/" + player1 + ".png'>"
    imgPC.innerText = ""
}

function playPc(){
    let opt = ['rock', 'paper', 'scissor']
    let num = Math.floor(Math.random() * opt.length)
    player2 = opt[num]
    imgPC.innerHTML = "<img src='assets/images/" + player2 + ".png'>"
    analyze()
}

function analyze(){
    


    if(player1 == "rock" && player2 == "scissor"){
       contUser = contUser + 1
       contador.innerHTML = "<span>" + contUser + ":" +  contPc +"</span>"   
    }else if(player1 == "rock" && player2 == "paper"){
        contPc = contPc + 1
        contador.innerHTML = "<span>" + contUser + ":" + contPc +  "</span>"  
    }else if(player1 == "rock" && player2 == "rock"){
        contador.innerHTML = "<span>" + contUser + ":" + contPc + "</span>"  
    }else if(player1 == "paper" && player2 == "rock"){
        contUser = contUser + 1
        contador.innerHTML = "<span>" + contUser + ":" + contPc +  "</span>"  
    }else if(player1 == "paper" && player2 == "scissor"){
        contPc = contPc + 1
        contador.innerHTML = "<span>" + contUser + ":" + contPc +  "</span>"  
    }else if(player1 == "paper" && player2 == "paper"){
        contador.innerHTML = "<span>" + contUser + ":" + contPc +  "</span>"  
    }else if(player1 == "scissor" && player2 == "rock"){
        contPc = contPc + 1
        contador.innerHTML = "<span>" + contUser + ":" + contPc +  "</span>"  
    }else if(player1 == "scissor" && player2 == "paper"){
        contUser = contUser + 1
        contador.innerHTML = "<span>" + contUser + ":" + contPc +  "</span>"  
    }else if(player1 == "scissor" && player2 == "scissor"){
        contador.innerHTML = "<span>" + contUser + ":" + contPc +  "</span>"  
    }

    if(contUser >= 5){
        winner.classList.remove('none')
        winner.classList.add('center')
        audioWin.play()
        contUser = 0
        contPc = 0
    }else if(contPc >= 5){
        loser.classList.remove('none')
        loser.classList.add('center')
        audioWin.play()
        contUser = 0
        contPc = 0
    }
}