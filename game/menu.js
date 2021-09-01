
/* eslint-disable indent */
const draw = (t) => console.log(t);
const keypress = require('../util/keypress');

let active = true
let selected = 0
const buttons = ['Music Select', 'Options', 'Exit']

// For space calculation
const columns = process.stdout.columns
const rows = process.stdout.rows-2

module.exports = async () => {
  while(active) {
    const key = await keypress();

    // Menu controller
    switch(key) {
      case 'right':
        selected++;
  
        if (selected > buttons.length-1) selected = 0;
        break;
  
      case 'left':
        selected--;
  
        if (selected < 0) selected = buttons.length-1;
        break;
  
      case 'enter':
        menuHandle();
        break;
  
      case 'escape':
        process.exit();
        break;
    }
  }
};

function menuHandle() {
  const option = buttons[selected];

  switch(option) {
    case 'Music Select':
      active = false;
      break;
    
    case 'Exit':
      process.exit();
  }
}