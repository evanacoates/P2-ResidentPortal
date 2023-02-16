

async function lFHandler(event) {
    
    event.preventDefault();
    
    
    
    //const input = document.querySelector('.input-field').value.trim()

  
     const input = document.querySelector('.input').value.trim()
    
    const windowLocation = window.location.pathname;

    const dynamicBody = {}
  

    
    if(input){
      
      const response = await fetch('/api/put-request'+ windowLocation, {
        method: 'PUT',
        body: JSON.stringify({  }),
        headers: { 'Content-Type': 'application/json' },
      });

     
    
  
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
  

