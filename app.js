function replaceUrlSpaces(str){
    const newArr = str.trim().split("")

    for(let i in newArr){
        if(newArr[i] === " "){
            newArr[i] = '%20'
        }
    }
    return newArr.join("")
}
 console.log(replaceUrlSpaces("fox jump lamb s")); //fox%20jump%20lamb%20s

