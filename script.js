function checkPrime(num){
    if(num <= 1){
        return false;
    }
    for(let i=2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

//implementing DOM element for html file

document.getElementById("sub-id").addEventListener("click", function(){
    let num = document.getElementById("input-id").value;
    let result = checkPrime(num);

    if(result){
        document.getElementById("dom-msg").innerHTML = num + "is prime number.";
    }else{
        this.document.getElementById("dom-msg").innerHTML = num + "is not a prime number.";
    }

});

document.getElementById("id-clear").addEventListener("click", () =>{
    document.getElementById("input-id").value = "";
    document.getElementById("dom-msg").innerHTML = "Resutl";
})