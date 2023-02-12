const loginFormHandler = async (event) => {
    
    event.preventDefault();
  
    const name = document.getElementById('name-input').value.trim();
    const username = document.getElementById('username-input').value.trim();
    const password = document.getElementById('password-input').value.trim();
    const unitNumber = document.getElementById('unit-input').value.trim();
    const email = document.getElementById('email-input').value.trim();
  
    if (username && password && unitNumber && email && name) {
      
      const response = await fetch('/api/users/register', {
        method: 'POST',
        body: JSON.stringify({ password, username, unitNumber, email, name }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert('Please fill in all forms');
      }
    }
};
  
  document
    .getElementById('register')
    .addEventListener('click', loginFormHandler);
  

