const btns = document.querySelectorAll('.btn');
const inputBox = document.getElementById('input-box');
//console.log(inputBox);
btns.forEach(btn => {
    btn.addEventListener("click", (event)=>{
        if(btn.classList.contains('ac')){
            inputBox.value ='';
        }
        else if(btn.classList.contains('del')){
            let len = inputBox.value.length;
            inputBox.value = inputBox.value.slice(0,len-1);
        }
        else if(btn.classList.contains('calculate')){
            try{
                let expression = inputBox.value.replace(/x/g, '*').replace(/÷/g, '/');
                inputBox.value = eval(expression);
            }
            catch{
                inputBox.value = 'Syntax Error';
            }
        }
        else{
            inputBox.value += event.target.textContent;
        }
    });
});
