console.log('using update.js')

async function personHandler(event) {
    
    event.preventDefault();
    
    //const input = document.querySelector('.input-field').value.trim()

  
     const name = document.getElementById('name').value.trim()
     const email = document.getElementById('email').value.trim()
     const phonenumber = document.getElementById('phone').value.trim()
     const address = document.getElementById('address').value.trim()

    if(name && email && phonenumber && address){
      
      const response = await fetch('/api/put-requests/residents', {
        method: 'PUT',
        body: JSON.stringify({ name, email, phonenumber, address }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response);
  
    if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to update');
      }
    
  } else {
    alert('Please fill out all fields (If same information re-enter)');
  }
}

  
  document
    .getElementById('update-person')
    .addEventListener('click', personHandler);
  

