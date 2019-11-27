var lab_scheme = {
    'NO': ['###', '###', '###'],              
    'LR': ['###', '   ', '###'],
    'LT': ['# #', '  #', '###'],
    'BR': ['###', '#  ', '# #'],
    'LB': ['###', '  #', '# #'],
    'TR': ['# #', '#  ', '###']
}

function render(arr) { 
    var arr = [];  
    for(key in lab_scheme) {  
        for(i = 0; i < 3; i++) {
            var stringOne = '',
                stringTwo = '',
                stringThree = '';                          
            stringOne += lab_scheme[key][0];                
            stringTwo += lab_scheme[key][1];       
            stringThree += lab_scheme[key][2];
            var line = [];                          
        }
        for(k = 0; k < line.length; k++){
           
           line.push(stringOne[i]);
        }              
    }         
}
 render([
    ['NO', 'BR', 'LR', 'LB', 'NO'],
    ['LR', 'LT', 'NO', 'TR', 'LR']
])   
// ###############
// ####       ####
// #### ##### ####
// #### ##### ####
//      #####     
// ###############
 






