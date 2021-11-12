function getChoice(choice, cpuContent) {
    if ( choice == cpuContent ){
        winner.innerHTML = `It is EQUAL!`
      } 
      else if ( choice == 'papir' && cpuContent == 'kamen') {
        winner.innerHTML = `Human is the WINNER,  ${choice} is stronger then ${cpuContent}`
      }
      else if ( choice == 'kamen' && cpuContent == 'makaze') {
        winner.innerHTML = `Human is the WINNER,  ${choice} is stronger then ${cpuContent}`
      }
      else if ( choice == 'makaze' && cpuContent == 'papir') {
        winner.innerHTML = `Human is the WINNER,  ${choice} is stronger then ${cpuContent}`
      }
      else {
        winner.innerHTML = `Computer is the WINNER,${cpuContent} is stronger then ${choice} `
      }
}