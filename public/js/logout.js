const logout = async () => {
    // TODO: Add a comment describing the functionality of this expression
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // TODO: Add a comment describing the functionality of this statement
      document.location.replace('/');
    } else {
      alert('Failed to log out');
    }
  };
  
  document.getElementById('logout').addEventListener('click', logout);