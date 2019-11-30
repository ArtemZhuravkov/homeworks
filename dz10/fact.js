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
            for(var key in line){
                console.log(arr[line]);
                for(key in lab_scheme) {
                    stringOne += lab_scheme[key][0];                
                    stringOne += lab_scheme[key][1];
                    stringOne += lab_scheme[key][2];
                    stringOne += '\r\n';
                }              
            }                                                
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
 






