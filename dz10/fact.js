var lab_scheme = {
    'NO': ['###', '###', '###'],              
    'LR': ['###', '   ', '###'],
    'LT': ['# #', '  #', '###'],
    'BR': ['###', '#  ', '# #'],
    'LB': ['###', '  #', '# #'],
    'TR': ['# #', '#  ', '###']
}

function render(arr) {   
    for(key in lab_scheme) {  
        for(i = 0; i < 3; i++) {
            var stringOne = '',
                stringTwo = '',
                stringThree = '';                          
            stringOne += lab_scheme[key][0];                
            stringTwo += lab_scheme[key][1];       
            stringThree += lab_scheme[key][2];                          
        }
        for(prop in arr){
           var prop = lab_scheme[key];
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
 






