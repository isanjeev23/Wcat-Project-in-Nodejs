function bOption(contentArr){

    for (let i = 1; i < contentArr.length; i++) {
        if (contentArr[i] == "" && contentArr[i - 1] != "")
            contentArr[i] = null;
        else if (contentArr[i] == "" && contentArr[i - 1] == null)
            contentArr[i] = null;
    }
   
    let counter = 1;
   for(let i=0 ; i<contentArr.length ; i++){
       if(contentArr[i] !=null){
           contentArr[i] = `${counter} ${contentArr[i]}`
           counter ++;
       }
   }

    return contentArr
}

module.exports = {
    key : bOption
}