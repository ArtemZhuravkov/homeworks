var lab_scheme = {
    'NO': ['###', '###', '###'],              
    'LR': ['###', '   ', '###'],
    'LT': ['# #', '  #', '###'],
    'BR': ['###', '#  ', '# #'],
    'LB': ['###', '  #', '# #'],
    'TR': ['# #', '#  ', '###']
}

function render(arr) { 
    var stringOne = '';     
    for(var line in arr) {                  
            for(i = 0; i < 3; i++) {                                        
                for(var key in arr[line]) {                     
                    stringOne += lab_scheme[arr[line][key]][i];                                      
            }
            stringOne += '\r\n';                                                                                    
        }                        
    }   
    console.log(stringOne);      
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
 






