let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
   
        item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log("Button test is ",buttonText);

        if(buttonText=='X'){
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }

        else if(buttonText=='AC'){
            screenValue =" ";
            screen.value=screenValue;        
        }
        
        else if(buttonText=='Del'){  
            screenValue=screen.value.slice(0,-1);        
           screen.value=screen.value.slice(0,-1);        
        }

        else if(buttonText=='Calc'){
            buttonText='=';
            try{
            screen.value=eval(screenValue);
        }catch(err){
            alert("Invalid Operation!!!")
        }
    }

        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}