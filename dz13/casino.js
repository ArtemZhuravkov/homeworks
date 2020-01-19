var values = [1, 2, 3, 4];



var casino = {
    lines: [],
    createRandomLineFrom: function (arr) {
        return arr.map(function(n, i, mappedArray) {
            return Math.ceil(Math.random() * (mappedArray.length - 1));
        });       
    },
    fillLines: function (linesAmount, fromArray) {
        var self = this;
        this.lines = Array(linesAmount).fill(1).map(function(){
            return self.createRandomLineFrom(fromArray);
        })       
    },
    checkLines: function (){
        var lineIndex = (this.lines[0].length - 1) / 2;
        value = this.lines[0][lineIndex];
        return this.result = this.lines.every(function (line){
            return line[lineIndex] === value;
        })
    },
    checkHorizontalElements: function (lineIndex){
        value = this.lines[0][lineIndex];
        return this.result = this.lines.every(function (line){
            return line[lineIndex] === value;
        })
    },
    checkVerticalElements: function (line){                       
        value = this.lines[line][0];        
        var self = this;
        return this.result = this.lines[line].every(function (lineIndex){
            return self.lines[line][lineIndex + 1] === value;
        })
    }   

}
                    
 
