const passwordInput = document.getElementById('password');
const strengthBar = document.querySelector('.strength-bar');
const strengthText = document.getElementById('strength-text');
const togglePassword = document.getElementById('toggle-password');
const eyeIcon = document.getElementById('eye-icon');

let passwordVisible = false;

passwordInput.addEventListener('input', function () {
      const password = passwordInput.value;
      let strength = 0;

      if (password.length >= 8) strength += 1;
      if (/[A-Z]/.test(password)) strength += 1;
      if (/[0-9]/.test(password)) strength += 1;
      if (/[^A-Za-z0-9]/.test(password)) strength += 1;

      switch (strength) {
            case 0:
            case 1:
                  strengthBar.style.width = '25%';
                  strengthBar.style.backgroundColor = 'red';
                  strengthText.textContent = 'Strength: Weak';
                  break;
            case 2:
                  strengthBar.style.width = '50%';
                  strengthBar.style.backgroundColor = 'orange';
                  strengthText.textContent = 'Strength: Medium';
                  break;
            case 3:
                  strengthBar.style.width = '75%';
                  strengthBar.style.backgroundColor = 'yellow';
                  strengthText.textContent = 'Strength: Strong';
                  break;
            case 4:
                  strengthBar.style.width = '100%';
                  strengthBar.style.backgroundColor = 'green';
                  strengthText.textContent = 'Strength: Very Strong';
                  break;
      }
});

togglePassword.addEventListener('click', function () {
      passwordVisible = !passwordVisible;
      const type = passwordVisible ? 'text' : 'password';
      passwordInput.setAttribute('type', type);

      if (passwordVisible) {
            eyeIcon.src = "https://img.icons8.com/ios-glyphs/30/000000/invisible.png";
      } else {
            eyeIcon.src = "https://img.icons8.com/ios-glyphs/30/000000/visible.png";
      }
});
