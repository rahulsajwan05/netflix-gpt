export const checkValidData = (email) => {
    const isEmailValid =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    
    if(!isEmailValid) {
        return "Email is not valid.";
    } 
}

export const checkValidPassword = (password) => {
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/.test(password);
    if(!isPasswordValid) {
        return "Password is not valid.";
    }
}

export const checkValidName = (name) =>{
    const isNameValid = /^[a-zA-Z\s]{2,30}$/.test(name);
    if(!isNameValid) {
        return "Name is not valid.";
    }
}