const registerForm = document.querySelector('.login-form');

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const email = registerForm.elements.email.value.trim();
    const password = registerForm.elements.password.value.trim();
  
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