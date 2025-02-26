console.log('Connected');

const numberSubmit=(e)=>{
    e.preventDefault();
    let prevNum=[];
    let guessNum=11;
    const form = e.target;
    const inputField = form.guessField.value;
    const text = document.getElementById('message');
    const resultValue = document.getElementById('result');
    const result = parseInt(resultValue.innerText);
    const finalResult= document.getElementById('final-result')
    const resultContainer = document.getElementById('result-container');
    const submitButton= document.getElementById('subt');
    const prevMessage= document.getElementById('guesses');
    
    if(isNaN(inputField) || inputField==''){
        alert('Invalid Input Number!!');
        form.guessField.value='';
        return 0;
    }
    else{
        prevNum.push(inputField);
    }

       
    prevNum.join(', ');
    prevNum.forEach(num=>{
        prevMessage.innerText=num;
    })

     if(inputField < guessNum){
        if(result>0){
            resultValue.innerText=  result-1
            prevNum.push(inputField)
        }
        else {
            form.guessField.disabled = true; 
       return alert('Maximum Attempts Found!!')
        }
        text.innerText=`Your Number ${inputField} is Lower Than Guess Number!!`
        return 0;
    }
    else if(inputField>guessNum){
       
        if(result>0){
            resultValue.innerText=  result-1
            
        }
        else {
            form.guessField.disabled = true;
            finalResult.style.cssText='font-size:24px; color:red'
            finalResult.innerText='You Lost The Game!Never Give UP!!';
            resultContainer.style.display='none'
            submitButton.style.display='none';
        return alert('Maximum Attempts Found!!');
        }
         text.innerText=`Your Number ${inputField} is Higher Than Guess Number!!`;
        return 0;
    
    }
    

        if (inputField==guessNum) {
            resultContainer.style.display='none'
            submitButton.style.display='none';
            finalResult.style.cssText='font-size:25px; color:green;font-weight:600;'
            finalResult.innerText=`Matched!! You Win The Game!!`
        }
        

    


}