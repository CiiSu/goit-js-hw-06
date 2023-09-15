
const loginForm = document.querySelector('.login-form');

        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); 

            const formData = new FormData(loginForm);
            const formObject = {};

            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            if (Object.values(formObject).every(value => value.trim() !== '')) {

                console.log(formObject);

                loginForm.reset();
            } else {

                alert('Wszystkie pola powinny zostać wypełnione');
            }
        });