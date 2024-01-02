const registerForm = document.querySelector('.login-form');

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const email = registerForm.elements.email.value;
    const password = registerForm.elements.password.value;
  
    if (email === "" || password === "") {
    return alert("All form fields must be filled in");
    }
    
    const userData = {
        email,
        password,
    }
console.log(userData);
    registerForm.reset();
}