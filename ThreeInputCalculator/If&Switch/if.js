function IfStatement(){
    let userInput1 = document.getElementById("input1").value
    let userInput2 = document.getElementById("input2").value
    if(userInput1 > userInput2){
        document.getElementById("result").innerHTML = "value is greater than input 2";
    }else{
        document.getElementById("result").innerHTML = "value is smaller than input 2";
    }
}
