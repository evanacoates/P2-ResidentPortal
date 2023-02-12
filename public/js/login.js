console.log('using login.js')

async function lFHandler(event) {
    console.log('before prevent default')
    event.preventDefault();
    
  
    
    const username = document.getElementById('username-input').value.trim();
    const password = document.getElementById('password-input').value.trim();
  
    if (username && password) {
      
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
       if (response.ok) {
        document.location.replace('/');
        console.log('enetered user && password')
      } else {
        alert('Failed to log in');
      }
    
  }
};
  
  document
    .getElementById('enter')
    .addEventListener('click', lFHandler);
  

