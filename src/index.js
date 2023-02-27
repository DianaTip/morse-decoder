const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var res = expr.match(/.{1,10}/g);
    var res1 = []; 
    var res2 = [];
      for (var i=0; i< res.length; i ++)
         {if(res[i] == '**********')
            {res2.push(' ');}
            else
            {res1 = res[i].replace(/^0+/, '');
             res1 = res1.replace( /10/g, '.');
             res1 = res1.replace( /11/g, '-');
             if (MORSE_TABLE[res1])
               { res2.push(MORSE_TABLE[res1]);}
              }
            }
    
return res2.join('')
}

module.exports = {
    decode
}