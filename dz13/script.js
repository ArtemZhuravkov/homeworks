casino.fillLines(3, values);
var result = casino.checkLines();
var horizontalCheck = casino.checkHorizontalElements(3);
var verticalCheck = casino.checkVerticalElements(1);



console.log(verticalCheck, horizontalCheck, casino.lines);
