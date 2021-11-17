function getChoice(choice, cpuContent) {

  
    if ( choice == cpuContent ){
      winner.title = "EQUAL"
      return winner.innerHTML = `It is EQUAL!`
      } 
      else if ( choice == 'Paper' && cpuContent == 'Rock') {
        winner.title = "human"
        return winner.innerHTML = `Human is the WINNER,  ${choice} is stronger then ${cpuContent}`   
      }
      else if ( choice == 'Rock' && cpuContent == 'Scissors') {
        winner.title = "human"
        return winner.innerHTML = `Human is the WINNER,  ${choice} is stronger then ${cpuContent}`
      }
      else if ( choice == 'Scissors' && cpuContent == 'Paper') {
        winner.title = "human"
        return winner.innerHTML = `Human is the WINNER,  ${choice} is stronger then ${cpuContent}`
      }
      else {
        winner.title = "cpu"
        return winner.innerHTML = `Computer is the WINNER,${cpuContent} is stronger then ${choice} `
        
      }
 
}

