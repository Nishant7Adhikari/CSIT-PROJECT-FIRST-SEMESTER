const form = document.getElementById('loginForm');
const error = document.getElementById('error');

const ADMIN_USER = 'admin';
const ADMIN_PASS = 'admin123';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === ADMIN_USER && password === ADMIN_PASS) {
        sessionStorage.setItem('adminLoggedIn', 'true');
        window.location.href = 'admin.html';
    } else {
        error.textContent = 'Invalid username or password';
        error.classList.add('show');
        document.getElementById('password').value = '';
    }
});
