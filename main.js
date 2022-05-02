#!/usr/bin/env node
const fs = require('fs');
const sObj = require('./commands/sOption');
const nObj = require('./commands/nOption');
const bObj = require('./commands/bOption');



let inputArr = process.argv.slice(2);

let optionsArr  = [], filesArr = [] ;

for(let i=0 ; i<inputArr.length ; i++){
    let str = inputArr[i];

    if(str.charAt(0) == '-'){

        optionsArr.push(inputArr[i]);

    }
    else{
        
          filesArr.push(inputArr[i]);
    }
} 
  
let isBothPresent = optionsArr.includes("-n") && optionsArr.includes("-b")
if (isBothPresent) {
    console.log("either enter -n or -b option.")
    return;
}



    // to read all the content in the file array 
    let fileContent ="";
    for(let i = 0 ; i<filesArr.length ; i++){

        let isPresent = fs.existsSync(filesArr[i]);
        
        if(isPresent == false){
            console.log(`${filesArr[i]} is not present`);
            return
        }

        let bufferContent = fs.readFileSync(filesArr[i]);
    
        fileContent +=bufferContent + '\n'; // on concatanation buffer implicitly convert to utf-8 string
    }
   


if(optionsArr.length == 0){
    // in the absence of command argument just display the content as it is
     console.log(fileContent);

}
let contentArr = fileContent.split('\n');
 
let isS_Present = optionsArr.includes('-s');
    if(isS_Present){

        contentArr= sObj.key(contentArr) ;

    }

let isN_Present = optionsArr.includes('-n');

    if(isN_Present){

        contentArr = nObj.key(contentArr);

    }


let isB_Present = optionsArr.includes('-b');

    if(isB_Present){

        
        contentArr =  bObj.key(contentArr);
        
    }


if(optionsArr.length !=0)
console.log(contentArr.join('\n'));