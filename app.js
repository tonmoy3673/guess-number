console.log('Connected');

const numberSubmit=(e)=>{
    e.preventDefault();
    let prevNum=[];
    let guessNum=11;
    const form = e.target;
    const inputField = form.guessField.value;
    const text = document.getElementById('message');
    console.log(inputField)
    if(isNaN(inputField) || inputField==''){
        alert('Invalid Input Number!!');
        form.guessField.value='';
        return 0;
    }
    else if(inputField < guessNum){
        text.innerText=`Your Number is Lower Than Guess Number ${inputField}`

        return 0;
    }
    else if(inputField>guessNum){
        text.innerText=`Your Number is Higher Than Guess Number ${inputField}`
        return 0;
    }

        prevNum.push(inputField)
        const prevMessage= document.getElementById('guesses');

    


}