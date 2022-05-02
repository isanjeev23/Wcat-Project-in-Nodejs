function appendLineNo(contentArr){
   let count = 1
   for(let i = 0 ; i<contentArr.length ; i++){
    
       contentArr[i] = `${count} ${contentArr[i]}` ;
       
       count++;
      
   }

   return contentArr ;
}

module.exports = {
    key : appendLineNo
}