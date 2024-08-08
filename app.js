let signUpForm = document.querySelector('#signUpForm');
signUpForm.addEventListener('submit' , (event)=>{
event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cpassword').value;

    let user = {
        username,
        password,
        cpassword
    }
    if (!username || !password || !cpassword){
        alert ('All fields are required')
        return
    }
    if (password.length < 8){
        alert ('your password must be 8 characters long');
        return
    }
    if (password !== cpassword){
        alert('passwor and confirm password must be same');
        return
    }
    // Get users from LocalStorage or initialize an empty array if none exist
    const users = JSON.parse(localStorage.getItem('users')) || [];

    users.push({username , password});

    localStorage.setItem('users' , JSON.stringify(users));

    alert('user SIGNUP Successfully');

    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1000);
})


