function getChoice(choice, cpuContent) {
    if ( choice == cpuContent ){
        winner.innerHTML = `It is EQUAL!`
      } 
      else if ( choice == 'paper' && cpuContent == 'rock') {
        winner.innerHTML = `Human is the WINNER,  ${choice} is stronger then ${cpuContent}`
      }
      else if ( choice == 'rock' && cpuContent == 'scissors') {
        winner.innerHTML = `Human is the WINNER,  ${choice} is stronger then ${cpuContent}`
      }
      else if ( choice == 'scissors' && cpuContent == 'paper') {
        winner.innerHTML = `Human is the WINNER,  ${choice} is stronger then ${cpuContent}`
      }
      else {
        winner.innerHTML = `Computer is the WINNER,${cpuContent} is stronger then ${choice} `
      }
}