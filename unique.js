function removedup(arr){
    let uniquearr=[];
    for(let i of arr){
        if(uniquearr.indexOf(i)===-1){
            uniquearr.push(i);
        }
        
    }
    console.log(uniquearr)
}
const array=[1,2,4,5,3,1,6,2,7,1,3]
removedup(array);
 