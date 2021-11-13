const paper = document.querySelector('#paper');
const rock = document.querySelector('#rock');
const scissors = document.querySelector('#scissors');
const human = document.querySelector('#human-choice');
const cpu = document.querySelector('#cpu-choice');
const winner = document.querySelector('#winner');
const play = document.querySelector('#play');
const form = document.querySelector('#form');
const section2 = document.querySelector('#section2');

listiners(paper);
listiners(rock);
listiners(scissors);
playListiner(play);

function click(choice) {
    if ('click'){
        human.innerHTML = `Human choice is ${choice.toUpperCase()}`;
        cpu.innerHTML = `The computer decides...`;
        setTimeout(() => {
            const choiceArr = [paper,rock,scissors];
            const rand = choiceArr[random()]
            const cpuContent = rand.textContent;
            getChoice(choice,cpuContent)
          
      
            cpu.innerHTML = `Computer choice is ${rand.textContent.toUpperCase()}`;
        }, 1000);
    }
}

function playListiner(arg) {
    arg.addEventListener('click', function(e){
        form.style.display = "";
        section2.style.display = "";
        play.style.display = "none";
        e.preventDefault()
    });
}

function listiners (argument){
    argument.addEventListener("click", function(e) {
        
        click(`${argument.textContent}`)
        e.preventDefault();
    });
};

const random = () => {
    const num = Math.floor(Math.random()*3)
    return num
}

