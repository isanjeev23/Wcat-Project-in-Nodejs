function removeWhiteSp(contentArr){

    for (let i = 1; i < contentArr.length; i++) {
        if (contentArr[i] == "" && contentArr[i - 1] != "")
            contentArr[i] = null;
        else if (contentArr[i] == "" && contentArr[i - 1] == null)
            contentArr[i] = null;
    }
    let tempArr = [];
    for (let i = 0; i < contentArr.length; i++){
        if (contentArr[i] != null)
            tempArr.push(contentArr[i])

    }
    contentArr = tempArr;

    return contentArr
}

module.exports = {
    key : removeWhiteSp
}