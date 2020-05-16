const numbers = document.getElementById('numberButtons');
const buttons = document.querySelectorAll('.btn');
const display= document.getElementById('display');
let a ="";
let b= "";
let operator = "";
let content= display.textContent;
display.textContent=0;



function operate(a,b,operator){
    switch(operator){
        case '+':
            return +a + +b;
        case '-':
            return a-b;
        case 'x': 
            return a*b;
        case '/':
            return a/b;

    }
}

function execute(e) {
    const value = e.target.value;
    if (e.target.classList.contains('num')) {
            !content ? content=value : content+=value;
            display.textContent=content;
    }
    if (e.target.classList.contains('ops') && content!==""){
        !a ? a=content: b=content;
        operator=e.target.value;
        content="";
    }
    if (value=='c'){
        content="";
        display.textContent=0;
        a='';
        b='';
    }
    if (value=='=' && operator){
        b=content;
        console.log(a,b);
        let result=operate(a,b,operator);
        display.textContent=result;
        console.log(result);
        
    }
    // if (e.target.value=='d'){
    //     content=content.slice(0,-1);
    // }

    
}

buttons.forEach(btn => btn.addEventListener('click',execute));