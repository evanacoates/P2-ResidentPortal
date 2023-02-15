console.log('using update.js')

async function lFHandler(event) {
    
    event.preventDefault();
    
    
    
    //const input = document.querySelector('.input-field').value.trim()

  
     const input = document.querySelector('.input').value.trim()
     console.log(input);
    
  

    console.log(input)
    if(input){
      
      const response = await fetch('/api/put-request/', {
        method: 'put',
        body: JSON.stringify({ input }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(input)
  
       if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to update');
      }
    
  } 
}

  
  document
    .getElementById('update')
    .addEventListener('click', lFHandler);
  

