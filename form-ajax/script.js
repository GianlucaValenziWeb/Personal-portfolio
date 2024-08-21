

// document.getElementById("icon-pass").addEventListener("click", function () {
//     const passwordInput = document.getElementById("pass");
//     const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
//     passwordInput.setAttribute('type', type);
// });
function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
    document.getElementById('welcomePopup').style.display = 'none';
}

window.onload = function () {
    if (!localStorage.getItem("popupShown")) {
        document.getElementById('popupOverlay').style.display = 'block';
        document.getElementById('welcomePopup').style.display = 'block';
        localStorage.setItem("popupShown", "true");
    }
};

document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('pass');
    const eyeOpen = document.getElementById('eyeOpen');
    const eyeClosed = document.getElementById('eyeClosed');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeOpen.style.display = 'none';
        eyeClosed.style.display = 'block';
    } else {
        passwordInput.type = 'password';
        eyeOpen.style.display = 'block';
        eyeClosed.style.display = 'none';
    }
});