const loginFormHandler = async (event) => {
    
    event.preventDefault();
  
    
    const email = document.querySelector('#email-register').value.trim();
    const password = document.querySelector('#password-register').value.trim();
    const username = document.querySelector('#user-register').value.trim();
  
    if (email && password && username) {
      
      const response = await fetch('/api/users/register', {
        method: 'POST',
        body: JSON.stringify({ email, password, username }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert('Failed to log in');
      }
    }
};
  
  document
    .querySelector('#create-login-btn')
    .addEventListener('click', loginFormHandler);
  

