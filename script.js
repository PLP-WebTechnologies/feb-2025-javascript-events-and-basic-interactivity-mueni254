// Change button color on click
document.getElementById('colorButton').addEventListener('click', function() {
    this.style.backgroundColor = this.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
  });
  
  // Secret double-click action
  document.getElementById('colorButton').addEventListener('dblclick', function() {
    alert('Secret double-click action triggered!');
  });
  
  // Keypress detection
  document.addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
  });
  
  // Tab functionality
  function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    const tablinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
  }
  
  // Form validation
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;
  
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (!email.value.includes('@')) {
      emailError.textContent = 'Please enter a valid email.';
      valid = false;
    } else {
      emailError.textContent = '';
    }
  
    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    if (password.value.length < 8) {
      passwordError.textContent = 'Password must be at least 8 characters.';
      valid = false;
    } else {
      passwordError.textContent = '';
    }
  
    if (valid) {
      alert('Form submitted successfully!');
      this.reset();
    }
  });
  