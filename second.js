let userscore=0;
let computer=0;
const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");



const userscoreparagraph=document.querySelector("#user-score");
const computerscoreparagraph=document.querySelector("#comp-score");
const gencompchoice=()=>{
const options=["rock","paper","scissor"];
const ranindex=Math.floor(Math.random()*3);
return options[ranindex];
};

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
      userscore++;
      userscoreparagraph.innerText=userscore;
      msg.innerText=`You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else {
    computer++;
    computerscoreparagraph.innerText=computer;
      msg.innerText=`You lose! ${compchoice} beats ${userchoice}`;
           msg.style.backgroundColor="red";
    }
}

const drawgame=()=>{
    
     msg.innerText="Game was draw,play again";
       msg.style.backgroundColor="#f59e0b";
}
const playgame=(userchoice)=>{
console.log("user choice=",userchoice);
const compchoice=gencompchoice();
console.log(" computer choice=",compchoice)
if(compchoice==userchoice){
drawgame();
}
else {
    let userwin=true;
    if(userchoice=="rock"){
        //scissors,paper
    userwin=compchoice=="paper" ? false :true;
    }
    else if(userchoice=="paper"){
        //rock ,scissors
        userwin=compchoice=="scissors"?false:true;
    }
    else {
        //rock,paper
        userwin=compchoice=="rock"?false:true;

    }
    showwinner(userwin,userchoice,compchoice);
}
}
choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    console.log("choice was clicked by the user",userchoice);
    playgame(userchoice);
   })
})


//reset
const restartgame=document.querySelector(".restart");
restartgame.addEventListener("click",()=>{
    userscore=0;
    computer=0;
    userscoreparagraph.innerText=userscore;
    computerscoreparagraph.innerText=computer;
    msg.innerText="play your move";
    msg.style.backgroundColor="";

});
const darkmode = document.querySelector("#dark-mode");

darkmode.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkmode.innerText = "☀️ Light Mode";
    } else {
        darkmode.innerText = "🌙 Dark Mode";
    }
});

//music
const music = document.querySelector("#bg-music");
const musicbtn = document.querySelector("#music-btn");

let musicOn = false;

musicbtn.addEventListener("click", () => {

    if (musicOn) {
        music.pause();
        musicbtn.innerText = "🔇 Music Off";
        musicOn = false;
    }
    else {
        music.play();
        musicbtn.innerText = "🔊 Music On";
        musicOn = true;
    }

});



