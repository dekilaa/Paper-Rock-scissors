const paper = document.querySelector('#paper');
const rock = document.querySelector('#rock');
const scissors = document.querySelector('#scissors');
const human = document.querySelector('#human-choice');
const cpu = document.querySelector('#cpu-choice');
const winner = document.querySelector('#winner');
const play = document.querySelector('#play');
const playAgain = document.querySelector('#playAgain');
const form = document.querySelector('#form');
const section2 = document.querySelector('#section2');
const playersHealth = document.querySelector('#players-health');
const cpuHealth = document.querySelector('#cpu-health');
const welcome = document.querySelector('#welcome');

listiners(paper);
listiners(rock);
listiners(scissors);

playListiner(play);


function click(choice) {
    if ('click'){
        human.innerHTML = `Human choice is ${choice.toLowerCase()}`;
        cpu.innerHTML = `The computer decides...`;
   
        setTimeout(() => {
            const choiceArr = [paper,rock,scissors];
            const rand = choiceArr[random()]
            const cpuContent = rand.textContent;
            getChoice(choice,cpuContent)

            cpu.innerHTML = `Computer choice is ${rand.textContent.toUpperCase()}`;
                if (winner.title === 'human') {
                    removeLastChild(cpuHealth)
                }
                 if (winner.title === 'cpu') {
                    removeLastChild(playersHealth)
                }
            endChecker()    
      
        }, 500);
    }
}

function endChecker() {
    if(playersHealth.children.length < 1 || cpuHealth.children.length < 1) {
        form.style.display = "none";
        section2.style.display = "none";
        playAgain.style.display = "";
        play.style.display = "none";
        playersHealth.style.display = "none";
        cpuHealth.style.display = "none";
        welcome.style.display = "none";
        if(playersHealth.children.length > cpuHealth.children.length) {
            winner.innerHTML = `Human is the WINNER`
            winner.style.color = 'red'
        } else {
            winner.innerHTML = `CPU is the WINNER`
            winner.style.color = 'red'
        }
        refreshListiner(playAgain)
       }
}
function refreshListiner (arg) {
    arg.addEventListener('click', function(e){
        location.reload()
        
    });
}

function playListiner(arg) {
    arg.addEventListener('click', function(e){
        
        form.style.display = "";
        section2.style.display = "";
        play.style.display = "none";
        
        document.body.style.backgroundColor = '#94B3FD';
        
        playersHealth.style.display = "";
        cpuHealth.style.display = "";
      ;
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

const removeLastChild = (name) => {
    name.removeChild(name.lastElementChild);
}