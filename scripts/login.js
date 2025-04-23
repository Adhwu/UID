function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const validUsername = 'NC.SC.U4CSE24001';
    const validPassword = 'Venontxj';
    const name ="admin";
    const pass1 ="1";
    if (username === validUsername && password === validPassword) {
        window.location.href = '/main.html';
    }else if(username === name && password===pass1){
        window.location.href = '/main.html';
    } else {
        const alertBox = document.getElementById('alert');
        alertBox.style.display = 'block';
    }
}