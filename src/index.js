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
/*var res = expr.match(/.{1,10}/g);
var res1 = [];
for (var i=0; i< res.length; i ++)
    if (res[i] = '**********')
        res[i] = ' '
        else
    {res[i] = res[i].replace(/^0+/, '');
    for (var i=0; i< res.length; i++)
        res1 = res[i].match(/.{1,2}/g);
        for (var j=0; j< res1.length; j++)
            if (res1[j] == '10')
                res[j] = '.'
            else 
                res[j] = '-'
    }   */
  

    var res = expr.match(/.{1,10}/g);
    var res2 = []; 
    var res3 = []; 
    var res4 = []; 
    for (var i=0; i< res.length; i ++)
     { if(res[i] == '**********')
           { res2.push(' ');
           }
        else
        {res3 = res[i].replace(/^0+/, '');
            res4 = res3.match(/.{1,2}/g);
            for (var j=0; j< res4.length; j++)
                if (res4[j] == '10')
                {res2.push('.');}
                else 
                {res2.push('-');}
        }}



}

module.exports = {
    decode
}