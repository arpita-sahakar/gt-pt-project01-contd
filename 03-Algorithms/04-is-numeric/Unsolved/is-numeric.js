// Write code to create a function that accepts a string and determines if the string is a valid number. You may not use any regex, built-in methods type conversion to accomplish this.

const isNumeric = (str)=> {
    let strNo = "1234567890";
    let isValidNo;
    for (i=0; i<str.length; i++){
        if(strNo.includes(str[i])){
            isValidNo = true;
        }else{
            isValidNo = false;
        }
    }
    console.log(isValidNo);
};

isNumeric("12bc")