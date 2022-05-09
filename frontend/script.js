console.log(varVariable); //lentebb inicializűltuk de már itt is elérhető a mneve, de értéke undefined

let globalVariable1 = 12;

let globalVariable2 = function (){
    let funVariable1 = "hello"; 
    
    console.log(globalVariable1);
    
    let funVariable2 = function (){
        console.log("funVariable2 függvény belseje");
        console.log(globalVariable1);
        console.log(funVariable1);
        
        let funInFunVariable1 = true;
        console.log(funInFunVariable1);
        let funInFunVariable2 = function (){
            console.log(funInFunVariable1);
        }
        funInFunVariable2();
    }
    funVariable2();

    console.log(funVariable1);
    if (funVariable1 === "hi") {
        var blockVariable1 = "bye";
    }else {
        //console.log(blockVariable1) 
    }
    console.log(blockVariable1); 
}

globalVariable2();

// console.log(funVariable1); ez itt nem látható, mivel egy függvényen belül hoztuk létre



var varVariable = 1;

let letVariable1;
console.log(letVariable1);

let letVariable2 = "variable 2";
console.log(letVariable2);

const constVariable = "ciao";
//constVariable = "hello";
console.log(constVariable);

const constObj1 = {};
// constObj1.key = "value";
//constObj1 = {key : "value"};
console.log(constObj1); 


const globalVariable3 = function (parameter1, parameter2, parameter3) {
    console.log(parameter1);
    console.log(parameter2);
    console.log(parameter3);
    console.log(parameter3());
}

const globalVariable4 = "apple";

const globalVariable5 = function (){
    return "pear";
}

const globalVariable6 = function (){
    return "shoes";
}

globalVariable3(globalVariable5(), globalVariable4, globalVariable6);

const loadEvent = function (para1){
    const rootElement = document.getElementById("root");
    console.log(rootElement);
    console.log(para1);
    //console.log(globalVariable1);
    rootElement.addEventListener("click", function (event){
        console.log(event.currentTarget);
        event.currentTarget.insertAdjacentHTML("beforeend", "Clicked, ");
        event.currentTarget.classList.toggle("clicked")
    })

}

window.addEventListener("load", loadEvent)

