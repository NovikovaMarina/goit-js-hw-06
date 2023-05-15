const formEl = document.querySelector(".login-form");

 
formEl.addEventListener("submit", handleSubmit);

 function handleSubmit(event) {
     event.preventDefault();

     if (event.currentTarget.elements.email.value == '' || event.currentTarget.elements.password.value == '') {
         return alert("All fields must be filled!");}
         else{
            const email = event.currentTarget.elements.email.value;
            const password = event.currentTarget.elements.password.value;

            const formData = {
                email,
                password,
            };
            console.log(formData);
            event.currentTarget.reset();

         }
    


 }
