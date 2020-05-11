// Shorthand tool for controling if/else clauses
// Must have default cases, otherwise all other cases run
// without case check. Need a default.

let day = 5;

switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday')
    break;
  case 3:
    console.log('Wednesday')
    break;
  case 4:
    console.log('Thursday')
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  case 7:
    console.log('Sunday');
    break;
  default:
    console.log('Nothing');
    break;
}