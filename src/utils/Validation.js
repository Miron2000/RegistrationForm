
export  function validateInputText(inputValue){
  
    // Валідація 
    return (inputValue && !/^[A-Z]+$/gi.test(inputValue)) ? 'Invalid input' : '';
}

export  function validateInputNumber(inputValue){
  
    // Валідація 
    return (inputValue && !/^[0-9]+$/gi.test(inputValue)) ? 'Invalid input' : '';
}