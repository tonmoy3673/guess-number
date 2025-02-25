console.log('Connected');

const numberSubmit=(e)=>{
    e.preventDefault();
    let prevNum=[];
    const form = e.target;
    const inputField = form.guessField.value;
    console.log(inputField)
    if(isNaN(inputField) || inputField==''){
        alert('Invalid Input Number!!');
        form.guessField.value='';
        return 0;
    }

}