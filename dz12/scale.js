var circle = {
    el: document.querySelector('.circle'),
    x: 0,
    y: 0,
    size: function (sizing, coef) {
        var transform;
            switch(sizing) {
            case 'increase':
                transform = 'scale(' + (this.x += coef) + ')';
                transform = 'scale(' + (this.y += coef) + ')';
                break;
            case 'decrease':
                transform = 'scale(' + (this.x -= coef) + ')';
                transform = 'scale(' + (this.y -= coef) + ')';
                break;
            }
        this.el.style.transform = transform;
    },
    increase: function(coef) {
        this.size('increase', coef);
    },
    decrease: function(coef) {
        this.size('decrease', coef);
    }
}

setTimeout(function(){
    circle.increase(1.5);
    setTimeout(function() {
    circle.decrease(.8);
    },500)    
},500)
