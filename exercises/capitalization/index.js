function capitalize(str){
    const resultStr =[] ;

    for(let arr of str.split(' ')){
        resultStr.push(arr[0].toUpperCase() + arr.slice(1));        
    }
    return resultStr.join(' ');    
}

module.exports = capitalize;
