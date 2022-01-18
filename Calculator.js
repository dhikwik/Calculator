function calc(opt){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out;
    if(opt == "add"){
        out = `Answer is ${Number(a)+Number(b)}`;
    }
    if(opt == "sub") {
        out = `Answer is ${Number(a)-Number(b)}`;

    }
    if(opt == "mul"){
        out = `Answer is ${Number(a)*Number(b)}`;
    }
    
    if(opt== "div"){
        out = `Answer is ${Number(a)/Number(b)}`;
    }
    document.getElementById("output").innerText=out
}