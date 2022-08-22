const form1 = document.querySelector('.login-form');

form1.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const formEl = event.currentTarget.elements;

    const email = formEl.email;
    const password = formEl.password;

    if (email.value === "" || password.value === "") {
        return alert('Форма не полная!');
    }

    console.log({email: email.value , password: password.value});
}
form1.reset();