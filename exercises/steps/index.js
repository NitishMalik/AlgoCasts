function steps(n){
    let row = 0;

    while(row < n){
        let column = 0 ;        
        let printStr ='' ;

        while(column < n ){
            if(column <= row){
                printStr += "#";
            }else{
                printStr += ' ';
            }
            column++
        }
        row++;
        console.log(printStr);        
    }    
}
module.exports = steps;
